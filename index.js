// Массив цитат
const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
];
const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

// Функция генерации случайной цитаты
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex);
  const randomQuote = quotes[randomIndex];

  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();
