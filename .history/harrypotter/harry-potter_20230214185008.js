// HTML Elements
const answerElems = document.getElementsByClassName("answer-card");
const imgElem = document.getElementById("character-img");
const submitBtn = document.getElementById("submit-answer-bt");
const radioBtns = document.getElementsByName('answers');
const statusElem = document.getElementById("status");

// This variable is 1 less than actual number of questions
const ROUND_COUNT = 9;
const NEXT_QUESTION_WAIT_TIME = 500;
// global variables
var idx = 0;
var questions = Array()
var text;

// get random int from a certain range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// display score page
function showScore() {
    window.location.href = "../score.html";
}

// load score to the score page
function loadScore() {
    var scoreElem = document.getElementById("score");
    var current_score = localStorage.getItem("score");
    scoreElem.innerHTML = `SCORE : ${current_score}`;
}

// NEXT button listener
if (window.location.pathname == "/harry-quiz.html")
{
    submitBtn.addEventListener("click", () => {
        for (i = 0; i < radioBtns.length; i++) {
            if (radioBtns[i].checked) {
                var selector = 'label[for=' + radioBtns[i].id + ']';
                var label = document.querySelector(selector);
                text = label.innerHTML;
            }
        }
    
        // Compare answer value with user selection
    
        if (text == questions[idx].answer) {
            var current_score = localStorage.getItem("score");
            current_score = parseInt(current_score)
            current_score += 1
            localStorage.setItem("score", current_score);
            statusElem.innerHTML = "Correct :)";
        }
        else {
            statusElem.innerHTML = "Wrong :(";
        }
    
        if (idx == ROUND_COUNT) {
            showScore();
        }
        else
        {
            idx++;
        }
        
    
        setTimeout(() => {
            statusElem.innerHTML = "";
            for (i = 0; i < radioBtns.length; i++) {
                radioBtns[i].checked = false;
            }
            renderQuestion(idx);
        }, NEXT_QUESTION_WAIT_TIME);
    
    })
}


function init() {
    // console.log(window.location.pathname);
    localStorage.setItem("score", 0);
    const harryURL = 'https://hp-api.onrender.com/api/characters';

    fetch(harryURL)
        .then((response) => response.json())
        .then((data) => {
            const characters = data.splice(0, 25)
            console.log(characters)

            /**
             * {
             *  img : "https://...png"
             *  answer : "harry potter",
             *  options : ["Arthur Weasley", "Ginny", "Hermione", "harry potter"]
             * }
             */

            characters.forEach(character => {
                // console.log(" --- ");
                var temp_options = []

                for (var i = 0; i < 3; i++) {
                    var new_name = characters[getRandomInt(0, 25)].name;
                    while (temp_options.includes(new_name) || new_name == character.name) {
                        new_name = characters[getRandomInt(0, 25)].name;
                    }
                    temp_options.push(new_name);
                }
                temp_options.push(character.name);
                shuffleArray(temp_options);

                var temp = {
                    imgURL: character.image,
                    answer: character.name,
                    options: temp_options,
                }
                questions.push(temp);
            });

            console.log(questions);
            localStorage.setItem("current", idx);
            renderQuestion(idx);
        });
}

function renderQuestion(idx) {
    for (var i = 0; i < 4; i++) {
        answerElems[i].innerHTML = questions[idx].options[i];
    };
    imgElem.src = questions[idx].imgURL;
}

if (window.location.pathname.includes("harry-potter.html"))
{
    init()
}
else
{
    loadScore();
}
