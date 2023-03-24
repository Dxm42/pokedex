
function convertpokemonToHtml(pokemon){
    return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>

        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
    </div>
</li>  
    `
}

pokeApi.getPokemons().then((pokemons) => {
    const listItems = []
    for(let i = 0; i < pokemons.length; i++){
      const pokemon = pokemons[i];
      listItems.push(convertpokemonToHtml(pokemon))
    }
    console.log(listItems)
})
.catch((error) => {
    console.log(error)
})
