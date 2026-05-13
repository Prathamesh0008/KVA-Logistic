'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, ShieldCheck } from 'lucide-react'

export default function AdminPage() {
  const router = useRouter()
  const [adminSummary, setAdminSummary] = useState({ totals: null, users: [] })
  const [adminSearch, setAdminSearch] = useState('')
  const [adminEmail, setAdminEmail] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const filteredUsers = useMemo(() => {
    const q = adminSearch.trim().toLowerCase()
    if (!q) return adminSummary.users || []
    return (adminSummary.users || []).filter((user) =>
      `${user.name || ''} ${user.email || ''} ${user.whatsapp || ''}`.toLowerCase().includes(q)
    )
  }, [adminSearch, adminSummary.users])

  useEffect(() => {
    const init = async () => {
      const sessionRaw = localStorage.getItem('kva_admin_session')
      if (!sessionRaw) {
        router.replace('/login')
        return
      }

      try {
        const session = JSON.parse(sessionRaw)
        const response = await fetch('/api/admin/orders-summary', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: String(session?.email || '').trim().toLowerCase(),
            password: String(session?.password || '')
          })
        })
        const data = await response.json().catch(() => ({}))
        if (!response.ok) throw new Error(data?.error || 'Failed to load admin data.')
        setAdminSummary({ totals: data?.totals || null, users: data?.users || [] })
        setAdminEmail(data?.admin?.email || '')
      } catch (err) {
        localStorage.removeItem('kva_admin_session')
        setError(err.message || 'Failed to load admin data.')
      } finally {
        setIsLoading(false)
      }
    }

    init()
  }, [router])

  if (isLoading) {
    return (
      <section className="min-h-screen bg-[#fff8ea] p-4 sm:p-6">
        <div className="mx-auto w-full max-w-[1200px] border border-[#c29f85] bg-[#fffdf9] p-6 text-[#521903]">
          Loading admin dashboard...
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="min-h-screen bg-[#fff8ea] p-4 sm:p-6">
        <div className="mx-auto w-full max-w-[1200px] border border-[#c29f85] bg-[#fffdf9] p-6">
          <p className="mb-3 text-sm text-red-600">{error}</p>
          <button
            type="button"
            onClick={() => router.replace('/login')}
            className="border border-[#c29f85] bg-white px-3 py-2 text-sm text-[#521903] hover:bg-[#fff4df]"
          >
            Go to Login
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-[#fff8ea] p-4 sm:p-6">
      <div className="mx-auto w-full max-w-[1200px] border border-[#c29f85] bg-[#fffdf9] p-4 sm:p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border border-[#c29f85] bg-[#fff4df] p-3">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#521903]">
                <ShieldCheck className="h-6 w-6" />
                <span>Admin Purchase Dashboard</span>
              </h2>
              <p className="text-sm text-[#7a4b32]">Signed in as {adminEmail || 'admin'}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem('kva_admin_session')
                router.replace('/login')
              }}
              className="border border-[#c29f85] bg-white px-3 py-2 text-sm text-[#521903] hover:bg-[#fff4df]"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            {[
              ['Users', adminSummary.totals?.users || 0],
              ['Orders', adminSummary.totals?.orders || 0],
              ['Parcels', adminSummary.totals?.parcels || 0],
              ['Products', adminSummary.totals?.products || 0],
              ['Total Qty', adminSummary.totals?.quantity || 0]
            ].map(([label, value]) => (
              <div key={label} className="border border-[#c29f85] bg-white p-3">
                <p className="text-xs uppercase text-[#7a4b32]">{label}</p>
                <p className="text-2xl font-semibold text-[#521903]">{value}</p>
              </div>
            ))}
          </div>

          <div className="relative border border-[#c29f85] bg-white p-3">
            <Search className="pointer-events-none absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7a4b32]" />
            <input
              type="text"
              value={adminSearch}
              onChange={(e) => setAdminSearch(e.target.value)}
              placeholder="Search users by name, email, mobile"
              className="w-full border border-[#c29f85] bg-white py-2 pl-9 pr-3 text-sm text-[#521903] outline-none focus:border-[#f8b936]"
            />
          </div>

          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div key={user.id || user.email} className="border border-[#c29f85] bg-white p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#e6cdb9] pb-2">
                  <div>
                    <p className="text-lg font-semibold text-[#521903]">{user.name || 'Unnamed User'}</p>
                    <p className="text-sm text-[#7a4b32]">{user.email}</p>
                  </div>
                  <p className="text-sm text-[#7a4b32]">Orders: {user.orderCount || 0}</p>
                </div>
                <div className="overflow-hidden border border-[#c29f85]">
                  <table className="w-full table-fixed">
                    <thead className="bg-[#fff4df]">
                      <tr>
                        <th className="w-[20%] px-3 py-2 text-left text-xs font-semibold uppercase text-[#7a4b32]">Order ID</th>
                        <th className="w-[28%] px-3 py-2 text-left text-xs font-semibold uppercase text-[#7a4b32]">Date</th>
                        <th className="w-[12%] px-3 py-2 text-left text-xs font-semibold uppercase text-[#7a4b32]">Parcels</th>
                        <th className="w-[12%] px-3 py-2 text-left text-xs font-semibold uppercase text-[#7a4b32]">Products</th>
                        <th className="w-[12%] px-3 py-2 text-left text-xs font-semibold uppercase text-[#7a4b32]">Qty</th>
                        <th className="w-[16%] px-3 py-2 text-left text-xs font-semibold uppercase text-[#7a4b32]">Receiver</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(user.orders || []).map((order, index) => {
                        const orderParcels = order.parcels || []
                        const products = orderParcels.reduce((sum, parcel) => sum + (parcel.products?.length || 0), 0)
                        const qty = orderParcels.reduce(
                          (sum, parcel) => sum + (parcel.products || []).reduce((s, p) => s + Number(p.quantity || 0), 0),
                          0
                        )
                        const receiver = orderParcels[0]?.address?.name || '-'
                        return (
                          <tr key={`${order.id || 'order'}-${index}`} className="border-t border-[#e6cdb9]">
                            <td className="px-3 py-2 text-sm text-[#521903]">{order.id || '-'}</td>
                            <td className="px-3 py-2 text-sm text-[#7a4b32]">{order.createdAt ? new Date(order.createdAt).toLocaleString() : '-'}</td>
                            <td className="px-3 py-2 text-sm text-[#7a4b32]">{orderParcels.length}</td>
                            <td className="px-3 py-2 text-sm text-[#7a4b32]">{products}</td>
                            <td className="px-3 py-2 text-sm text-[#7a4b32]">{qty}</td>
                            <td className="px-3 py-2 text-sm text-[#7a4b32]">{receiver}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            {filteredUsers.length === 0 ? (
              <div className="border border-[#c29f85] bg-white p-4 text-sm text-[#7a4b32]">No users found.</div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
