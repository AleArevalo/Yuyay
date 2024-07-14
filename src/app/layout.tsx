import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import Header from './ui/header'
import Footer from './ui/footer'

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
      <body id="home" className={`${inter.className} min-h-screen bg-light-pattern dark:bg-dark-pattern bg-[size:60px_60px] bg-[-5px_-5px]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
