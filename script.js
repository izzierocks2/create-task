//Defines the questions and answers
let questionList = ['Who won the 2022 NBA Championship?', 'Who won the 2025 March Madness Mens Tournament?', 'Who wrote the play "Romeo and Juliet"?', 'Who painted the Mona Lisa?', 'What is the largest ocean?'];
let answerList = ['Golden State Warriors', 'Florida Gators', 'William Shakespeare', 'Leonardo da Vinci', 'Pacific Ocean'];


function checkAnswer(userInput, correctAnswer) {
    let user = userInput.trim().toLowerCase();
    let correct = correctAnswer.toLowerCase();

    if(user.length !== correct.length) {
        return false; 
    }

    for (let i = 0; i < user.length; i++) {  //Iteration
        if (user[i] !== correct[i]) {  //Selection
            return false;
        }
    }

    return true;  //Sequencing
}

function printAllQuestions(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(`Question ${i + 1}: ${list[i]}`);
    }
}
printAllQuestions(questionList);

let score = 0; //Initial score
let questionIndex = 0; //Starts with the first question


const question = document.querySelector('.question-container');
const button = document.querySelector('#submit-button');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector('.score-container');

//Shows the first question
question.textContent = questionList[questionIndex];


button.addEventListener('click', () => {
    //Prevents submission after all questions have been answered
    if(questionIndex >= questionList.length) return;

    //Check if the answer is correct and updates the score accordingly
    if (checkAnswer(input.value, answerList[questionIndex])) {
        score += 1; //Correct answer
    } else {
        score -= 1; //Incorrect answer
    }

    //Updates score display
    scoreContainer.textContent = "Score: " + score;

    //Moves to the next question
    questionIndex++;

    //If there are no more questions, end the game
    if(questionIndex >= questionList.length) {
        endGame(score);
    } else {
        //Show the next question
        question.textContent = questionList[questionIndex];
    }
    
    //Clear the input field for the next question
    input.value = '';
});

//End the game function
function endGame(finalScore) {
    scoreContainer.textContent = "Final Score: " + finalScore; //Displays the final score
    question.textContent = "Congratulations, play again!"; //Displays the final message
    input.style.display = "none"; //Hides the input field
    button.style.display = "none"; //Hides the submit button
}