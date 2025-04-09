import { currentQuote } from "../../index.js";

const toggleBtn = document.getElementById("toggle-fav-btn");
toggleBtn.addEventListener("click", toggleFavorite);
hidebtn(toggleBtn);

const favoritesContainer = document.getElementById("favorites-container");
function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);

  currentQuote.isFavorite
    ? showFavoriteCard(
        currentQuote.text,
        currentQuote.author,
        favoritesContainer
      )
    : hideFavoriteCard(currentQuote.text);
}

function handleFavourite(isFavorite) {
  showBtn(toggleBtn);
  toggleFavoriteIcon(isFavorite, toggleBtn);
}
function toggleFavoriteIcon(isFavorite, element) {
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
