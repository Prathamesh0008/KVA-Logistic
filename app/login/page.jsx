'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Kalam } from 'next/font/google'
import { useRouter } from 'next/navigation'
import {
  ClipboardPlus,
  ChevronDown,
  CheckCircle2,
  ClipboardList,
  Headset,
  History,
  Moon,
  Mail,
  MapPin,
  Package,
  Pencil,
  Phone,
  Plus,
  Sun,
  LogOut,
  Users,
  Trash2
} from 'lucide-react'

const getFlagEmoji = (countryCode = '') =>
  countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))

const getReliableFlagUrl = (countryCode = '') => {
  const code = String(countryCode || '').toLowerCase()
  if (!code) return ''
  return `https://flagcdn.com/w40/${code}.png`
}

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [authMode, setAuthMode] = useState('login')
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    whatsapp: ''
  })
  const [contactData, setContactData] = useState({
    country: '',
    name: '',
    company: '',
    postalCode: '',
    houseNumber: '',
    addition: '',
    extraAddressInfo: '',
    email: '',
    phoneCode: '',
    mobile: '',
    reference: ''
  })
  const [products, setProducts] = useState([])
  const [parcelDrafts, setParcelDrafts] = useState([])
  const [editingParcelIndex, setEditingParcelIndex] = useState(null)
  const [productDraft, setProductDraft] = useState({ name: '', quantity: 1 })
  const [editingIndex, setEditingIndex] = useState(null)
  const [errors, setErrors] = useState({})
  const [countries, setCountries] = useState([])
  const [phoneCodes, setPhoneCodes] = useState([])
  const [currentUserEmail, setCurrentUserEmail] = useState('')
  const [savedAddresses, setSavedAddresses] = useState([])
  const [saveAddressForFuture, setSaveAddressForFuture] = useState(false)
  const [selectedSavedAddressId, setSelectedSavedAddressId] = useState('')
  const [orderHistory, setOrderHistory] = useState([])
  const [latestOrderId, setLatestOrderId] = useState('')
  const [activeSidebarTab, setActiveSidebarTab] = useState('new_order')
  const [supportForm, setSupportForm] = useState({ name: '', email: '', message: '' })
  const [supportMessage, setSupportMessage] = useState('')
  const [accountForm, setAccountForm] = useState({ name: '', password: '', whatsapp: '', profilePhoto: '' })
  const [accountMessage, setAccountMessage] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('kva_theme_mode') === 'dark'
  })
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [isPhoneCodeOpen, setIsPhoneCodeOpen] = useState(false)
  const [countryQuery, setCountryQuery] = useState('')
  const [phoneCodeQuery, setPhoneCodeQuery] = useState('')
  const [nameQuery, setNameQuery] = useState('')
  const [isNameSuggestionOpen, setIsNameSuggestionOpen] = useState(false)
  const [recipientsSearch, setRecipientsSearch] = useState('')
  const [selectedRecipientKey, setSelectedRecipientKey] = useState('')
  const [editingSavedRecipientId, setEditingSavedRecipientId] = useState('')
  const [selectedRecipientSource, setSelectedRecipientSource] = useState('')
  const [selectedRecipientParcelIndex, setSelectedRecipientParcelIndex] = useState(null)
  const [showRecipientDetails, setShowRecipientDetails] = useState(false)
  const [activeCountryIndex, setActiveCountryIndex] = useState(0)
  const [activePhoneCodeIndex, setActivePhoneCodeIndex] = useState(0)
  const countryPickerRef = useRef(null)
  const phoneCodePickerRef = useRef(null)
  const nameSuggestionRef = useRef(null)
  const countrySearchInputRef = useRef(null)
  const phoneCodeSearchInputRef = useRef(null)

  const LOGIN_SESSION_KEY = 'kva_demo_login_session'
  const THEME_KEY = 'kva_theme_mode'

  const persistSession = (email, password, stepValue) => {
    localStorage.setItem(
      LOGIN_SESSION_KEY,
      JSON.stringify({
        email,
        password,
        step: stepValue
      })
    )
  }

  const apiRequest = async (url, options = {}) => {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      ...options
    })
    const data = await response.json().catch(() => ({}))
    if (!response.ok) {
      throw new Error(data?.error || 'Request failed')
    }
    return data
  }

  const fetchUserContext = async (normalizedEmail) => {
    return apiRequest(`/api/user-context?email=${encodeURIComponent(normalizedEmail)}`)
  }

  const hydrateUserContext = async (normalizedEmail, password = 'demo123', stepValue = 2) => {
    setCurrentUserEmail(normalizedEmail)
    setLoginData({
      email: normalizedEmail,
      password
    })
    setSupportForm((prev) => ({ ...prev, email: normalizedEmail }))

    const context = await fetchUserContext(normalizedEmail)
    const matched = context?.user

    setAccountForm({
      name: matched?.name || '',
      password: matched?.password || password,
      whatsapp: matched?.whatsapp || '',
      profilePhoto: matched?.profilePhoto || ''
    })

    setSavedAddresses(context?.addresses || [])
    setSelectedSavedAddressId('')
    setOrderHistory(context?.orders || [])

    setContactData((prev) => ({ ...prev, email: normalizedEmail }))
    setStep(stepValue)
  }

  useEffect(() => {
    const loadCountryData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags')
        const data = await response.json()

        const countryList = data
          .map((item) => ({
            code: item.cca2 || '',
            name: item.name?.common || '',
            flagUrl: item.flags?.png || item.flags?.svg || '',
            flagEmoji: getFlagEmoji(item.cca2 || '')
          }))
          .filter((item) => item.code && item.name)
          .sort((a, b) => a.name.localeCompare(b.name))

        const phoneCodeList = []
        data.forEach((item) => {
          const countryCode = item.cca2 || ''
          const countryName = item.name?.common || ''
          const root = item.idd?.root || ''
          const suffixes = item.idd?.suffixes || []
          if (!countryCode || !countryName || !root || suffixes.length === 0) return

          suffixes.forEach((suffix) => {
            const dialCode = `${root}${suffix}`
            phoneCodeList.push({
              dialCode,
              countryCode,
              countryName,
              flagUrl: item.flags?.png || item.flags?.svg || '',
              flagEmoji: getFlagEmoji(countryCode),
              label: `${dialCode} (${countryName})`
            })
          })
        })

        phoneCodeList.sort((a, b) => {
          if (a.dialCode === b.dialCode) return a.countryName.localeCompare(b.countryName)
          return a.dialCode.localeCompare(b.dialCode)
        })

        setCountries(countryList)
        setPhoneCodes(phoneCodeList)
      } catch {
        setCountries([
          { code: 'IN', name: 'India', flagUrl: 'https://flagcdn.com/w40/in.png', flagEmoji: 'ðŸ‡®ðŸ‡³' },
          { code: 'US', name: 'United States', flagUrl: 'https://flagcdn.com/w40/us.png', flagEmoji: 'ðŸ‡ºðŸ‡¸' },
          { code: 'GB', name: 'United Kingdom', flagUrl: 'https://flagcdn.com/w40/gb.png', flagEmoji: 'ðŸ‡¬ðŸ‡§' }
        ])
        setPhoneCodes([
          { dialCode: '+91', countryCode: 'IN', countryName: 'India', flagUrl: 'https://flagcdn.com/w40/in.png', flagEmoji: 'ðŸ‡®ðŸ‡³', label: 'ðŸ‡®ðŸ‡³ +91 (India)' },
          { dialCode: '+1', countryCode: 'US', countryName: 'United States', flagUrl: 'https://flagcdn.com/w40/us.png', flagEmoji: 'ðŸ‡ºðŸ‡¸', label: 'ðŸ‡ºðŸ‡¸ +1 (United States)' },
          { dialCode: '+44', countryCode: 'GB', countryName: 'United Kingdom', flagUrl: 'https://flagcdn.com/w40/gb.png', flagEmoji: 'ðŸ‡¬ðŸ‡§', label: 'ðŸ‡¬ðŸ‡§ +44 (United Kingdom)' }
        ])
      }
    }

    loadCountryData()
  }, [])

  useEffect(() => {
    localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    const restoreSession = async () => {
      const sessionRaw = localStorage.getItem(LOGIN_SESSION_KEY)
      if (!sessionRaw) return

      try {
        const session = JSON.parse(sessionRaw)
        if (!session?.email) return
        const normalizedEmail = String(session.email).toLowerCase()
        await hydrateUserContext(
          normalizedEmail,
          session.password || 'demo123',
          session.step && session.step >= 2 ? session.step : 2
        )
      } catch {
        localStorage.removeItem(LOGIN_SESSION_KEY)
      }
    }

    restoreSession()
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!countryPickerRef.current?.contains(event.target)) {
        setIsCountryOpen(false)
      }
      if (!phoneCodePickerRef.current?.contains(event.target)) {
        setIsPhoneCodeOpen(false)
      }
      if (!nameSuggestionRef.current?.contains(event.target)) {
        setIsNameSuggestionOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  useEffect(() => {
    if (isCountryOpen) {
      setTimeout(() => countrySearchInputRef.current?.focus(), 0)
    }
  }, [isCountryOpen])

  useEffect(() => {
    if (isPhoneCodeOpen) {
      setTimeout(() => phoneCodeSearchInputRef.current?.focus(), 0)
    }
  }, [isPhoneCodeOpen])

  const handleDemoLogin = async (e) => {
    e.preventDefault()
    if (!loginData.email || !loginData.password) {
      setErrors({ login: 'Email and password are required.' })
      return
    }
    try {
      const normalizedEmail = loginData.email.trim().toLowerCase()
      try {
        await apiRequest('/api/admin/orders-summary', {
          method: 'POST',
          body: JSON.stringify({ email: normalizedEmail, password: loginData.password })
        })
        localStorage.setItem(
          'kva_admin_session',
          JSON.stringify({ email: normalizedEmail, password: loginData.password })
        )
        setErrors({})
        router.push('/admin')
        return
      } catch (adminError) {
        if (normalizedEmail.includes('admin')) {
          setErrors({ login: adminError.message || 'Invalid admin credentials.' })
          return
        }
      }

      await apiRequest('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: normalizedEmail, password: loginData.password })
      })
      await hydrateUserContext(normalizedEmail, loginData.password, 2)
      setErrors({})
      persistSession(normalizedEmail, loginData.password, 2)
    } catch (error) {
      setErrors({ login: error.message || 'Login failed.' })
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    if (!registerData.name.trim() || !registerData.email.trim() || !registerData.password.trim() || !registerData.whatsapp.trim()) {
      setErrors({ register: 'All fields are required.' })
      return
    }
    try {
      const normalizedEmail = registerData.email.trim().toLowerCase()
      await apiRequest('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name: registerData.name.trim(),
          email: normalizedEmail,
          password: registerData.password,
          whatsapp: registerData.whatsapp.trim()
        })
      })
      setLoginData({ email: normalizedEmail, password: registerData.password })
      setRegisterData({ name: '', email: '', password: '', whatsapp: '' })
      setAuthMode('login')
      setErrors({ login: 'Registered successfully. Please click Login.' })
    } catch (error) {
      setErrors({ register: error.message || 'Registration failed.' })
    }
  }

  const handleContactNext = (e) => {
    e.preventDefault()
    const addressFieldsExcludingAutoEmail = {
      country: contactData.country,
      name: contactData.name,
      company: contactData.company,
      postalCode: contactData.postalCode,
      houseNumber: contactData.houseNumber,
      addition: contactData.addition,
      extraAddressInfo: contactData.extraAddressInfo,
      phoneCode: contactData.phoneCode,
      mobile: contactData.mobile,
      reference: contactData.reference
    }
    const hasAnyNonEmailAddressInput = Object.values(addressFieldsExcludingAutoEmail).some((value) =>
      String(value || '').trim()
    )
    const hasCurrentParcelInput = hasAnyNonEmailAddressInput || products.length > 0

    if (!hasCurrentParcelInput && parcelDrafts.length > 0 && editingParcelIndex === null) {
      setErrors({})
      setStep(3)
      if (currentUserEmail) {
        persistSession(currentUserEmail, loginData.password, 3)
      }
      return
    }

    const parcel = buildParcelDraft()
    if (!parcel) return
    const allParcels =
      editingParcelIndex === null
        ? [...parcelDrafts, parcel]
        : parcelDrafts.map((item, idx) => (idx === editingParcelIndex ? parcel : item))
    setParcelDrafts(allParcels)
    setEditingParcelIndex(null)
    setErrors({})
    setStep(3)
    if (currentUserEmail) {
      persistSession(currentUserEmail, loginData.password, 3)
    }
  }

  const buildParcelDraft = () => {
    const nextErrors = {}
    if (!contactData.country.trim()) nextErrors.country = 'Country is required'
    if (!contactData.name.trim()) nextErrors.name = 'Name is required'
    if (!contactData.postalCode.trim()) nextErrors.postalCode = 'Postal code is required'
    if (!contactData.houseNumber.trim()) nextErrors.houseNumber = 'House number is required'
    if (!contactData.email.trim()) nextErrors.email = 'Email address is required'
    if (products.length === 0) nextErrors.product = 'Please add at least one product.'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return null
    }

    if (currentUserEmail && saveAddressForFuture) {
      const normalizeAddress = (addr) => ({
        country: (addr.country || '').trim().toLowerCase(),
        name: (addr.name || '').trim().toLowerCase(),
        company: (addr.company || '').trim().toLowerCase(),
        postalCode: (addr.postalCode || '').trim().toLowerCase(),
        houseNumber: (addr.houseNumber || '').trim().toLowerCase(),
        addition: (addr.addition || '').trim().toLowerCase(),
        extraAddressInfo: (addr.extraAddressInfo || '').trim().toLowerCase(),
        email: (addr.email || '').trim().toLowerCase(),
        phoneCode: (addr.phoneCode || '').trim(),
        mobile: (addr.mobile || '').trim(),
        reference: (addr.reference || '').trim().toLowerCase()
      })

      const current = normalizeAddress(contactData)
      const exists = savedAddresses.some((addr) => {
        const saved = normalizeAddress(addr)
        return Object.keys(current).every((key) => saved[key] === current[key])
      })

      if (!exists) {
        const addressRecord = {
          id: `addr_${Date.now()}`,
          ...contactData
        }
        const updatedAddresses = [addressRecord, ...savedAddresses]
        setSavedAddresses(updatedAddresses)
        apiRequest('/api/addresses', {
          method: 'POST',
          body: JSON.stringify({ userEmail: currentUserEmail, address: addressRecord })
        }).catch(() => {})
      }
    }

    return {
      id: `PAR-${Date.now()}`,
      address: { ...contactData },
      products: [...products]
    }
  }

  const saveAndCreateNewParcel = () => {
    const parcel = buildParcelDraft()
    if (!parcel) return
    if (editingParcelIndex === null) {
      setParcelDrafts((prev) => [...prev, parcel])
    } else {
    setParcelDrafts((prev) => prev.map((item, idx) => (idx === editingParcelIndex ? parcel : item)))
    }
    setEditingParcelIndex(null)
    setContactData({
      country: '',
      name: '',
      company: '',
      postalCode: '',
      houseNumber: '',
      addition: '',
      extraAddressInfo: '',
      email: currentUserEmail || '',
      phoneCode: '',
      mobile: '',
      reference: ''
    })
    setSelectedSavedAddressId('')
    setProducts([])
    setProductDraft({ name: '', quantity: 1 })
    setEditingIndex(null)
    setErrors({})
    setSaveAddressForFuture(false)
  }

  const editParcelDraft = (index) => {
    const parcel = parcelDrafts[index]
    if (!parcel) return
    setContactData({
      country: parcel.address?.country || '',
      name: parcel.address?.name || '',
      company: parcel.address?.company || '',
      postalCode: parcel.address?.postalCode || '',
      houseNumber: parcel.address?.houseNumber || '',
      addition: parcel.address?.addition || '',
      extraAddressInfo: parcel.address?.extraAddressInfo || '',
      email: parcel.address?.email || '',
      phoneCode: parcel.address?.phoneCode || '',
      mobile: parcel.address?.mobile || '',
      reference: parcel.address?.reference || ''
    })
    setProducts(parcel.products || [])
    setProductDraft({ name: '', quantity: 1 })
    setEditingIndex(null)
    setEditingParcelIndex(index)
    setErrors({})
    setStep(2)
  }

  const removeParcelDraft = (index) => {
    setParcelDrafts((prev) => prev.filter((_, idx) => idx !== index))
    if (editingParcelIndex === index) {
      setEditingParcelIndex(null)
      setProducts([])
      setProductDraft({ name: '', quantity: 1 })
      setEditingIndex(null)
    } else if (editingParcelIndex !== null && index < editingParcelIndex) {
      setEditingParcelIndex((prev) => (prev === null ? null : prev - 1))
    }
  }

  const addProduct = () => {
    const name = productDraft.name.trim()
    const quantity = Number(productDraft.quantity)

    if (!name || !quantity || quantity < 1) {
      setErrors((prev) => ({
        ...prev,
        product: 'Enter valid product name and quantity before adding.'
      }))
      return
    }

    if (editingIndex !== null) {
      setProducts((prev) =>
        prev.map((item, idx) => (idx === editingIndex ? { name, quantity } : item))
      )
      setEditingIndex(null)
    } else {
      setProducts((prev) => [...prev, { name, quantity }])
    }
    setProductDraft({ name: '', quantity: 1 })
    setErrors((prev) => ({ ...prev, product: '' }))
  }

  const editProduct = (index) => {
    const product = products[index]
    if (!product) return
    setProductDraft({ name: product.name, quantity: product.quantity })
    setEditingIndex(index)
  }

  const deleteProduct = (index) => {
    setProducts((prev) => prev.filter((_, idx) => idx !== index))
    if (editingIndex === index) {
      setEditingIndex(null)
      setProductDraft({ name: '', quantity: 1 })
    } else if (editingIndex !== null && index < editingIndex) {
      setEditingIndex((prev) => (prev === null ? null : prev - 1))
    }
  }

  const confirmOrder = () => {
    if (currentUserEmail) {
      const order = {
        id: `ORD-${Date.now()}`,
        createdAt: new Date().toISOString(),
        customerEmail: currentUserEmail,
        parcels: [...parcelDrafts]
      }
      const updatedOrders = [order, ...orderHistory]
      setOrderHistory(updatedOrders)
      setLatestOrderId(order.id)
      apiRequest('/api/orders', {
        method: 'POST',
        body: JSON.stringify(order)
      }).catch(() => {})
    }

    setStep(4)
    if (currentUserEmail) {
      persistSession(currentUserEmail, loginData.password, 4)
    }
    setTimeout(() => {
      setActiveSidebarTab('your_order')
      setStep(2)
      if (currentUserEmail) {
        persistSession(currentUserEmail, loginData.password, 2)
      }
    }, 2000)
  }

  const goBackToForm = () => {
    setStep(2)
    if (currentUserEmail) {
      persistSession(currentUserEmail, loginData.password, 2)
    }
  }

  const inputClass =
    'w-full border border-[#c29f85] bg-white px-4 py-3 text-[#521903] placeholder:text-[#8a6f60] outline-none transition focus:border-[#f8b936] focus:ring-2 focus:ring-[#f8b936]/30'
  const selectClass =
    'w-full border border-[#c29f85] bg-white px-4 py-3 text-[#521903] outline-none transition focus:border-[#f8b936] focus:ring-2 focus:ring-[#f8b936]/30'
  const primaryBtnClass =
    ' bg-[#f8b936] px-6 py-3 text-[#521903] transition hover:bg-[#dc8c18] hover:text-white active:scale-[0.99]'
  const secondaryBtnClass =
    ' border border-[#c29f85] bg-white px-6 py-3 text-[#521903] transition hover:bg-[#fff4df] active:scale-[0.99]'
  const selectedCountry = countries.find((c) => c.name === contactData.country)
  const selectedPhoneCode = phoneCodes.find((c) => c.dialCode === contactData.phoneCode)
  const filteredCountries = useMemo(() => {
    const q = countryQuery.trim().toLowerCase()
    if (!q) return countries
    return countries.filter((country) => country.name.toLowerCase().includes(q))
  }, [countries, countryQuery])
  const filteredPhoneCodes = useMemo(() => {
    const q = phoneCodeQuery.trim().toLowerCase()
    if (!q) return phoneCodes
    return phoneCodes.filter((code) =>
      `${code.dialCode} ${code.countryName}`.toLowerCase().includes(q)
    )
  }, [phoneCodes, phoneCodeQuery])
  const filteredSavedNameSuggestions = useMemo(() => {
    const q = (nameQuery || contactData.name || '').trim().toLowerCase()
    if (!q) return []
    const unique = new Map()
    savedAddresses.forEach((addr) => {
      const candidate = (addr.name || '').trim()
      if (!candidate) return
      if (candidate.toLowerCase().includes(q)) {
        const key = `${candidate.toLowerCase()}-${(addr.postalCode || '').toLowerCase()}-${(addr.houseNumber || '').toLowerCase()}`
        if (!unique.has(key)) unique.set(key, addr)
      }
    })
    return Array.from(unique.values()).slice(0, 6)
  }, [savedAddresses, nameQuery, contactData.name])
  const recipientEntries = useMemo(() => {
    const entries = []
    savedAddresses.forEach((addr) => {
      entries.push({ key: `saved-${addr.id}`, source: 'saved', address: addr })
    })
    parcelDrafts.forEach((parcel, idx) => {
      entries.push({
        key: `parcel-${parcel.id}-${idx}`,
        source: 'parcel',
        address: parcel.address || {},
        parcelIndex: idx
      })
    })
    return entries
  }, [savedAddresses, parcelDrafts])
  const filteredRecipientEntries = useMemo(() => {
    const q = recipientsSearch.trim().toLowerCase()
    if (!q) return recipientEntries
    return recipientEntries.filter((entry) => {
      const a = entry.address || {}
      return `${a.name || ''} ${a.postalCode || ''} ${a.houseNumber || ''} ${a.country || ''}`
        .toLowerCase()
        .includes(q)
    })
  }, [recipientEntries, recipientsSearch])
  const progressPercent = (step / 5) * 100
  const isRecipientsMode = activeSidebarTab === 'recipients'
  const flowSteps = [
    { id: 1, label: 'Login' },
    { id: 2, label: 'Details & Products' },
    { id: 3, label: 'Review' },
    { id: 4, label: 'Confirmed' },
    { id: 5, label: 'Order History' }
  ]

  const applySavedAddress = () => {
    const selected = savedAddresses.find((item) => item.id === selectedSavedAddressId)
    if (!selected) return
    setContactData({
      country: selected.country || '',
      name: selected.name || '',
      company: selected.company || '',
      postalCode: selected.postalCode || '',
      houseNumber: selected.houseNumber || '',
      addition: selected.addition || '',
      extraAddressInfo: selected.extraAddressInfo || '',
      email: selected.email || currentUserEmail || '',
      phoneCode: selected.phoneCode || '',
      mobile: selected.mobile || '',
      reference: selected.reference || ''
    })
  }

  const applyAddressSuggestion = (selected) => {
    if (!selected) return
    setContactData({
      country: selected.country || '',
      name: selected.name || '',
      company: selected.company || '',
      postalCode: selected.postalCode || '',
      houseNumber: selected.houseNumber || '',
      addition: selected.addition || '',
      extraAddressInfo: selected.extraAddressInfo || '',
      email: selected.email || currentUserEmail || '',
      phoneCode: selected.phoneCode || '',
      mobile: selected.mobile || '',
      reference: selected.reference || ''
    })
    setNameQuery(selected.name || '')
    setIsNameSuggestionOpen(false)
  }
  const openRecipientEntry = (entry) => {
    if (!entry?.address) return
    setSelectedRecipientKey(entry.key)
    applyAddressSuggestion(entry.address)
    setEditingSavedRecipientId(entry.source === 'saved' ? entry.address?.id || '' : '')
    setSelectedRecipientSource(entry.source || '')
    setSelectedRecipientParcelIndex(
      entry.source === 'parcel' && Number.isInteger(entry.parcelIndex) ? entry.parcelIndex : null
    )
    setShowRecipientDetails(true)
    setStep(2)
    setActiveSidebarTab('recipients')
  }

  const updateSavedRecipientFromForm = async () => {
    const nextErrors = {}
    if (!contactData.country.trim()) nextErrors.country = 'Country is required'
    if (!contactData.name.trim()) nextErrors.name = 'Name is required'
    if (!contactData.postalCode.trim()) nextErrors.postalCode = 'Postal code is required'
    if (!contactData.houseNumber.trim()) nextErrors.houseNumber = 'House number is required'
    if (!contactData.email.trim()) nextErrors.email = 'Email address is required'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    if (selectedRecipientSource === 'parcel' && selectedRecipientParcelIndex !== null) {
      setParcelDrafts((prev) =>
        prev.map((parcel, idx) =>
          idx === selectedRecipientParcelIndex
            ? {
                ...parcel,
                address: {
                  ...parcel.address,
                  ...contactData
                }
              }
            : parcel
        )
      )
      setErrors({})
      return
    }

    if (!editingSavedRecipientId || !currentUserEmail) return
    const updatedAddresses = savedAddresses.map((addr) =>
      addr.id === editingSavedRecipientId ? { ...addr, ...contactData, id: editingSavedRecipientId } : addr
    )
    try {
      await apiRequest('/api/addresses', {
        method: 'PUT',
        body: JSON.stringify({
          userEmail: currentUserEmail,
          addressId: editingSavedRecipientId,
          address: { ...contactData }
        })
      })
      setSavedAddresses(updatedAddresses)
      setErrors({})
    } catch (error) {
      setErrors({ email: error.message || 'Failed to update recipient.' })
    }
  }

  const deleteSavedRecipient = async () => {
    if (selectedRecipientSource === 'parcel' && selectedRecipientParcelIndex !== null) {
      setParcelDrafts((prev) => prev.filter((_, idx) => idx !== selectedRecipientParcelIndex))
      setSelectedRecipientParcelIndex(null)
      setSelectedRecipientSource('')
      setEditingSavedRecipientId('')
      setSelectedRecipientKey('')
      setShowRecipientDetails(false)
      setContactData({
        country: '',
        name: '',
        company: '',
        postalCode: '',
        houseNumber: '',
        addition: '',
        extraAddressInfo: '',
        email: currentUserEmail || '',
        phoneCode: '',
        mobile: '',
        reference: ''
      })
      return
    }

    if (!editingSavedRecipientId || !currentUserEmail) return
    try {
      await apiRequest(`/api/addresses?userEmail=${encodeURIComponent(currentUserEmail)}&addressId=${encodeURIComponent(editingSavedRecipientId)}`, {
        method: 'DELETE'
      })
      const updatedAddresses = savedAddresses.filter((addr) => addr.id !== editingSavedRecipientId)
      setSavedAddresses(updatedAddresses)
      setEditingSavedRecipientId('')
      setSelectedRecipientSource('')
      setSelectedRecipientParcelIndex(null)
      setSelectedRecipientKey('')
      setShowRecipientDetails(false)
      setContactData({
        country: '',
        name: '',
        company: '',
        postalCode: '',
        houseNumber: '',
        addition: '',
        extraAddressInfo: '',
        email: currentUserEmail || '',
        phoneCode: '',
        mobile: '',
        reference: ''
      })
    } catch (error) {
      setErrors({ email: error.message || 'Failed to delete recipient.' })
    }
  }

  const selectCountry = (countryName) => {
    setContactData((p) => ({ ...p, country: countryName }))
    setIsCountryOpen(false)
  }

  const selectPhoneCode = (dialCode) => {
    setContactData((p) => ({ ...p, phoneCode: dialCode }))
    setIsPhoneCodeOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem(LOGIN_SESSION_KEY)
    setStep(1)
    setCurrentUserEmail('')
    setSavedAddresses([])
    setSelectedSavedAddressId('')
    setOrderHistory([])
    setLatestOrderId('')
    setParcelDrafts([])
    setEditingParcelIndex(null)
    setSaveAddressForFuture(false)
    setProducts([])
    setProductDraft({ name: '', quantity: 1 })
    setEditingIndex(null)
    setErrors({})
    setContactData({
      country: '',
      name: '',
      company: '',
      postalCode: '',
      houseNumber: '',
      addition: '',
      extraAddressInfo: '',
      email: '',
      phoneCode: '',
      mobile: '',
      reference: ''
    })
  }

  const openOrderHistory = () => {
    setActiveSidebarTab('your_order')
    setStep(2)
    if (currentUserEmail) {
      persistSession(currentUserEmail, loginData.password, 2)
    }
  }

  const handleSupportSubmit = async (e) => {
    e.preventDefault()
    if (!supportForm.name.trim() || !supportForm.email.trim() || !supportForm.message.trim()) {
      setSupportMessage('Please fill name, email and message.')
      return
    }
    try {
      await apiRequest('/api/support', {
        method: 'POST',
        body: JSON.stringify({
          ...supportForm,
          userEmail: currentUserEmail || supportForm.email
        })
      })
      setSupportMessage('Thanks. Your message has been submitted.')
      setSupportForm({ name: '', email: currentUserEmail || '', message: '' })
    } catch (error) {
      setSupportMessage(error.message || 'Failed to submit message.')
    }
  }

  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setAccountMessage('Please upload a valid image file.')
      return
    }
    const maxSizeInBytes = 2 * 1024 * 1024
    if (file.size > maxSizeInBytes) {
      setAccountMessage('Image size must be 2MB or less.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : ''
      setAccountForm((prev) => ({ ...prev, profilePhoto: result }))
      setAccountMessage('')
    }
    reader.onerror = () => setAccountMessage('Failed to read image file.')
    reader.readAsDataURL(file)
  }

  const handleAccountUpdate = async (e) => {
    e.preventDefault()
    if (!currentUserEmail) return
    if (!accountForm.name.trim() || !accountForm.password.trim() || !accountForm.whatsapp.trim()) {
      setAccountMessage('Name, password and number are required.')
      return
    }
    try {
      const normalizedEmail = currentUserEmail.toLowerCase()
      await apiRequest('/api/users', {
        method: 'PUT',
        body: JSON.stringify({
          email: normalizedEmail,
          name: accountForm.name.trim(),
          password: accountForm.password,
          whatsapp: accountForm.whatsapp.trim(),
          profilePhoto: accountForm.profilePhoto || ''
        })
      })
      setLoginData((p) => ({ ...p, password: accountForm.password }))
      persistSession(normalizedEmail, accountForm.password, step)
      setAccountMessage('Account updated successfully.')
    } catch (error) {
      setAccountMessage(error.message || 'Failed to update account.')
    }
  }

  return (
    <section className={`theme-root ${isDarkMode ? 'theme-dark' : 'theme-light'} min-h-screen bg-gradient-to-b from-[#fff8ea] via-[#fff2db] to-[#f7e5cf] px-4 ${
      step === 1 ? 'flex items-center justify-center py-6 sm:py-8' : 'py-6 sm:py-8'
    }`}>
      <div className={`mx-auto w-full border border-gray-200 bg-white p-4 text-gray-900 shadow-lg sm:p-6 ${
        step === 1 ? 'max-w-md' : 'max-w-[96vw]'
      }`}>
        {step === 1 && (
          <>
            <div className="mb-7">
              <div className="h-2 w-full overflow-hidden bg-gray-200">
                <div
                  className="h-full bg-gray-900 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            <h1 className="mb-1 text-3xl font-semibold tracking-tight text-gray-900">
              {authMode === 'login' ? 'Login' : 'Register'}
            </h1>
            <p className="mb-5 text-sm text-gray-500">
              {authMode === 'login' ? 'Sign in to continue order flow.' : 'Create account to start shipping.'}
            </p>
            <div className="mb-5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`border px-3 py-2 text-sm ${authMode === 'login' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700'}`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('register')}
                className={`border px-3 py-2 text-sm ${authMode === 'register' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700'}`}
              >
                Register
              </button>
            </div>
            {authMode === 'login' ? (
              <form className="space-y-5" onSubmit={handleDemoLogin}>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="demo@company.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData((p) => ({ ...p, password: e.target.value }))}
                    placeholder="******"
                    className={inputClass}
                  />
                </div>
                {errors.login && <p className="text-sm text-red-600">{errors.login}</p>}
                <button type="submit" className={`${primaryBtnClass} w-full`}>
                  Login
                </button>
              </form>
            ) : (
              <form className="space-y-5" onSubmit={handleRegister}>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={registerData.name}
                    onChange={(e) => setRegisterData((p) => ({ ...p, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={registerData.email}
                    onChange={(e) => setRegisterData((p) => ({ ...p, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData((p) => ({ ...p, password: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">WhatsApp Number</label>
                  <input
                    type="text"
                    value={registerData.whatsapp}
                    onChange={(e) => setRegisterData((p) => ({ ...p, whatsapp: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                {errors.register && <p className="text-sm text-red-600">{errors.register}</p>}
                <button type="submit" className={`${primaryBtnClass} w-full`}>
                  Register
                </button>
              </form>
            )}
          </>
        )}

        {step !== 1 && (
          <div className="grid grid-cols-12 gap-3">
            <aside className="col-span-12 flex min-h-[70vh] flex-col self-start border border-gray-200 bg-gray-50 p-3 lg:fixed lg:left-4 lg:top-0 lg:z-20 lg:h-screen lg:w-64 lg:overflow-y-auto">
              <div className="mb-3 flex items-center justify-center border border-gray-200 bg-white p-2">
                <img
                  src="/logo.png"
                  alt="KVA Logistics"
                  className="h-20 w-auto object-contain"
                />
              </div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Menu</h3>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => {
                    setActiveSidebarTab('new_order')
                    setStep(2)
                  }}
                  className={`w-full border px-2 py-2 text-left text-sm ${activeSidebarTab === 'new_order' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <ClipboardPlus className="h-4 w-4" />
                    New Order
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    openOrderHistory()
                  }}
                  className={`w-full border px-2 py-2 text-left text-sm ${activeSidebarTab === 'your_order' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <History className="h-4 w-4" />
                    Your Orders
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSidebarTab('recipients')
                    setShowRecipientDetails(false)
                    setStep(2)
                  }}
                  className={`w-full border px-2 py-2 text-left text-sm ${activeSidebarTab === 'recipients' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Recepients
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSidebarTab('inbox')
                    setStep(2)
                  }}
                  className={`w-full border px-2 py-2 text-left text-sm ${activeSidebarTab === 'inbox' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Inbox
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSidebarTab('contact')
                    setStep(2)
                  }}
                  className={`w-full border px-2 py-2 text-left text-sm ${activeSidebarTab === 'contact' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Headset className="h-4 w-4" />
                    Support
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSidebarTab('account')
                    setAccountMessage('')
                    setStep(2)
                  }}
                  className={`w-full border px-2 py-2 text-left text-sm ${activeSidebarTab === 'account' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Your Account
                  </span>
                </button>
              </div>
              {currentUserEmail ? (
                <div className="mt-auto space-y-2 border border-gray-200 bg-white p-2">
                  <div className="border border-gray-200 bg-gray-50 px-2 py-2 text-center">
                    <p
                      className="text-base text-gray-900"
                      style={{ fontFamily: kalam.style.fontFamily }}
                    >
                      Tony Masala Production
                    </p>
                  </div>
                  {accountForm.profilePhoto ? (
                    <div className="flex justify-center">
                      <img
                        src={accountForm.profilePhoto}
                        alt="User profile"
                        className="h-14 w-14 rounded-full border border-gray-200 object-cover"
                      />
                    </div>
                  ) : null}
                  <p className="text-xs text-gray-600">
                   <span className="font-medium text-gray-800">{currentUserEmail}</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsDarkMode((prev) => !prev)}
                    className="inline-flex w-full items-center justify-center gap-2 border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    aria-label={isDarkMode ? 'Switch to day mode' : 'Switch to night mode'}
                    title={isDarkMode ? 'Day mode' : 'Night mode'}
                  >
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    <span>{isDarkMode ? 'Day Mode' : 'Night Mode'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="inline-flex w-full items-center justify-center gap-2 border border-red-300 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition hover:border-red-400 hover:bg-red-100"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </button>
                </div>
              ) : null}

            </aside>

            <div className="col-span-12 lg:ml-[17.5rem]">
              {step === 2 ? (
              <div className="sticky top-0 z-10 mb-3 overflow-hidden border border-gray-200 bg-gray-50 px-3 py-3 xl:w-[57.7777%]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    backgroundImage: "url('/maps.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-[1] flex flex-wrap items-center justify-between gap-2">
                  <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-gray-900">
                    <MapPin className="h-5 w-5 text-gray-700" />
                    <span>
                      {activeSidebarTab === 'your_order'
                        ? 'Order History'
                        : activeSidebarTab === 'recipients'
                          ? 'Recipients'
                          : activeSidebarTab === 'inbox'
                            ? 'Inbox'
                            : activeSidebarTab === 'contact'
                              ? 'Support'
                              : activeSidebarTab === 'account'
                                ? 'Your Account'
                          : 'Who is the receiver?'}
                    </span>
                  </h2>
                </div>
              </div>
              ) : null}
        {step === 2 && (
          <>
            {activeSidebarTab === 'your_order' ? (
              <div className="space-y-4">
                {orderHistory.length === 0 ? (
                  <div className=" border border-gray-200 bg-white p-4 text-sm text-gray-600">
                    No orders found for {currentUserEmail}.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {orderHistory.map((order) => (
                      <div key={order.id} className=" border border-gray-200 bg-white p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="text-sm font-semibold text-gray-900">{order.id}</p>
                          <p className="text-xs text-gray-500">{new Date(order.createdAt).toLocaleString()}</p>
                        </div>
                        <p className="mb-2 text-sm text-gray-600">
                          {order.parcels?.length ? order.parcels.length : order.address ? 1 : 0} parcel(s) in this order
                        </p>
                        <div className="space-y-2">
                          {(order.parcels && order.parcels.length > 0 ? order.parcels : [{ address: order.address, products: order.products }]).map((parcel, pIdx) => (
                            <div key={`${order.id}-parcel-${pIdx}`} className=" bg-gray-50 p-3 text-sm">
                              <p className="font-medium text-gray-800">
                                Parcel {pIdx + 1}: {parcel.address?.name}, {parcel.address?.postalCode} {parcel.address?.houseNumber}, {parcel.address?.country}
                              </p>
                              <div className="mt-1 space-y-1">
                                {parcel.products?.map((item, idx) => (
                                  <div key={`${order.id}-${pIdx}-${idx}`} className="flex items-center justify-between bg-white px-2 py-1.5">
                                    <span>{item.name}</span>
                                    <span className="text-gray-600">Qty: {item.quantity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  className={primaryBtnClass}
                  onClick={() => {
                    setActiveSidebarTab('new_order')
                    setStep(2)
                    if (currentUserEmail) persistSession(currentUserEmail, loginData.password, 2)
                    setContactData({
                      country: '',
                      name: '',
                      company: '',
                      postalCode: '',
                      houseNumber: '',
                      addition: '',
                      extraAddressInfo: '',
                      email: currentUserEmail || '',
                      phoneCode: '',
                      mobile: '',
                      reference: ''
                    })
                    setProducts([])
                    setProductDraft({ name: '', quantity: 1 })
                    setEditingIndex(null)
                    setParcelDrafts([])
                    setSelectedSavedAddressId('')
                    setSaveAddressForFuture(false)
                    setErrors({})
                    setIsCountryOpen(false)
                    setIsPhoneCodeOpen(false)
                    setCountryQuery('')
                    setPhoneCodeQuery('')
                    setEditingParcelIndex(null)
                  }}
                >
                  Place New Order
                </button>
              </div>
            ) : activeSidebarTab === 'inbox' ? (
              <div className="border border-gray-200 bg-white p-4 text-sm text-gray-700">
                Inbox is ready. You can plug notifications/messages here.
              </div>
            ) : activeSidebarTab === 'contact' ? (
              <div className="border border-gray-200 bg-white p-4">
                <h3 className="mb-3 text-base font-semibold text-gray-900">Contact Us</h3>
                <form className="space-y-3" onSubmit={handleSupportSubmit}>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                    <input
                      className={inputClass}
                      value={supportForm.name}
                      onChange={(e) => setSupportForm((p) => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className={inputClass}
                      value={supportForm.email}
                      onChange={(e) => setSupportForm((p) => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      className={`${inputClass} min-h-28`}
                      value={supportForm.message}
                      onChange={(e) => setSupportForm((p) => ({ ...p, message: e.target.value }))}
                    />
                  </div>
                  {supportMessage ? <p className="text-sm text-gray-700">{supportMessage}</p> : null}
                  <button type="submit" className={primaryBtnClass}>Send Message</button>
                </form>
              </div>
            ) : activeSidebarTab === 'account' ? (
              <div className="border border-gray-200 bg-white p-4">
                <h3 className="mb-3 text-base font-semibold text-gray-900">Your Account</h3>
                <form className="space-y-3" onSubmit={handleAccountUpdate}>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Profile Photo</label>
                    <div className="flex items-center gap-3">
                      <div className="h-14 w-14 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                        {accountForm.profilePhoto ? (
                          <img src={accountForm.profilePhoto} alt="Profile preview" className="h-full w-full object-cover" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">No photo</div>
                        )}
                      </div>
                      <div className="flex-1">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleProfilePhotoUpload}
                          className="w-full border border-[#c29f85] bg-white px-3 py-2 text-sm text-[#521903]"
                        />
                        {accountForm.profilePhoto ? (
                          <button
                            type="button"
                            onClick={() => setAccountForm((p) => ({ ...p, profilePhoto: '' }))}
                            className="mt-2 border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600"
                          >
                            Remove photo
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                    <input
                      className={inputClass}
                      value={accountForm.name}
                      onChange={(e) => setAccountForm((p) => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      className={inputClass}
                      value={accountForm.password}
                      onChange={(e) => setAccountForm((p) => ({ ...p, password: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">WhatsApp Number</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={accountForm.whatsapp}
                      onChange={(e) => setAccountForm((p) => ({ ...p, whatsapp: e.target.value }))}
                    />
                  </div>
                  {accountMessage ? <p className="text-sm text-gray-700">{accountMessage}</p> : null}
                  <button type="submit" className={primaryBtnClass}>Update Account</button>
                </form>
              </div>
            ) : (
            <div className="grid grid-cols-12 gap-3">
              {activeSidebarTab !== 'new_order' ? (
              <section className={`col-span-12 overflow-hidden border border-gray-200 bg-white shadow-sm ${isRecipientsMode ? 'xl:col-span-4' : 'xl:col-span-3'}`}>
                <div className="border-b border-gray-200 bg-gray-50 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-base font-semibold text-gray-900">Recipients</p>
                    <span className="text-xs text-gray-500">{filteredRecipientEntries.length}</span>
                  </div>
                  <input
                    type="text"
                    value={recipientsSearch}
                    onChange={(e) => setRecipientsSearch(e.target.value)}
                    placeholder="Search recipient..."
                    className="w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500"
                  />
                </div>
                <div className="h-[calc(100vh-15rem)] min-h-[320px] overflow-y-auto bg-white p-2">
                  {filteredRecipientEntries.length === 0 ? (
                    <p className="p-3 text-sm text-gray-500">No recipients found.</p>
                  ) : (
                    filteredRecipientEntries.map((entry) => (
                      <button
                        key={entry.key}
                        type="button"
                        onClick={() => openRecipientEntry(entry)}
                        className={`mb-2 block w-full border px-3 py-2 text-left transition last:mb-0 ${
                          selectedRecipientKey === entry.key
                            ? 'border-gray-400 bg-gray-100'
                            : 'border-gray-200 bg-white hover:bg-gray-50'
                        }`}
                      >
                        <p className="text-sm font-medium text-gray-900">{entry.address?.name || '-'}</p>
                        <p className="text-xs text-gray-600">
                          {entry.address?.postalCode || '-'} {entry.address?.houseNumber || '-'}, {entry.address?.country || '-'}
                        </p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-wide text-gray-400">
                          {entry.source === 'saved' ? 'Saved Recipient' : `Parcel ${Number(entry.parcelIndex) + 1}`}
                        </p>
                      </button>
                    ))
                  )}
                </div>
              </section>
              ) : null}

              <section className={`col-span-12 ${activeSidebarTab === 'new_order' ? 'xl:col-span-12' : isRecipientsMode ? 'xl:col-span-8' : 'xl:col-span-9'}`}>
            <form
              id="receiver-form"
              onSubmit={(e) => {
                if (isRecipientsMode) {
                  e.preventDefault()
                  return
                }
                handleContactNext(e)
              }}
              className="space-y-4"
            >

              <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                {isRecipientsMode && !showRecipientDetails ? (
                <div className="xl:col-span-12" />
                ) : (
                <div className={`border border-gray-200 bg-gray-50/60 p-3 shadow-sm sm:p-4 ${isRecipientsMode ? 'xl:col-span-12' : 'xl:col-span-7 xl:order-1'}`}>
                  <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <MapPin className="h-4 w-4" />
                      <span>Address Details</span>
                    </h3>
                    {isRecipientsMode && showRecipientDetails ? (
                      <span className="border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600">
                        {contactData.name || 'Selected recipient'}
                      </span>
                    ) : null}
                  </div>
                  {activeSidebarTab === 'recipients' && showRecipientDetails && selectedRecipientKey ? (
                    <div className="mb-3 flex gap-2">
                      <button
                        type="button"
                        onClick={updateSavedRecipientFromForm}
                        className="border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                      >
                        Update Recipient
                      </button>
                      <button
                        type="button"
                        onClick={deleteSavedRecipient}
                        className="inline-flex items-center justify-center border border-red-200 bg-red-50 p-1.5 text-red-600 hover:bg-red-100"
                        aria-label="Delete recipient"
                        title="Delete recipient"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ) : null}
                  <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                    <div ref={countryPickerRef} className="relative">
                      <button
                        type="button"
                        onClick={() => {
                          setCountryQuery('')
                          setActiveCountryIndex(0)
                          setIsCountryOpen((p) => !p)
                        }}
                        className={`${selectClass} flex items-center justify-between`}
                      >
                        <span className="flex items-center gap-2">
                          {selectedCountry?.flagUrl ? (
                            <img
                              src={selectedCountry.flagUrl || getReliableFlagUrl(selectedCountry?.code)}
                              alt={`${selectedCountry.name} flag`}
                              className="h-4 w-6 object-cover"
                              onError={(e) => {
                                const fallback = getReliableFlagUrl(selectedCountry?.code)
                                if (fallback && e.currentTarget.src !== fallback) {
                                  e.currentTarget.src = fallback
                                }
                              }}
                            />
                          ) : null}
                          <span>{selectedCountry?.name || 'Select country'}</span>
                        </span>
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      </button>
                      {isCountryOpen && (
                        <div className="absolute z-30 mt-1 max-h-56 w-full overflow-y-auto border border-gray-200 bg-white shadow-lg">
                          <div className="sticky top-0 bg-white p-2">
                            <input
                              ref={countrySearchInputRef}
                              type="text"
                              value={countryQuery}
                              onChange={(e) => {
                                setCountryQuery(e.target.value)
                                setActiveCountryIndex(0)
                              }}
                              onKeyDown={(e) => {
                                if (!filteredCountries.length) return
                                if (e.key === 'ArrowDown') {
                                  e.preventDefault()
                                  setActiveCountryIndex((prev) => (prev + 1) % filteredCountries.length)
                                } else if (e.key === 'ArrowUp') {
                                  e.preventDefault()
                                  setActiveCountryIndex((prev) => (prev - 1 + filteredCountries.length) % filteredCountries.length)
                                } else if (e.key === 'Enter') {
                                  e.preventDefault()
                                  const selected = filteredCountries[activeCountryIndex]
                                  if (selected) selectCountry(selected.name)
                                } else if (e.key === 'Escape') {
                                  setIsCountryOpen(false)
                                }
                              }}
                              placeholder="Type country name"
                              className="w-full border border-gray-200 px-2 py-1.5 text-sm outline-none focus:border-gray-400"
                            />
                          </div>
                          {filteredCountries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => selectCountry(country.name)}
                              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                                filteredCountries[activeCountryIndex]?.code === country.code ? 'bg-gray-100' : ''
                              }`}
                            >
                              {country.flagUrl ? (
                                <img
                                  src={country.flagUrl || getReliableFlagUrl(country.code)}
                                  alt={`${country.name} flag`}
                                  className="h-4 w-6 object-cover"
                                  onError={(e) => {
                                    const fallback = getReliableFlagUrl(country.code)
                                    if (fallback && e.currentTarget.src !== fallback) {
                                      e.currentTarget.src = fallback
                                    }
                                  }}
                                />
                              ) : null}
                              <span>{country.name}</span>
                            </button>
                          ))}
                          {filteredCountries.length === 0 && (
                            <p className="px-3 py-2 text-sm text-gray-500">No matching country</p>
                          )}
                        </div>
                      )}
                    </div>
                    {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                  </div>

                  <div ref={nameSuggestionRef} className="relative">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
                    <input
                      className={inputClass}
                      value={contactData.name}
                      onChange={(e) => {
                        const nextName = e.target.value
                        setContactData((p) => ({ ...p, name: nextName }))
                        setNameQuery(nextName)
                        setIsNameSuggestionOpen(true)
                      }}
                      onFocus={() => {
                        setNameQuery(contactData.name || '')
                        setIsNameSuggestionOpen(true)
                      }}
                    />
                    {isNameSuggestionOpen && filteredSavedNameSuggestions.length > 0 && (
                      <div className="absolute z-20 mt-1 w-full border border-gray-200 bg-white shadow-lg">
                        {filteredSavedNameSuggestions.map((addr) => (
                          <button
                            key={addr.id}
                            type="button"
                            onClick={() => applyAddressSuggestion(addr)}
                            className="block w-full border-b border-gray-100 px-3 py-2 text-left text-sm hover:bg-gray-50 last:border-b-0"
                          >
                            <span className="font-medium text-gray-900">{addr.name}</span>
                            <span className="ml-2 text-gray-500">
                              {addr.postalCode} {addr.houseNumber}, {addr.country}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Company name (optional)</label>
                    <input
                      className={inputClass}
                      value={contactData.company}
                      onChange={(e) => setContactData((p) => ({ ...p, company: e.target.value }))}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Postal code</label>
                      <input
                        className={inputClass}
                        value={contactData.postalCode}
                        onChange={(e) => setContactData((p) => ({ ...p, postalCode: e.target.value }))}
                      />
                      {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">House number</label>
                      <input
                        className={inputClass}
                        value={contactData.houseNumber}
                        onChange={(e) => setContactData((p) => ({ ...p, houseNumber: e.target.value }))}
                      />
                      {errors.houseNumber && <p className="mt-1 text-sm text-red-600">{errors.houseNumber}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Addition (optional)</label>
                      <input
                        className={inputClass}
                        value={contactData.addition}
                        onChange={(e) => setContactData((p) => ({ ...p, addition: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Extra address information (optional)</label>
                    <input
                      className={inputClass}
                      value={contactData.extraAddressInfo}
                      onChange={(e) => setContactData((p) => ({ ...p, extraAddressInfo: e.target.value }))}
                    />
                  </div>

                  <div className="pt-2">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <Phone className="h-4 w-4" />
                      <span>Contact Info</span>
                    </h3>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email address</label>
                    <input
                      type="email"
                      className={inputClass}
                      value={contactData.email}
                      onChange={(e) => setContactData((p) => ({ ...p, email: e.target.value }))}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Mobile phone number (optional)</label>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div ref={phoneCodePickerRef} className="relative">
                        <button
                          type="button"
                        onClick={() => {
                          setPhoneCodeQuery('')
                          setActivePhoneCodeIndex(0)
                          setIsPhoneCodeOpen((p) => !p)
                        }}
                          className={`${selectClass} flex items-center justify-between`}
                        >
                          <span className="flex items-center gap-2">
                            {selectedPhoneCode?.flagUrl ? (
                              <img
                                src={selectedPhoneCode.flagUrl || getReliableFlagUrl(selectedPhoneCode?.countryCode)}
                                alt={`${selectedPhoneCode.countryName} flag`}
                                className="h-4 w-6 object-cover"
                                onError={(e) => {
                                  const fallback = getReliableFlagUrl(selectedPhoneCode?.countryCode)
                                  if (fallback && e.currentTarget.src !== fallback) {
                                    e.currentTarget.src = fallback
                                  }
                                }}
                              />
                            ) : null}
                            <span>{selectedPhoneCode ? selectedPhoneCode.dialCode : 'Code'}</span>
                          </span>
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </button>
                        {isPhoneCodeOpen && (
                          <div className="absolute left-0 z-30 mt-1 max-h-56 w-[280px] max-w-[85vw] overflow-y-auto border border-gray-200 bg-white shadow-lg">
                            <div className="sticky top-0 bg-white p-2">
                              <input
                                ref={phoneCodeSearchInputRef}
                                type="text"
                                value={phoneCodeQuery}
                                onChange={(e) => {
                                  setPhoneCodeQuery(e.target.value)
                                  setActivePhoneCodeIndex(0)
                                }}
                                onKeyDown={(e) => {
                                  if (!filteredPhoneCodes.length) return
                                  if (e.key === 'ArrowDown') {
                                    e.preventDefault()
                                    setActivePhoneCodeIndex((prev) => (prev + 1) % filteredPhoneCodes.length)
                                  } else if (e.key === 'ArrowUp') {
                                    e.preventDefault()
                                    setActivePhoneCodeIndex((prev) => (prev - 1 + filteredPhoneCodes.length) % filteredPhoneCodes.length)
                                  } else if (e.key === 'Enter') {
                                    e.preventDefault()
                                    const selected = filteredPhoneCodes[activePhoneCodeIndex]
                                    if (selected) selectPhoneCode(selected.dialCode)
                                  } else if (e.key === 'Escape') {
                                    setIsPhoneCodeOpen(false)
                                  }
                                }}
                                placeholder="Type code or country"
                                className="w-full border border-gray-200 px-2 py-1.5 text-sm outline-none focus:border-gray-400"
                              />
                            </div>
                            {filteredPhoneCodes.map((code, idx) => (
                              <button
                                key={`${code.dialCode}-${code.countryCode}-${idx}`}
                                type="button"
                                onClick={() => selectPhoneCode(code.dialCode)}
                                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                                  idx === activePhoneCodeIndex ? 'bg-gray-100' : ''
                                }`}
                              >
                                {code.flagUrl ? (
                                  <img
                                    src={code.flagUrl || getReliableFlagUrl(code.countryCode)}
                                    alt={`${code.countryName} flag`}
                                    className="h-4 w-6 object-cover"
                                    onError={(e) => {
                                      const fallback = getReliableFlagUrl(code.countryCode)
                                      if (fallback && e.currentTarget.src !== fallback) {
                                        e.currentTarget.src = fallback
                                      }
                                    }}
                                  />
                                ) : null}
                                <span className="font-medium text-gray-900">{code.dialCode}</span>
                              </button>
                            ))}
                            {filteredPhoneCodes.length === 0 && (
                              <p className="px-3 py-2 text-sm text-gray-500">No matching code</p>
                            )}
                          </div>
                        )}
                      </div>
                      <input
                        className={`sm:col-span-2 ${inputClass}`}
                        value={contactData.mobile}
                        onChange={(e) => setContactData((p) => ({ ...p, mobile: e.target.value }))}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Reference (optional)</label>
                    <input
                      className={inputClass}
                      value={contactData.reference}
                      onChange={(e) => setContactData((p) => ({ ...p, reference: e.target.value }))}
                    />
                  </div>

                  </div>
                </div>
                )}

                {!isRecipientsMode ? (
                <>
                <div className="border border-gray-200 bg-gray-50 px-3 py-2 xl:col-span-7 xl:order-3">
                  <h3 className="flex items-center gap-2 text-3xl font-semibold tracking-tight text-gray-900">
                    <Package className="h-4 w-4" />
                    <span>Products</span>
                  </h3>
                </div>
                <div className="border border-gray-200 bg-gray-50/60 p-3 shadow-sm sm:p-4 xl:col-span-7 xl:order-4">
                  <div className="space-y-3">
                    <div className={` border bg-white p-3 ${
                      editingIndex !== null ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'
                    }`}>
                      <div className="mb-2 grid grid-cols-12 gap-2">
                        <div className="col-span-8">
                          <label className="mb-1 block text-[11px] font-medium text-gray-500">Product Name</label>
                          <input
                            placeholder="Enter product name"
                            className="w-full border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400"
                            value={productDraft.name}
                            onChange={(e) => setProductDraft((p) => ({ ...p, name: e.target.value }))}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault()
                                addProduct()
                              }
                            }}
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="mb-1 block text-[11px] font-medium text-gray-500">Quantity</label>
                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="e.g. 1"
                            className="w-full border border-gray-200 bg-white px-3 py-2 text-center text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400"
                            value={productDraft.quantity}
                            onChange={(e) => setProductDraft((p) => ({ ...p, quantity: e.target.value }))}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault()
                                addProduct()
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={addProduct}
                          className="inline-flex items-center gap-1 border border-green-600 bg-green-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-green-700"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          {editingIndex !== null ? 'Update Product' : 'Add Product'}
                        </button>
                      </div>
                    </div>

                    {products.length > 0 && (
                      <div className="overflow-hidden border border-gray-200 bg-white shadow-sm">
                        <table className="w-full table-fixed">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="w-[55%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">Name</th>
                              <th className="w-[15%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">QTY</th>
                              <th className="w-[30%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((product, index) => (
                              <tr key={`${product.name}-${index}`} className="border-t border-gray-200">
                                <td className="px-3 py-2 text-sm font-medium text-gray-900">{product.name}</td>
                                <td className="px-3 py-2 text-sm text-gray-700">{product.quantity}</td>
                                <td className="px-3 py-2">
                                  <div className="flex items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => editProduct(index)}
                                      className="inline-flex items-center justify-center border border-blue-200 bg-blue-50 p-1.5 text-blue-700 transition hover:bg-blue-100"
                                      aria-label="Edit product"
                                      title="Edit"
                                    >
                                      <Pencil className="h-3.5 w-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => deleteProduct(index)}
                                      className="inline-flex items-center justify-center border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100"
                                      aria-label="Delete product"
                                      title="Delete"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {errors.product && <p className="text-sm text-red-600">{errors.product}</p>}
                  </div>
                </div>
                </>
                ) : null}

                {!isRecipientsMode && parcelDrafts.length > 0 ? (
                <div className="self-start border border-gray-200 bg-gray-50/60 p-3 sm:p-4 xl:col-span-5 xl:order-2">
                  <div className="mb-4">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <Package className="h-4 w-4" />
                      <span>Saved Parcels</span>
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {parcelDrafts.map((parcel, idx) => (
                      <div key={parcel.id} className="flex items-center justify-between border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm">
                        <span className="pr-3 text-gray-800">
                          Parcel {idx + 1}: {parcel.address?.name} - {parcel.address?.postalCode} {parcel.address?.houseNumber}, {parcel.address?.country}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => editParcelDraft(idx)}
                            className="inline-flex items-center justify-center border border-blue-200 bg-blue-50 p-1.5 text-blue-700 transition hover:bg-blue-100"
                            aria-label="Edit parcel"
                            title="Edit"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeParcelDraft(idx)}
                            className="inline-flex items-center justify-center border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100"
                            aria-label="Delete parcel"
                            title="Delete"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                ) : null}
              </div>

              {!isRecipientsMode ? (
              <div className="flex flex-wrap items-center justify-between gap-2 border border-gray-200 bg-white p-3">
                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={saveAddressForFuture}
                    onChange={(e) => setSaveAddressForFuture(e.target.checked)}
                    className="h-4 w-4 border-gray-300"
                  />
                  Save this address for future use
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={saveAndCreateNewParcel}
                    className=" border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    {editingParcelIndex === null ? 'Save and Send New Parcel' : 'Update and Send New Parcel'}
                  </button>
                  <button
                    type="submit"
                    form="receiver-form"
                    className=" bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                  >
                    Confirm and Send
                  </button>
                </div>
              </div>
              ) : null}

            </form>
              </section>
            </div>
            )}
          </>
        )}

        {step === 3 && (
          <>
            <div className="mb-5 flex items-center justify-between gap-3 border border-gray-200 bg-white p-4">
              <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight text-gray-900">
                <ClipboardList className="h-7 w-7 text-gray-700" />
                <span>Review Details</span>
              </h2>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wide text-gray-500">Total Parcels</p>
                <p className="text-2xl font-semibold text-gray-900">{parcelDrafts.length}</p>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="border border-gray-200 bg-white p-3">
                <p className="text-xs uppercase tracking-wide text-gray-500">Parcels</p>
                <p className="text-xl font-semibold text-gray-900">{parcelDrafts.length}</p>
              </div>
              <div className="border border-gray-200 bg-white p-3">
                <p className="text-xs uppercase tracking-wide text-gray-500">Products</p>
                <p className="text-xl font-semibold text-gray-900">
                  {parcelDrafts.reduce((acc, parcel) => acc + (parcel.products?.length || 0), 0)}
                </p>
              </div>
              <div className="border border-gray-200 bg-white p-3">
                <p className="text-xs uppercase tracking-wide text-gray-500">Total Quantity</p>
                <p className="text-xl font-semibold text-gray-900">
                  {parcelDrafts.reduce(
                    (acc, parcel) =>
                      acc +
                      (parcel.products || []).reduce(
                        (sum, product) => sum + Number(product.quantity || 0),
                        0
                      ),
                    0
                  )}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {parcelDrafts.map((parcel, parcelIndex) => (
                <div key={parcel.id} className="border border-gray-200 bg-white p-4">
                  <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-2">
                    <h3 className="flex items-center gap-2 text-base font-semibold text-gray-900">
                      <Mail className="h-4 w-4" />
                      <span>Parcel {parcelIndex + 1}</span>
                    </h3>
                    <span className="text-xs text-gray-500">
                      {(parcel.products || []).length} item(s)
                    </span>
                  </div>

                  <div className="mb-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                    <p><span className="text-gray-500">Receiver:</span> {parcel.address?.name || '-'}</p>
                    <p><span className="text-gray-500">Email:</span> {parcel.address?.email || '-'}</p>
                    <p className="sm:col-span-2">
                      <span className="text-gray-500">Address:</span>{' '}
                      {parcel.address?.postalCode || '-'} {parcel.address?.houseNumber || '-'}, {parcel.address?.country || '-'}
                    </p>
                  </div>

                  <div className="overflow-hidden border border-gray-200">
                    <table className="w-full table-fixed">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="w-[70%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">Product</th>
                          <th className="w-[30%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">Qty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(parcel.products || []).map((product, index) => (
                          <tr key={`${parcel.id}-${index}`} className="border-t border-gray-200">
                            <td className="px-3 py-2 text-sm font-medium text-gray-800">{product.name || '-'}</td>
                            <td className="px-3 py-2 text-sm text-gray-700">{product.quantity || 0}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 border border-gray-200 bg-white p-3">
                <button
                  type="button"
                  onClick={goBackToForm}
                  className={`${secondaryBtnClass} inline-flex items-center gap-2`}
                >
                  <Pencil className="h-4 w-4" />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={confirmOrder}
                  className={`${primaryBtnClass} inline-flex items-center gap-2`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Confirm Order
                </button>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-green-100 text-green-700">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="mb-2 text-3xl font-semibold text-gray-900">Order Placed</h2>
            <p className="text-gray-600">
              Your order <span className="font-semibold">{latestOrderId || ''}</span> has been submitted.
              Redirecting to order history...
            </p>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
                <History className="h-6 w-6 text-gray-700" />
                <span>Order History</span>
              </h2>
            </div>
            {orderHistory.length === 0 ? (
              <div className=" border border-gray-200 bg-white p-4 text-sm text-gray-600">
                No orders found for {currentUserEmail}.
              </div>
            ) : (
              <div className="space-y-3">
                {orderHistory.map((order) => (
                  <div key={order.id} className=" border border-gray-200 bg-white p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-semibold text-gray-900">{order.id}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(order.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <p className="mb-2 text-sm text-gray-600">
                      {order.parcels?.length ? order.parcels.length : order.address ? 1 : 0} parcel(s) in this order
                    </p>
                    <div className="space-y-2">
                      {(order.parcels && order.parcels.length > 0 ? order.parcels : [{ address: order.address, products: order.products }]).map((parcel, pIdx) => (
                        <div key={`${order.id}-parcel-${pIdx}`} className=" bg-gray-50 p-3 text-sm">
                          <p className="font-medium text-gray-800">
                            Parcel {pIdx + 1}: {parcel.address?.name}, {parcel.address?.postalCode} {parcel.address?.houseNumber}, {parcel.address?.country}
                          </p>
                          <div className="mt-1 space-y-1">
                            {parcel.products?.map((item, idx) => (
                              <div key={`${order.id}-${pIdx}-${idx}`} className="flex items-center justify-between bg-white px-2 py-1.5">
                                <span>{item.name}</span>
                                <span className="text-gray-600">Qty: {item.quantity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              className={primaryBtnClass}
              onClick={() => {
                setStep(2)
                if (currentUserEmail) {
                  persistSession(currentUserEmail, loginData.password, 2)
                }
                setContactData({
                  country: '',
                  name: '',
                  company: '',
                  postalCode: '',
                  houseNumber: '',
                  addition: '',
                  extraAddressInfo: '',
                  email: currentUserEmail || '',
                  phoneCode: '',
                  mobile: '',
                  reference: ''
                })
                setProducts([])
                setProductDraft({ name: '', quantity: 1 })
                setEditingIndex(null)
                setParcelDrafts([])
                setSelectedSavedAddressId('')
                setSaveAddressForFuture(false)
                setErrors({})
                setIsCountryOpen(false)
                setIsPhoneCodeOpen(false)
                setCountryQuery('')
                setPhoneCodeQuery('')
                setEditingParcelIndex(null)
              }}
            >
              Place New Order
            </button>
          </div>
        )}
          </div>
          </div>
        )}
      </div>
      <style jsx global>{`
        .theme-root button,
        .theme-root [role='button'],
        .theme-root input[type='file'],
        .theme-root select {
          cursor: pointer;
        }
        .theme-root.theme-light {
          color: #521903 !important;
        }
        .theme-root.theme-light .bg-white {
          background-color: #fffdf9 !important;
        }
        .theme-root.theme-light .bg-gray-50,
        .theme-root.theme-light .bg-gray-50\/60 {
          background-color: #fff4df !important;
        }
        .theme-root.theme-light .bg-gray-100 {
          background-color: #f8e9d1 !important;
        }
        .theme-root.theme-light .text-gray-900,
        .theme-root.theme-light .text-gray-800 {
          color: #521903 !important;
        }
        .theme-root.theme-light .text-gray-700,
        .theme-root.theme-light .text-gray-600,
        .theme-root.theme-light .text-gray-500 {
          color: #7a4b32 !important;
        }
        .theme-root.theme-light .border-gray-200,
        .theme-root.theme-light .border-gray-300,
        .theme-root.theme-light .border-gray-100 {
          border-color: #c29f85 !important;
        }
        .theme-root.theme-light .bg-green-600 {
          background-color: #f8b936 !important;
          border-color: #dc8c18 !important;
          color: #521903 !important;
        }
        .theme-root.theme-light .hover\:bg-green-700:hover {
          background-color: #dc8c18 !important;
          color: #fff !important;
        }
        .theme-root.theme-light .bg-blue-50 {
          background-color: #fff4df !important;
        }
        .theme-root.theme-light .text-blue-700 {
          color: #7a4b32 !important;
        }
        .theme-root.theme-light .border-blue-200 {
          border-color: #c29f85 !important;
        }
        .theme-root.theme-light .bg-red-50 {
          background-color: #fff1ec !important;
        }
        .theme-root.theme-light .border-red-200 {
          border-color: #d9a18f !important;
        }
        .theme-root.theme-dark {
          background: #0f172a !important;
          color: #e5e7eb !important;
        }
        .theme-root.theme-dark .bg-white,
        .theme-root.theme-dark .bg-gray-50,
        .theme-root.theme-dark .bg-gray-50\/60,
        .theme-root.theme-dark .bg-gray-100 {
          background-color: #111827 !important;
        }
        .theme-root.theme-dark .text-gray-900,
        .theme-root.theme-dark .text-gray-800,
        .theme-root.theme-dark .text-gray-700,
        .theme-root.theme-dark .text-gray-600,
        .theme-root.theme-dark .text-gray-500 {
          color: #e5e7eb !important;
        }
        .theme-root.theme-dark .border-gray-200,
        .theme-root.theme-dark .border-gray-300,
        .theme-root.theme-dark .border-gray-100 {
          border-color: #374151 !important;
        }
        .theme-root.theme-dark input,
        .theme-root.theme-dark select,
        .theme-root.theme-dark textarea {
          background: #0b1220 !important;
          color: #e5e7eb !important;
          border-color: #374151 !important;
        }
        .theme-root.theme-dark input::placeholder,
        .theme-root.theme-dark textarea::placeholder {
          color: #9ca3af !important;
        }
      `}</style>
    </section>
  )
}




