import { handleFavourite } from "./favorites.js";

import { generateRandomeInt } from "../../utils/math.js";

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}
function displayQuote(quote) {
  const { id, text, author: quoteAuthor, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  // HTML atribute data-current-quote-id will be added
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = text;
  quoteAuthorElement.textContent = quoteAuthor;
  handleFavourite(isFavorite);
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomeInt(quotes.length);
  return quotes[randomIndex];
}
export { handleQuote };
