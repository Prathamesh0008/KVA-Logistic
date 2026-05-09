import { NextResponse } from 'next/server'
import { getCollections } from '@/lib/mongodb'

export async function PUT(request) {
  try {
    const { email, name, password, whatsapp, profilePhoto } = await request.json()

    const normalizedEmail = String(email || '').trim().toLowerCase()
    const safeName = String(name || '').trim()
    const safePassword = String(password || '').trim()
    const safeWhatsapp = String(whatsapp || '').trim()
    const safeProfilePhoto = String(profilePhoto || '').trim()

    if (!normalizedEmail || !safeName || !safePassword || !safeWhatsapp) {
      return NextResponse.json({ error: 'Name, email, password and number are required.' }, { status: 400 })
    }

    const { users } = await getCollections()
    const now = new Date().toISOString()

    await users.updateOne(
      { email: normalizedEmail },
      {
        $set: {
          name: safeName,
          password: safePassword,
          whatsapp: safeWhatsapp,
          profilePhoto: safeProfilePhoto,
          updatedAt: now
        },
        $setOnInsert: {
          id: `usr_${Date.now()}`,
          createdAt: now,
          email: normalizedEmail
        }
      },
      { upsert: true }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update account.', details: error.message }, { status: 500 })
  }
}
