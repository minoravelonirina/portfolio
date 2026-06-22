import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Minosoa Ravelonirina | Full Stack Developer',
  description: 'Full Stack Junior Developer - Specialized in Modern Web Development, Cloud Architecture, and DevOps Practices. Passionate about building scalable applications and automating deployment workflows.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark bg-background`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={undefined}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
