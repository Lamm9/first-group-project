$(function() {
    var disneyBtn = $('#quiz1');
    var marvelBtn = $('#quiz2');
    var pokemonBtn = $('#quiz3');

    $(disneyBtn).on('click',disneyQuiz());

    $(marvelBtn).on('click',marvelQuiz());

    $(pokemonBtn).on('click',pokemonQuiz());
})