document.addEventListener('DOMContentLoaded', function () {
    // GLOBAL VARIABLES
    const modal = document.querySelector('.modal');
    const startBtn = document.querySelector('.btn--start');
    const pokemonQuestionBox = document.querySelector('.question__text');
    const scoreBox = document.querySelector('.score__text');
    const summary = document.querySelector('.summary');
    const rating = document.querySelector('.rating');
    const answersBox = document.querySelector('.answers');
    const answerButton = document.querySelectorAll('.answers-list li button');

    // pokeAPI URL with no query 
    const pokeAPI = 'https://pokeapi.co/api/v2/';

    // Limits to first generation Pokemon
    const pokemonsLimit = 151;

    // Set limit to 10 questions
    const questionsLimit = 10;

    let randomPokemon = '';
    let allPokemonsArray = [];
    let score = 0;
    let questionNumber = 0;

    // HELPER FUNCTIONS
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    function checkStatus(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const disableButtons = function (state) {
        answerButton.forEach((button) => {
            button.disabled = state;
        });
    }

    //EVENT LISTENERS
    startBtn.addEventListener('click', function () {
        startGame();
    });



    // Fetch and create array with Pokemon used as possible answers to questions
    fetch(`${pokeAPI}pokemon/?limit=${pokemonsLimit}`)
        .then(checkStatus)
        .then((data) => data.json())
        .then(data => createPokemonsArray(data))
        .catch(error => console.log(error));

    // Take the fetch results and push all Pokemon names to allPokemonsArray
    const createPokemonsArray = function (data) {
        (data.results).forEach(function (item) {
            allPokemonsArray.push(item.name);
        });
    }


    // Fetch PokeAPI for random Pokemon question
    const findRandomPokemon = function () {
        fetch(`${pokeAPI}pokemon-species/${randomNumber(1, pokemonsLimit)}`)
            .then(checkStatus)
            .then((data) => data.json())
            .then(data => createQuestion(data))
            .then(data => createAnswers())
            .catch(error => console.log(error));

    }

    const createQuestion = function (data) {
        // assign fetched data to variables
        randomPokemon = data.name;
        let question = data.flavor_text_entries.filter(e => e.language.name === "en")[0].flavor_text;

        // Change name to ... for easier questions 
        randomPokemonCapitalized = randomPokemon.replace(randomPokemon.charAt(0), randomPokemon.charAt(0).toUpperCase());
        question = question.replace(randomPokemonCapitalized, "...");

        // Show question 
        pokemonQuestionBox.textContent = question;
    }

    const createAnswers = function () {
        // Create random possible answers in an array
        let possibleAnswers = [];
        while (possibleAnswers.length < 3) {
            randomAnswer = allPokemonsArray[randomNumber(0, pokemonsLimit)];
            if (randomAnswer !== randomPokemon && !possibleAnswers.includes(randomAnswer) && typeof randomAnswer !== "undefined") {
                possibleAnswers.push(randomAnswer)
            }
        }
        // Add 1 correct answer to 3 random answers randomly placed in an array
        possibleAnswers.splice([randomNumber(0, 4)], 0, randomPokemon);

        // Assign answers to the answer buttons
        for (i = 0; i < answerButton.length; i++) {
            answerButton[i].textContent = possibleAnswers[i]
        }
    }


    const checkAnswers = function () {
        answerButton.forEach((button) => {
            button.addEventListener('click', function () {
                // When you choose an answer the buttons are disabled until next question
                disableButtons(true);

                if (button.textContent === randomPokemon) {
                    // If correct answer will be green 
                    this.classList.add('correct');
                    // Update the score and show the next question after 1 second
                    setTimeout(function () {
                        score++;
                        questionNumber++;
                        scoreBox.textContent = `${score}/${questionNumber}`;
                        button.classList.remove('correct');
                        // Check if this is the last question 
                        endGame();
                        findRandomPokemon();
                        // Renable buttons 
                        disableButtons(false);
                    }, 1000);


                } else {
                    // If answer is incorrect button will be red
                    this.classList.add('wrong');
                    // Display the correct answer
                    setTimeout(function () {
                        answerButton.forEach((button) => {
                            if (button.textContent === randomPokemon)
                                button.classList.add('correct');
                        });
                    }, 500)

                    // Update question number and show next question 
                    setTimeout(function () {
                        questionNumber++;
                        scoreBox.textContent = `${score}/${questionNumber}`;
                        button.classList.remove('wrong');
                        answerButton.forEach((button) => {
                            button.classList.remove('correct');
                        });
                        // Check if this is the last question 
                        endGame();
                        findRandomPokemon();
                        // Renable buttons 
                        disableButtons(false);
                    }, 1400);

                }

            })
        })

    }

    // Check if this is the last question and display summary message
    const endGame = function () {
        if (questionNumber == questionsLimit) {
            modal.classList.remove('hidden');
            answersBox.classList.add('hidden');
            summary.textContent = `Your score: ${score}/${questionNumber}. `;
            if (score > questionNumber / 2) {
                rating.textContent = 'Well done! A true expert of the Kanto region.'
            } else {
                rating.textContent = 'Too bad! Study your Pokedex some more and try again!'
            }
        }
    }


    // Start game 
    const startGame = function () {

        // Hide the starting modal
        answersBox.classList.remove('hidden');
        modal.classList.add('hidden');

        // Set initial score and question number 
        score = 0;
        questionNumber = 0;
        scoreBox.textContent = `${score}/${questionNumber}`;

        // Fetch a random pokemon and create question and answers
        findRandomPokemon()

    }

    checkAnswers()
})