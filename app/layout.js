import './globals.css'
import {Cinzel} from 'next/font/google'

const cinzel =  Cinzel({
  weight: '500',
  subsets: ['latin']
})

export const metadata = {
  title: 'Pokemon Nxt',
  description: 'Pokemon details',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cinzel.className}>{children}</body>
    </html>
  )
}
