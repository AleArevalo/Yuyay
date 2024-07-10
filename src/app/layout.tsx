import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import './globals.css'

const inter = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuyay - Mapa mental inteligente',
  description: 'Genera mapas mentales contándole a Yuyay lo que requieras recordar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
