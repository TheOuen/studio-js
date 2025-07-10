import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Studio Plus',
    default: 'Studio Plus - Design & Development Studio Cape Town',
  },
  description: 'Creative studio based in Cape Town. We specialize in UX/UI design, web development, app development, drone photography, and architectural renders for clients who value quality.',
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
