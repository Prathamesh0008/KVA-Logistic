import { NextResponse } from 'next/server'
import { getCollections } from '@/lib/mongodb'

const toNumber = (value) => {
  const n = Number(value)
  return Number.isFinite(n) ? n : 0
}

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    const normalizedEmail = String(email || '').trim().toLowerCase()
    const plainPassword = String(password || '').trim()

    const adminEmail = String(process.env.ADMIN_EMAIL || 'admin@kva.com').trim().toLowerCase()
    const adminPassword = String(process.env.ADMIN_PASSWORD || 'admin123').trim()

    if (!normalizedEmail || !plainPassword) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 })
    }

    if (normalizedEmail !== adminEmail || plainPassword !== adminPassword) {
      return NextResponse.json({ error: 'Invalid admin credentials.' }, { status: 401 })
    }

    const { users, orders } = await getCollections()
    const [allUsers, allOrders] = await Promise.all([
      users.find({}).sort({ createdAt: -1 }).toArray(),
      orders.find({}).sort({ createdAt: -1 }).toArray()
    ])

    const ordersByUser = new Map()
    allOrders.forEach((order) => {
      const key = String(order.customerEmail || '').trim().toLowerCase()
      if (!key) return
      if (!ordersByUser.has(key)) ordersByUser.set(key, [])
      ordersByUser.get(key).push(order)
    })

    const usersWithPurchases = allUsers.map((user) => {
      const emailKey = String(user.email || '').trim().toLowerCase()
      const userOrders = ordersByUser.get(emailKey) || []
      const parcelCount = userOrders.reduce((acc, order) => acc + (order.parcels?.length || 0), 0)
      const productCount = userOrders.reduce(
        (acc, order) =>
          acc +
          (order.parcels || []).reduce(
            (sum, parcel) => sum + (parcel.products?.length || 0),
            0
          ),
        0
      )
      const quantityCount = userOrders.reduce(
        (acc, order) =>
          acc +
          (order.parcels || []).reduce(
            (sum, parcel) =>
              sum +
              (parcel.products || []).reduce(
                (productSum, product) => productSum + toNumber(product.quantity),
                0
              ),
            0
          ),
        0
      )

      return {
        id: user.id,
        name: user.name || '',
        email: user.email || '',
        whatsapp: user.whatsapp || '',
        profilePhoto: user.profilePhoto || '',
        createdAt: user.createdAt || '',
        orderCount: userOrders.length,
        parcelCount,
        productCount,
        quantityCount,
        latestOrderAt: userOrders[0]?.createdAt || '',
        orders: userOrders.map(({ _id, ...rest }) => rest)
      }
    })

    const totals = usersWithPurchases.reduce(
      (acc, user) => ({
        users: acc.users + 1,
        orders: acc.orders + user.orderCount,
        parcels: acc.parcels + user.parcelCount,
        products: acc.products + user.productCount,
        quantity: acc.quantity + user.quantityCount
      }),
      { users: 0, orders: 0, parcels: 0, products: 0, quantity: 0 }
    )

    return NextResponse.json({
      admin: { email: adminEmail },
      totals,
      users: usersWithPurchases
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load admin purchase summary.', details: error.message },
      { status: 500 }
    )
  }
}

