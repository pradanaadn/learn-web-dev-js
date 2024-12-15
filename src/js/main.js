import {getPokemonList} from './getPokemon.js'
import {getAPokemon} from './getAPokemon.js';

window.onload = async function(){
    const dataPokemon = await getPokemonList()
    
    const buttons = document.querySelectorAll('#list-pokemon button');
    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            await getAPokemon(button.textContent); // Use textContent to get pokemon name
        });
    });
    
}

