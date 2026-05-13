import { NextResponse } from 'next/server'
import { getCollections } from '@/lib/mongodb'

export async function POST(request) {
  try {
    const { userEmail, address } = await request.json()
    const normalizedEmail = String(userEmail || '').trim().toLowerCase()

    if (!normalizedEmail || !address) {
      return NextResponse.json({ error: 'userEmail and address are required.' }, { status: 400 })
    }

    const { addresses } = await getCollections()
    const doc = {
      ...address,
      id: address.id || `addr_${Date.now()}`,
      userEmail: normalizedEmail,
      createdAt: new Date().toISOString()
    }

    await addresses.insertOne(doc)
    const { _id, ...saved } = doc
    return NextResponse.json({ address: saved })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save address.', details: error.message }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const { userEmail, addressId, address } = await request.json()
    const normalizedEmail = String(userEmail || '').trim().toLowerCase()

    if (!normalizedEmail || !addressId || !address) {
      return NextResponse.json({ error: 'userEmail, addressId and address are required.' }, { status: 400 })
    }

    const { addresses } = await getCollections()
    await addresses.updateOne(
      { userEmail: normalizedEmail, id: addressId },
      { $set: { ...address, id: addressId, userEmail: normalizedEmail, updatedAt: new Date().toISOString() } }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update address.', details: error.message }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const userEmail = String(searchParams.get('userEmail') || '').trim().toLowerCase()
    const addressId = String(searchParams.get('addressId') || '').trim()

    if (!userEmail || !addressId) {
      return NextResponse.json({ error: 'userEmail and addressId are required.' }, { status: 400 })
    }

    const { addresses } = await getCollections()
    await addresses.deleteOne({ userEmail, id: addressId })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete address.', details: error.message }, { status: 500 })
  }
}
