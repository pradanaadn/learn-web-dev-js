import {apiBase} from './config.js';

async function getPokemonList() {
    const response = await fetch (
        apiBase
        
    )
    const data = await response.json();
    const results = data.results;
    for(let key in results){
        let button = `<button class="btn btn-outline btn-secondary m-1 capitalize" >${results[key].name}</button>`
        document.getElementById('list-pokemon').insertAdjacentHTML('beforeend', button)
        
    }
    
}


export {getPokemonList};