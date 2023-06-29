// Quiz data
const quizData = [
  {
    question: 'Installing and configuring a suitable _______ or Integrated Development Environment (IDE) is essential for JavaScript development.',
    type: 'text',
    answer: 'text editor'
  },
  {
    question: 'Text editors provide a lightweight and customizable environment for writing ________.',
    type: 'text',
    answer: 'code'
  },
  {
    question: 'IDEs offer more advanced features like code suggestions, debugging tools, and project management capabilities to enhance developers\' ___________.',
    type: 'text',
    answer: 'productivity'
  },
  {
    question: 'Popular JavaScript frameworks and libraries provide developers with reusable components, functions, and tools to simplify the _________ process.',
    type: 'text',
    answer: 'development'
  },
  {
    question: 'JavaScript frameworks offer solutions to common challenges, such as managing user interfaces, handling data, and making ________ requests.',
    type: 'text',
    answer: 'HTTP'
  },
  {
    question: 'The browser\'s JavaScript console allows developers to interact with JavaScript code.',
    type: 'radio',
    options: ['True', 'False'],
    answer: 'True'
  },
  {
    question: 'The browser\'s JavaScript console is a powerful tool for debugging applications.',
    type: 'radio',
    options: ['True', 'False'],
    answer: 'True'
  },
  {
    question: 'The browser\'s JavaScript console provides information about runtime errors, warnings, and log messages.',
    type: 'radio',
    options: ['True', 'False'],
    answer: 'True'
  },
  {
    question: 'React, Angular, and Vue.js are examples of popular JavaScript frameworks.',
    type: 'radio',
    options: ['True', 'False'],
    answer: 'True'
  },
  {
    question: 'JavaScript libraries like jQuery and Lodash provide reusable functions and tools for developers.',
    type: 'radio',
    options: ['True', 'False'],
    answer: 'True'
  }
];

const quiz = document.getElementById('quiz');
const answerOptions = document.getElementById('answer-options');
const questionEl = document.getElementById('question');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  answerOptions.innerHTML = '';
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  if (currentQuizData.type === 'text') {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'answer';
    input.placeholder = 'Answer';
    answerOptions.appendChild(input);
  } else if (currentQuizData.type === 'radio') {
    for (let i = 0; i < currentQuizData.options.length; i++) {
      const option = currentQuizData.options[i];
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'answer';
      radio.value = option;
      radio.id = `option${i}`;
      label.innerText = option;
      label.setAttribute('for', `option${i}`);
      answerOptions.appendChild(radio);
      answerOptions.appendChild(label);
    }
  }
}

submitBtn.addEventListener('click', () => {
  const currentQuizData = quizData[currentQuiz];
  let answer;

  if (currentQuizData.type === 'text') {
    const input = document.getElementById('answer');
    answer = input.value;
  } else if (currentQuizData.type === 'radio') {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      answer = selectedOption.value;
    }
  }

  if (answer) {
    if (answer.toLowerCase() === currentQuizData.answer.toLowerCase()) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      let message;
      if (score >= 7 && score <= 9) {
        message = 'Very Good!';
      } else if (score === 10) {
        message = 'Perfect!';
      } else {
        message = "It's okay, you can try again.";
      }

      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <p class="message">${message}</p>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
