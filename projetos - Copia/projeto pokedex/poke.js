const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let contadora;

// Conectar com API
const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();

        return data;
    }

};

// Renderizar os Dados da API
const renderPokemon = async (pokemon) => {

    input.value = "";
    pokemonName.textContent = "Carregando..."
    pokemonNumber.textContent = "";
    pokemonImage.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs"

    const data = await fetchPokemon(pokemon)
    
    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;

        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        contadora = data.id;

    } else {
      pokemonName.textContent = "Não Encontrado"
    }

    console.log(data)
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase())
});

// Buttons Pokedex
buttonPrev.addEventListener("click", () => {
    
    if (contadora > 1) {
        contadora -= 1;
        renderPokemon(contadora);
    }    
});

buttonNext.addEventListener("click", () => {
    contadora += 1;
    renderPokemon(contadora)
    
});

renderPokemon(1)



