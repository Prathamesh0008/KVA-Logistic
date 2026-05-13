import { NextResponse } from 'next/server'
import { getCollections } from '@/lib/mongodb'

export async function POST(request) {
  try {
    const { name, email, message, userEmail } = await request.json()

    if (!String(name || '').trim() || !String(email || '').trim() || !String(message || '').trim()) {
      return NextResponse.json({ error: 'Please fill name, email and message.' }, { status: 400 })
    }

    const { supportMessages } = await getCollections()
    await supportMessages.insertOne({
      id: `SUP-${Date.now()}`,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      message: String(message).trim(),
      userEmail: String(userEmail || email).trim().toLowerCase(),
      createdAt: new Date().toISOString()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send support message.', details: error.message }, { status: 500 })
  }
}
