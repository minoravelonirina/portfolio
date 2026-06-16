import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  message?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY
  const contactToEmail = process.env.CONTACT_TO_EMAIL ?? 'minoravelonirina@gmail.com'
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'

  if (!resendApiKey) {
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    )
  }

  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = payload.name?.trim()
  const email = payload.email?.trim()
  const message = payload.message?.trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: [contactToEmail],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          '',
          'Message:',
          message,
        ].join('\n'),
      }),
    })

    if (!response.ok) {
      const data = await response.json().catch(() => null)
      const resendError = data?.message ?? data?.error

      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === 'development' && resendError
              ? resendError
              : 'Unable to send the email right now.',
        },
        { status: 502 }
      )
    }
  } catch {
    return NextResponse.json(
      { error: 'Unable to send the email right now.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ success: true })
}
