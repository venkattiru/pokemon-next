import Image from 'next/image'
import Link from 'next/link'
import { ThemeProvider } from 'next-themes'

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src='/pokeball-md.png' alt="pokemon logo" width={300} height={500}/>
      <button>SignIn</button>
      <button>Signup</button>
      
        <Link href='/Home'>
        <button>
          Home
          </button>
          </Link>
    </main>
    </ThemeProvider>
  )
}
