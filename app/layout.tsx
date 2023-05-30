import './globals.css'
import { Inter } from 'next/font/google'

// Nextjs sometimes decides not to show the font the first time a user vists the website, so this remedies that
const inter = Inter({ subsets: ['latin'], display: "swap" })

export const metadata = {
  title: 'Inquiry and Innvovation | SHC',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
