import { getPokemons } from "@/utils/apis";
import PokemonList from "./PokemonList";

export default async function HomePage(){

    const pokemonList = await getPokemons();
    console.log('pokemon', pokemonList.results);
    return(
        <div>
        <PokemonList  list={pokemonList.results}/>
        </div>
    )
}