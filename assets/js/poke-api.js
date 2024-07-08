

const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon => {
    return fetch(pokemon.url).then((response) => response.json())
})

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'
    return fetch(url)
        .then((Response) => Response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detaiRequests) => Promise.all(detaiRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}