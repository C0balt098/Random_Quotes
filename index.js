import quotes from "./src/quotes.js";
import {
  showFavoriteCard,
  hideFavoriteCard,
  toggleFavoriteIcon,
} from "./src/favoriteManager.js";
import { generateRandomeInt, addUniqueIds } from "./src/utils.js";
const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-fav-btn");
const favoritesContainer = document.getElementById("favorites-container");
let currentQuoteIndex;
addUniqueIds(quotes);

function generateRandomQuote() {
  const randomIndex = generateRandomeInt(quotes.length);
  const { quote, author: quoteAuthor, isFavorite } = quotes[randomIndex];
  currentQuoteIndex = randomIndex;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor;
  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn); /////
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
// generateRandomQuote();
