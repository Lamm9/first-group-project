$(function() {
    var disneyBtn = $('#quiz1');
    var marvelBtn = $('#quiz2');
    var pokemonBtn = $('#quiz3');
    var disneyURL = 'https://disneyapi.dev/';
    var marvelURL = 'https://gateway.marvel.com/v1';
    var pokemonURL = 'https://pokeapi.co/api/v2/';

    fetch(disneyURL, {})
    fetch(marvelURL, {})
    fetch(pokemonURL, {})

    $(disneyBtn).on('click',disneyQuiz());

    $(marvelBtn).on('click',marvelQuiz());

    $(pokemonBtn).on('click',pokemonQuiz());
})