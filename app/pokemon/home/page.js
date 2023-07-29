
import PokemonList from "./PokemonList";
import { Suspense } from "react";

export default function HomePage(){

    
    return(
        
            <Suspense fallback={<p>Loading</p>}>
        <PokemonList />
        </Suspense>
        
    )
}