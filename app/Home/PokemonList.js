import Image from "next/image"

const PokemonList = ({list}) => {
    return (
        list.map((poke, index) => {
            return (
            <div key={index} className="flex flex-none flex-col w-80 h-84 p-5 shadow-md m-2">
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt={poke?.name} width={300} height={400} className="hover:scale-110"/>
            <p className="text-center capitalize">{poke.name}</p>
            </div>
            )
        })
    )
}

export default PokemonList;