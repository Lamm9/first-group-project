$(function() {
    var disneyBtn = $('#quiz1');
    var swBtn = $('#quiz2');
    var pokemonBtn = $('#quiz3');

    var swURL = 'https://swapi.dev/api/';

    swQuiz = function() {
        window.location.href ="/sw-quiz.html";

        fetch(swURL);

        var swAnswer1 = $('#sw-answer-1');
        var swAnswer2 = $('#sw-answer-2');
        var swAsnwer3 = $('#sw-answer-3');
        var swAnswer4 = $('#sw-answer-4');
        var swImage = $('#sw-img');

        swImage.href = 

        $(swAnswer1)
        $(swAnswer2)
        $(swAsnwer3)
        $(swAnswer4)

    }

    //$(disneyBtn).on('click',disneyQuiz());

    $(swBtn).on('click',swQuiz());

    //$(pokemonBtn).on('click',pokemonQuiz());
})