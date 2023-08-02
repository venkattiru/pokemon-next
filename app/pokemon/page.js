'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import PokemonList from "./PokemonList";

export default function PokeHome() {

    const { data } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/login')
        }
    })
    return (
        <div>
            <PokemonList/>
        </div>
    )
}