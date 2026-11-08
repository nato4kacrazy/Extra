$(document).ready(function() {
    // Робимо запит до PokeAPI на перших 100 покемонів
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
        method: 'GET',
        success: function(response) {
            // Отримуємо масив результатів та витягуємо імена
            let pokemonNames = response.results.map(pokemon => pokemon.name);

            // Відфільтровуємо імена менші за 9 символів
            let filteredNames = pokemonNames.filter(name => name.length < 9);

            // Сортуємо в алфавітному порядку
            filteredNames.sort();

            // Виводимо результат на сторінку
            let listElement = $('#pokemon-list');
            filteredNames.forEach(name => {
                listElement.append(`<li>${name}</li>`);
            });
        },
        error: function(error) {
            console.error('Помилка при отриманні даних:', error);
        }
    });
});