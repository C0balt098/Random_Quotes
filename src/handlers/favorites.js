import { currentQuote } from "../../index.js";
import quotes from "../data/quotes.js";

const favoriteBtn = document.getElementById("fav-btn");
favoriteBtn.addEventListener("click", () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);
hidebtn(favoriteBtn);

const favoritesContainer = document.getElementById("favorites-container");
///
function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  const { author, text, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, btn);

  isFavorite
    ? showFavoriteCard(text, author, container)
    : hideFavoriteCard(text);
}

function handleFavourite(isFavorite) {
  showBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}
function toggleFavoriteBtnIcon(isFavorite, element) {
  element.classList.toggle("fa", isFavorite);
  element.classList.toggle("far", !isFavorite);
}

function showBtn(btn) {
  btn.style.display = "inline-block";
}

function hidebtn(btn) {
  btn.style.display = "none";
}

function showFavoriteCard(text, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `<p>${text}</p>
      <p class="author">${author}</p>`;
  container.appendChild(favoriteCard);
}
function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { handleFavourite };
