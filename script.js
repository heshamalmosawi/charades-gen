const items = [
  "The Lion King",
  "Inception",
  "Titanic",
  "The Matrix",
  "Forrest Gump",
  "Breaking Bad",
  "Stranger Things",
  "The Office",
  "Game of Thrones",
  "Friends",
  "Jurassic Park",
  "Star Wars",
  "The Godfather",
  "Back to the Future",
  "E.T. the Extra-Terrestrial",
  "The Shawshank Redemption",
  "Pulp Fiction",
  "The Dark Knight",
  "Schindler's List",
  "Fight Club",
];

const titleEl = document.getElementById("title");
const cardEl = document.getElementById("card");
const btnEl = document.getElementById("draw-btn");

function pick() {
  const choice = items[Math.floor(Math.random() * items.length)];
  cardEl.classList.remove("flip");
  void cardEl.offsetWidth;
  cardEl.classList.add("flip");
  setTimeout(() => {
    titleEl.textContent = choice;
  }, 250);
}

btnEl.addEventListener("click", pick);
