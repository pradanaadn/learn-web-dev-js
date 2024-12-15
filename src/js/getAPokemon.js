import { apiBase } from "./config.js";

async function getAPokemon(pokemonName) {
    const response = await fetch(apiBase + "/" + pokemonName);
    const data = await response.json();

    document.getElementById("pokemon_name").innerHTML = pokemonName;
    document.getElementById("pokemon_image").src = data.sprites.front_shiny;

    const audioElement = document.getElementById("audio_control");
    const audioUrl = data.cries?.latest;
    if (audioUrl) {
        audioElement.src = audioUrl;
        audioElement.muted = true; 
        audioElement.volume = 0.3;
       
        audioElement
            .play()
            .then(() => {
                audioElement.muted = false; 
            })
            .catch((error) => {
                console.error("Autoplay failed:", error);
                document.addEventListener(
                    "click",
                    () => {
                        audioElement.muted = false;
                        audioElement.play();
                    },
                    { once: true }
                );
            });
    } else {
        console.warn("Audio URL not found in response.");
    }
}

export { getAPokemon };
