'use client'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const {data} = useSession()
  console.log('data user', data)
    if(data) {
      return (
      <>
        Signed in as {data.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
      )
    } else {
      return (
      <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
      )
    }
}
