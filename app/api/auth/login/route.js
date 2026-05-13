import { NextResponse } from 'next/server'
import { getCollections } from '@/lib/mongodb'

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    const normalizedEmail = String(email || '').trim().toLowerCase()
    const plainPassword = String(password || '').trim()

    if (!normalizedEmail || !plainPassword) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 })
    }

    const { users } = await getCollections()
    let user = await users.findOne({ email: normalizedEmail })

    if (!user) {
      const now = new Date().toISOString()
      const nextUser = {
        id: `usr_${Date.now()}`,
        name: normalizedEmail.split('@')[0],
        email: normalizedEmail,
        password: plainPassword,
        whatsapp: '',
        profilePhoto: '',
        createdAt: now,
        updatedAt: now
      }
      await users.insertOne(nextUser)
      user = nextUser
    } else if (user.password !== plainPassword) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })
    }

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name || '',
        email: user.email,
        whatsapp: user.whatsapp || '',
        profilePhoto: user.profilePhoto || ''
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Login failed.', details: error.message }, { status: 500 })
  }
}
