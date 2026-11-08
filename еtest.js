$(document).ready(function(){
    $.ajax({
        URL:"https://pokeapi.co/api/v2/pokemon?limit=100",
        method: "GET",
        success: function(response) {
            let pokemones = response.result.map(pokemon=>pokemon.name);

            let filterPokemones = pokemones.filter(name => name.length < 9);

            let sortedpokemones = filterPokemones.sort();

            let ULELEment = $('#pokemon-list');

            sortedpokemones.forEach(name=>
                 {
                ULELEment.append('<li>${name}</li>')
                });

            
        },
        error: function(error) {
            console.error('Помилка при отриманні даних:', error);
        }
    })   
})