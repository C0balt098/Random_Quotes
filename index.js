import quotes from "./src/quotes.js";
import {
  showFavoriteCard,
  hideFavoriteCard,
  toggleFavoriteIcon,
} from "./src/favoriteManager.js";
const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-fav-btn");
const favoritesContainer = document.getElementById("favorites-container");
let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author: quoteAuthor } = randomQuote;
  toggleFavoriteBtn.style.display = "inline-block";
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor;
  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);
  toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  currentQuote.isFavorite
    ? showFavoriteCard(
        currentQuote.quote,
        currentQuote.author,
        favoritesContainer
      )
    : hideFavoriteCard(currentQuote.quote);
}
generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);
generateRandomQuote();
