export async function getPokemons (offset=0) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    return response.json()
}