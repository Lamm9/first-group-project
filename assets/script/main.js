$(function () {
    var disneyBtn = $('#quiz1');
    var marvelBtn = $('#quiz2');
    var pokemonBtn = $('#quiz3');

    $(disneyBtn).on('click', harryPotterQuiz());

    $(marvelBtn).on('click', starWarsQuiz());

    $(pokemonBtn).on('click', pokemonQuiz());
});

$(document).ready(function () {
    $.ajax({
        url: "https://api.disneyapi.dev/characters",
        method: 'GET',
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
            console.log(error);
        }
    })
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        mthod: 'GET',
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
            console.log(error);
        }
    })

})