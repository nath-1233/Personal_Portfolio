import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Nathaniel Miamba | Software Testing & Automation',
  description:
    'Portfolio of Nathaniel Miamba, a B.Tech Engineering student at Lovely Professional University focused on software quality assurance, manual testing, and test automation.',
  generator: 'v0.app',
  keywords: [
    'Nathaniel Miamba',
    'Software Testing',
    'QA',
    'Test Automation',
    'B.Tech',
    'Lovely Professional University',
    'Manual Testing',
  ],
  authors: [{ name: 'Nathaniel Miamba' }],
  openGraph: {
    title: 'Nathaniel Miamba | Software Testing & Automation',
    description:
      'B.Tech Engineering student passionate about software testing, quality assurance, and automation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1210' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
