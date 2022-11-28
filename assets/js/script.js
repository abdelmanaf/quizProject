const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElenent = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');


// display questions
let shuffledQuestions
let currentQuestionIndex


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});

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
  },
  {
    question: 'Who is the president of United State?',
    answers: [
      {text: 'Donald Trump', correct: false},
      {text: 'Clinton', correct: false},
      {text: 'Joe Biden', correct: true},
      {text: 'Barack Obama', correct: false}
    ]
  },
  {
    question: 'What is CSS stand for?',
    answers: [
      {text: 'Cascade Style Sheets', correct: false},
      {text: 'Cascading Sheets Style', correct: false},
      {text: 'Cascading Styling Sheets', correct: false},
      {text: 'Cascading Style Sheets', correct: true}
    ]
  },
  {
    question: 'Do you like Ice cream?',
    answers: [
      {text: 'Yes', correct: true},
      {text: 'No', correct: true}
    ]
  },
  {
    question: 'What is the greatest movie ever?',
    answers: [
      {text: 'Black Pather', correct: true},
      {text: 'Black Adam', correct: true},
      {text: 'Jumanji', correct: true},
      {text: '365', correct: true}
    ]
  },
]


function startGame(){
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
  questionElenent.innerHTML = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
  })
}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
