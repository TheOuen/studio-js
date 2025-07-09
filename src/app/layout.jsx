import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Lank Chilled',
    default: 'Lank Chilled - Design & Development Studio Cape Town',
  },
  description: 'Compact creative studio based in Cape Town. We design and build digital products, branded content, and architectural visuals for clients who care about craft.',
  icons: {
    icon: [
      { url: '/logos/lankchilled_logo_square_1.png', sizes: '32x32', type: 'image/png' },
      { url: '/logos/lankchilled_logo_square_1.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logos/lankchilled_logo_square_1.png', sizes: '180x180', type: 'image/png' },
    ],
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
