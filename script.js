const cards = [
  {
    question: "Qual é o tema do Agrinho 2026?",
    answer: "O tema oficial ainda será divulgado, mas geralmente aborda agricultura sustentável, meio ambiente e inovação no campo."
  },
  {
    question: "O que significa ser um 'Agente do Agrinho'?",
    answer: "É ser uma criança ou jovem que cuida do meio ambiente, aprende sobre o campo e ajuda a transformar sua comunidade."
  },
  {
    question: "Qual a importância do solo para a agricultura?",
    answer: "O solo é a base da produção de alimentos. Sem solo saudável não há plantação forte."
  },
  {
    question: "O que é agricultura sustentável?",
    answer: "É produzir alimentos respeitando o meio ambiente, sem esgotar os recursos naturais."
  },
  {
    question: "Cite 3 produtos que vêm do campo:",
    answer: "Arroz, feijão, milho, carne, leite, frutas, verduras, ovos e muito mais!"
  },
  {
    question: "Por que devemos economizar água?",
    answer: "A água é essencial para a vida e para a produção de alimentos no campo."
  },
  {
    question: "O que o SENAR faz?",
    answer: "Oferece educação profissional e tecnológica no campo para jovens e agricultores."
  },
  {
    question: "Como podemos ajudar o meio ambiente?",
    answer: "Plantando árvores, não jogando lixo no chão, economizando água e energia."
  }
];

let currentIndex = 0;

const flashcard = document.getElementById('flashcard');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const currentEl = document.getElementById('current');
const totalEl = document.getElementById('total');
const progressFill = document.getElementById('progressFill');

totalEl.textContent = cards.length;

function updateCard() {
  questionEl.textContent = cards[currentIndex].question;
  answerEl.textContent = cards[currentIndex].answer;
  flashcard.classList.remove('flipped');
  currentEl.textContent = currentIndex + 1;
  
  // Atualiza a barra de progresso
  const progress = ((currentIndex + 1) / cards.length) * 100;
  progressFill.style.width = `${progress}%`;
}

function flipCard() {
  flashcard.classList.toggle('flipped');
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCard();
}

function previousCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCard();
}

// Clique no cartão para virar
document.getElementById('cardContainer').addEventListener('click', (e) => {
  if (!e.target.closest('button')) flipCard();
});

// Teclas do teclado
document.addEventListener('keydown', (e) => {
  if (e.key === " " || e.key === "Enter") flipCard();
  if (e.key === "ArrowRight") nextCard();
  if (e.key === "ArrowLeft") previousCard();
});

// Inicia o primeiro cartão
updateCard();