'use client'

import { getPokemons } from "@/utils/apis";
import Image from "next/image"
import { useEffect, useState } from "react"


const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([]);
    
    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
            fetchData(sessionStorage.getItem('url'))
        }   
    }

    useEffect(() => {
        fetchData('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    
    const fetchData = async(link) => {
        const data = await getPokemons(link);
        setPokemonList((prev) => {
            return [...prev, ...data?.results]
        });
        sessionStorage.setItem('url', data?.next);
    }
    
    return (
        <div className="flex flex-wrap justify-center bg-zinc-100 dark:bg-[#383636]">
        {pokemonList.map((poke, index) => {
            return (
            <div key={index} className="flex flex-none flex-col w-80 h-84 p-5 shadow-md m-2 bg-[#e6e6fa] dark:bg-[#242020]">
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt={poke?.name} width={300} height={400} className="hover:scale-110"/>
            <p className="text-center capitalize text-[#465b5b] dark:text-yellow-300">{poke.name}</p>
            </div>
            )
        })}
        </div>
    )
}

export default PokemonList;