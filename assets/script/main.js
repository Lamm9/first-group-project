$(function() {
    var disneyBtn = $('#quiz1');
    var swBtn = $('#quiz2');
    var pokemonBtn = $('#quiz3');

    var pokemonURL = 'https://pokeapi.co/api/v2/';

    var swAPI = 'https://swapi.dev/api/';
    var swAPIPeople = 'https://swapi.dev/api/people/';
    var swAPIPlanets = 'https://swapi.dev/api/planets/';
    var score = 0;

    swQuiz = function() {

    var swAPI = 'https://swapi.dev/api/';
    var swAPIPeople = 'https://swapi.dev/api/people/';
    var swAPIPlanets = 'https://swapi.dev/api/planets/';
    var score = 0;

        fetch(swAPI)
        .then((response) => response.json())
        .then((data) => console.log(data))

        var swAnswer1 = $('#sw-answer-1');
        var swAnswer2 = $('#sw-answer-2');
        var swAsnwer3 = $('#sw-answer-3');
        var swAnswer4 = $('#sw-answer-4');
        var swImage = $('#sw-img');
        var swQuestion = $('#sw-question');
        var swAnswerList = $('#sw-quiz-answers');

        fetch(swAPIPeople)
        .then((response) => response.json())
        .then((data) => console.log(data))

        fetch(swAPIPlanets)
        .then((response) => response.json())
        .then((data) => console.log(data))
        
        var content = [
        {question: 'What planet is Luke from?',

        answers: ['Tattooine', 'Hoth', 'Endor', 'Mars']
    
        },
    
        {question: "Who is Luke's dad?",

        answers: ['Obi Wan Kenobi','Yoda','Dexter Jettster','Anakin']
    
        },

        {question: "What color is Darth Vader's lightsaber?",
    
        answers: ['Green','Blue','Purple','Red']

        },

        {question: 'What about the droid attack on the Wookiees?',
    
        answers: ['Is this a joke?','Yes it is feel free to select an answer.','What if I dont want to?','just pick one.']
    
        },

        {question: "Where do the Ewoks live?",
    
        answers: ['Europe','Endor','Mandalore','Hoth']
        
        },

        {question: "Who shot first?",
    
        answers: ['Han Solo','Jar Jar Binks','Count Dooku','Greedo']
        
        }
    ]

        var currentQuestion = 0;

        $(swQuestion).text(content[currentQuestion].question);

        $(swAnswer1).text(content[currentQuestion].answers[0])
        $(swAnswer2).text(content[currentQuestion].answers[1])
        $(swAsnwer3).text(content[currentQuestion].answers[2])
        $(swAnswer4).text(content[currentQuestion].answers[3])
        
        swAnswerList.on('click',function() {
            currentQuestion++; 
            
            $(swQuestion).text(content[currentQuestion].question);

            $(swAnswer1).text(content[currentQuestion].answers[0])
            $(swAnswer2).text(content[currentQuestion].answers[1])
            $(swAsnwer3).text(content[currentQuestion].answers[2])
            $(swAnswer4).text(content[currentQuestion].answers[3])
            
        })

    }

    //$(disneyBtn).on('click',disneyQuiz());

    swBtn.on('click',swQuiz());

    //$(pokemonBtn).on('click',pokemonQuiz());
}
)
