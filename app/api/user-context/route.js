import { NextResponse } from 'next/server'
import { getCollections } from '@/lib/mongodb'

export async function GET(request) {
  try {
    const email = String(new URL(request.url).searchParams.get('email') || '').trim().toLowerCase()
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    const { users, addresses, orders } = await getCollections()

    const [user, userAddresses, userOrders] = await Promise.all([
      users.findOne({ email }),
      addresses.find({ userEmail: email }).sort({ createdAt: -1 }).toArray(),
      orders.find({ customerEmail: email }).sort({ createdAt: -1 }).toArray()
    ])

    return NextResponse.json({
      user: user
        ? {
            id: user.id,
            name: user.name || '',
            email: user.email,
            whatsapp: user.whatsapp || '',
            password: user.password || '',
            profilePhoto: user.profilePhoto || ''
          }
        : null,
      addresses: userAddresses.map(({ _id, ...rest }) => rest),
      orders: userOrders.map(({ _id, ...rest }) => rest)
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load user context.', details: error.message }, { status: 500 })
  }
}
