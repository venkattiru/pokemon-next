"use client";

import { getPokemons } from "@/utils/apis";
import { HeartFilled } from "@/utils/svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");

    window.addEventListener("scrollend", handleScroll);

    return () => window.removeEventListener("scrollend", handleScroll);
  }, []);

  const handleScroll = () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (
      (scrollTop + clientHeight >=
      scrollHeight -200)  
    ) {
      setIsFetching(true);
      fetchData(sessionStorage.getItem("url"));
    }
  };

  const updateWishList = (isAdded, index) => {
    const updatedPokeList = pokemonList.map((pok,i) => {
        if(i === index) {
            return {
                ...pok,
                wishList : isAdded
            }  
        } else {
            return pok;
        } 
    })
    setPokemonList(updatedPokeList)
  }

  const fetchData = async (link) => {
    const data = await getPokemons(link);
    const {results} = data
    const PokeList = results.map((pok) => {
        return {
            ...pok,
            wishList : false    
        }  
    })
    console.log(PokeList)
    setPokemonList((prev) => {
      return [...prev, ...PokeList];
    });
    setIsFetching(false);
    sessionStorage.setItem("url", data?.next);
  };

  return (
    <>
    <div className="flex flex-wrap justify-center bg-zinc-100 dark:bg-[#383636]">
      {pokemonList.map((poke, index) => {
        return (
          <div
            key={index}
            className="flex flex-none flex-col w-80 h-84 p-5 shadow-md m-2 bg-[#e6e6fa] dark:bg-[#242020]"
          >
            <HeartFilled color='#fff' handleWish={(wish) => updateWishList(wish, index)}/>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={poke?.name}
              width={300}
              height={400}
              className="transition duration-500 hover:scale-110"
              
            />
            <p className="text-center capitalize text-[#465b5b] dark:text-yellow-300">
              {poke.name}
            </p>
          </div>
        );
      })}
    </div>
    {isFetching && <p>Loading ...</p>}
    </>
  );
};

export default PokemonList;
