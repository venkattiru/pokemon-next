import Image from "next/image"

const PokemonList = ({list}) => {
    return (
        list.map((poke, index) => {
            return (
            <div key={index}>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt={poke?.name} width={300} height={400}/>
            <p>{poke.name}</p>
            </div>
            )
        })
    )
}

export default PokemonList;