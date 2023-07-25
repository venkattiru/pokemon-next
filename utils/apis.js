export async function getPokemons () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    return response.json()
}