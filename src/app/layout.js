import './globals.css'
import {Montserrat, Fraunces } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'],weight: ['500', '700'], variable: '--font-montserrat' })
const fraunces = Fraunces({subsets:['latin'], weight: ['700'], variable: '--font-fraunces'})
export const metadata = {
  title: 'Product preview card component',
  description: 'Preview card component',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable}`} >
      <body>{children}</body>
    </html>
  )
}
