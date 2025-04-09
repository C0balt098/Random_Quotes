import { handleFavourite } from "./favorites.js";

import { generateRandomeInt } from "../utils.js";

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}
function displayQuote(quote) {
  const { text, author: quoteAuthor, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = quoteAuthor;
  handleFavourite(isFavorite);
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomeInt(quotes.length);
  return quotes[randomIndex];
}
export { handleQuote };
