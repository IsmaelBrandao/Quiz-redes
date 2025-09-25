let currentQuestion = 0;
let userAnswers = [];
let score = 0;

const menu = document.getElementById("menu");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");

const quizContent = document.getElementById("quiz-content");
const questionCounter = document.getElementById("question-counter");
const progress = document.getElementById("progress");

const scoreText = document.getElementById("score-text");
const review = document.getElementById("review");

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("prev-btn").addEventListener("click", prevQuestion);
document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("retry-btn").addEventListener("click", startQuiz);
document.getElementById("menu-btn").addEventListener("click", backToMenu);

function startQuiz() {
  menu.classList.add("hidden");
  results.classList.add("hidden");
  quiz.classList.remove("hidden");

  currentQuestion = 0;
  userAnswers = [];
  score = 0;

  loadQuestion();
  updateProgress();
}

function loadQuestion() {
  const q = quizData[currentQuestion];
  quizContent.innerHTML = `
    <div class="question-block">
      <h3>${q.question}</h3>
      <ul class="options">
        ${q.options
          .map(
            (opt, i) => `
          <li onclick="selectOption(${i})" class="${
              userAnswers[currentQuestion] === i ? "selected" : ""
            }">${opt}</li>`
          )
          .join("")}
      </ul>
    </div>
  `;

  questionCounter.textContent = `Questão ${
    currentQuestion + 1
  } de ${quizData.length}`;
}

function selectOption(i) {
  // Só salva a resposta, sem mostrar certo/errado ainda
  userAnswers[currentQuestion] = i;
  loadQuestion();
}

function showAnswerFeedback() {
  const q = quizData[currentQuestion];
  const options = document.querySelectorAll(".options li");

  options.forEach((opt, index) => {
    if (index === q.answer) {
      opt.classList.add("correct"); // resposta certa fica verde
    }
    if (userAnswers[currentQuestion] === index && index !== q.answer) {
      opt.classList.add("incorrect"); // resposta errada fica vermelha
    }
  });
}

function nextQuestion() {
  if (userAnswers[currentQuestion] === undefined) {
    alert("Selecione uma resposta antes de continuar!");
    return;
  }

  const alreadyChecked = document.querySelector(".options li.correct, .options li.incorrect");

  if (!alreadyChecked) {
    // Mostra o feedback na primeira vez que clicar em "Próximo"
    showAnswerFeedback();
  } else {
    // Se já mostrou o feedback, aí sim vai para a próxima
    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      loadQuestion();
      updateProgress();
    } else {
      finishQuiz();
    }
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
    updateProgress();
  }
}

function updateProgress() {
  const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
  progress.style.width = `${progressPercent}%`;
}

function finishQuiz() {
  quiz.classList.add("hidden");
  results.classList.remove("hidden");

  score = userAnswers.reduce((acc, ans, i) => {
    return ans === quizData[i].answer ? acc + 1 : acc;
  }, 0);

  scoreText.textContent = `Você acertou ${score} de ${quizData.length} questões!`;
  scoreText.classList.toggle("low-score", score < quizData.length / 2);

  review.innerHTML = quizData
    .map((q, i) => {
      const userAns = userAnswers[i];
      const correct = userAns === q.answer;
      return `
      <div class="review-question ${correct ? "correct" : "incorrect"}">
        <p><b>${i + 1}.</b> ${q.question}</p>
        <p>Sua resposta: ${
          userAns !== undefined ? q.options[userAns] : "<i>em branco</i>"
        }</p>
        <p>Resposta correta: <span style="color:#28a745">${
          q.options[q.answer]
        }</span></p>
      </div>
    `;
    })
    .join("");
}

function backToMenu() {
  quiz.classList.add("hidden");
  results.classList.add("hidden");
  menu.classList.remove("hidden");
}
