import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src='/pokemonNxt.jpg' alt="pokemon logo" width={300} height={500}/>
      <button>SignIn</button>
      <button>Signup</button>
      
        <Link href='/Home'>
        <button>
          Home
          </button>
          </Link>
    </main>
  )
}
