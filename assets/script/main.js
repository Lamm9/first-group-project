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
        var swQuestion = $('#sw-question');
        
        var content = [
        {question: 'What lightsaber color best suits you?',

        answers: ['Blue', 'Green','Red','Purple']
    
        },
    
        {question: 'Which Jedi master would you train with?',

        answers: ['2']
    
        },

        {question: 'What species would your space companion be?',
    
        answers: ['3']

        },

        {question: 'What faction would you fight for?',
    
        answers: ['4']
    
        },
    ]

        swImage.href = 

        $(swAnswer1)
        $(swAnswer2)
        $(swAsnwer3)
        $(swAnswer4)

        for (i=0;i<content.length;i++) {
            $(swQuestion).append('<h2>'+content[i].question+'</h2>');

            $(swAnswer1).append('<li>'+content[0].answers[0]+'</li>')
            $(swAnswer2).textContent = content[0].answers[1]
            $(swAsnwer3).textContent = content[0].answers[2]
            $(swAnswer4).textContent = content[0].answers[3]
        }

    }

    //$(disneyBtn).on('click',disneyQuiz());

    $(swBtn).on('click',swQuiz());

    //$(pokemonBtn).on('click',pokemonQuiz());
})