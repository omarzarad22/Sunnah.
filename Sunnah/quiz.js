const questions = [
    { question: "There are 114 chapters (Surahs) in the Quran.", correctAnswer: true },
    { question: "There are 25 Prophets mentioned in the Quran", correctAnswer: true },
    { question: "Dhur is silent prayer", correctAnswer: true },
    { question: "Aisha is silent prayer", correctAnswer: false },
    { question: "Prophet Musa AS is most mentioned in Quran", correctAnswer: true },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const questionContainer = document.getElementById('question-container');

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
    } else {
        showResult();
    }
}

function answer(isTrue) {
    if (questions[currentQuestionIndex].correctAnswer === isTrue) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

showQuestion();