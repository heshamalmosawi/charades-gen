let items = [];

fetch("data.json")
  .then(r => r.json())
  .then(data => { items = data; });

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
