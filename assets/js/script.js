const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElenent = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame);

// questions lists
const questions = [
  {
    question: 'When was JavaScript created?',
    answers: [
      {text: '1995', correct: true},
      {text: '1994', correct: false},
      {text: '1996', correct: false},
      {text: '1993', correct: false}
    ]
  }
]

// display questions
let shuffledQuestions
let currentQuestionIndex


function startGame(){
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
  questionElenent.innerHTML = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.textContent = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
  })
}

function selectAnswer(){

}

