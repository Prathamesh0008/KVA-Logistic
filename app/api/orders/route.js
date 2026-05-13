import { NextResponse } from 'next/server'
import { getCollections } from '@/lib/mongodb'

export async function POST(request) {
  try {
    const order = await request.json()

    if (!order?.customerEmail || !Array.isArray(order.parcels)) {
      return NextResponse.json({ error: 'Invalid order payload.' }, { status: 400 })
    }

    const { orders } = await getCollections()
    const doc = {
      ...order,
      customerEmail: String(order.customerEmail).trim().toLowerCase(),
      id: order.id || `ORD-${Date.now()}`,
      createdAt: order.createdAt || new Date().toISOString()
    }

    await orders.insertOne(doc)
    const { _id, ...saved } = doc
    return NextResponse.json({ order: saved })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save order.', details: error.message }, { status: 500 })
  }
}
