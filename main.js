import { dataTypes } from "./data/data-types.js";
import { arrays } from "./data/arrays.js";
import { asyncJs } from "./data/async-js.js";
import { domApi } from "./data/dom-api.js";
import { functions } from "./data/functions.js";
import { loops } from "./data/loops.js";
import { objects } from "./data/objects.js";
import { operators } from "./data/operators.js";
import { variables } from "./data/variables.js";
import { es6Plus } from "./data/es6-plus.js";

const allData = [
  ...dataTypes,
  ...arrays,
  ...asyncJs,
  ...domApi,
  ...functions,
  ...loops,
  ...objects,
  ...operators,
  ...variables,
  ...es6Plus,
];

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const menuButtons = document.querySelectorAll(".menu-btn");
const mainLogo = document.getElementById("mainLogo"); // Logotipni ham ushlab olamiz

function displayResults(data, term = "") {
  resultsDiv.innerHTML = "";

  if (data.length === 0) {
    resultsDiv.innerHTML = "<p class='no-result'>Hech narsa topilmadi...</p>";
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const highlight = (text) => {
      if (!term || term.trim() === "") return text;
      const regex = new RegExp(`(${term})`, "gi");
      return text.replace(regex, (match) => `<mark>${match}</mark>`);
    };

    card.innerHTML = `
            <h3>${highlight(item.title)} <span class="badge">${item.category}</span></h3>
            <p>${item.desc}</p>
            <pre><code>${item.example}</code></pre>
        `;
    resultsDiv.appendChild(card);
  });
}

function handleSearch(term) {
  const filtered = allData.filter((item) => {
    return (
      item.title.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.desc.toLowerCase().includes(term)
    );
  });
  displayResults(filtered, term);
}

// Menyu tugmalari logikasi
menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    if (category === "all") {
      searchInput.value = "";
      displayResults(allData, "");
    } else {
      searchInput.value = category;
      handleSearch(category.toLowerCase());
    }
  });
});

// Qidiruv logikasi
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase().trim();

  if (term === "") {
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    document.querySelector('[data-category="all"]').classList.add("active");
    displayResults(allData, "");
  } else {
    handleSearch(term);
  }
});

// Logotipni bossa hammasini qaytarish
mainLogo.addEventListener("click", () => {
  searchInput.value = "";
  document.querySelector(".menu-btn.active")?.classList.remove("active");
  document.querySelector('[data-category="all"]').classList.add("active");
  displayResults(allData, "");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/** * SAYT OCHILGANDA ISHLAYDIGAN QISM
 */
function init() {
  // 1. "Hammasi" tugmasini active qilish
  const allBtn = document.querySelector('[data-category="all"]');
  if (allBtn) allBtn.classList.add("active");

  // 2. Ma'lumotlarni sen aytgan tartibda chiqarish
  displayResults(allData, "");
}

init();
