import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Lank Chilled Studio',
    default: 'Lank Chilled - Ship Products 10x Faster | Design & Development Studio Cape Town',
  },
  description: 'World-class web applications that scale your business across Africa and beyond. Specializing in React, Next.js, and modern technologies. 98% client satisfaction, 50+ projects delivered across 15 African countries. Cape Town-based studio powering Africa\'s digital transformation.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '32x32' },
      { url: '/favicon.svg', sizes: '16x16' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: '180x180' },
    ],
    shortcut: '/favicon.svg',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-black text-base antialiased">
      <body className="flex min-h-full flex-col bg-black">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
