import { apiBase } from "./config.js";

async function getAPokemon(pokemonName) {
    const response = await fetch (
        apiBase+'/'+pokemonName
        
    )
    const data = await response.json();
    console.log(data)
    
}

await getAPokemon('caterpie')

