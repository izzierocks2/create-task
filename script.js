let questionList = ['Who won the 2022 NBA Championship?', 'Who won the 2025 March Madness Mens Tournament?'];
let answerList = ['Golden State Warriors', 'Duke Blue Devils'];

let score = 0;
let questionIndex = 0;


const question = document.querySelector('.question-container');
const button = document.querySelector('.submit-button');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector('.score-container');

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
    
}