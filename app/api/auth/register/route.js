import { NextResponse } from 'next/server'
import { getCollections } from '@/lib/mongodb'

export async function POST(request) {
  try {
    const { name, email, password, whatsapp } = await request.json()

    const normalizedEmail = String(email || '').trim().toLowerCase()
    const safeName = String(name || '').trim()
    const plainPassword = String(password || '').trim()
    const safeWhatsapp = String(whatsapp || '').trim()

    if (!safeName || !normalizedEmail || !plainPassword || !safeWhatsapp) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const { users } = await getCollections()
    const exists = await users.findOne({ email: normalizedEmail })
    if (exists) {
      return NextResponse.json({ error: 'Email already registered. Please login.' }, { status: 409 })
    }

    const now = new Date().toISOString()
    const newUser = {
      id: `usr_${Date.now()}`,
      name: safeName,
      email: normalizedEmail,
      password: plainPassword,
      whatsapp: safeWhatsapp,
      profilePhoto: '',
      createdAt: now,
      updatedAt: now
    }

    await users.insertOne(newUser)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Registration failed.', details: error.message }, { status: 500 })
  }
}
