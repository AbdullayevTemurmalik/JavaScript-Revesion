import { dataTypes } from "./data/data-types.js";
import { arrays } from "./data/arrays.js";
import { asyncJs } from "./data/async-js.js"; // Tartib bo'yicha uchinchi
import { domApi } from "./data/dom-api.js";
import { functions } from "./data/functions.js";
import { loops } from "./data/loops.js";
import { objects } from "./data/objects.js";
import { operators } from "./data/operators.js";
import { variables } from "./data/variables.js";
import { es6Plus } from "./data/es6-plus.js";

// Sen aytgan aniq ketma-ketlikda massivni yig'amiz
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

function displayResults(data, term = "") {
  resultsDiv.innerHTML = "";

  // Agar hech narsa yozilmagan va ma'lumot bo'sh bo'lsa
  if (term === "" && data.length === 0) {
    resultsDiv.innerHTML =
      "<p class='info-text'>Ma'lumot topish uchun menyudan tanlang yoki qidiring...</p>";
    return;
  }

  if (data.length === 0) {
    resultsDiv.innerHTML = "<p class='no-result'>Hech narsa topilmadi...</p>";
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    // Highlight funksiyasi
    const highlight = (text) => {
      if (!term || term.length < 1) return text;
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

/**
 * MENYU LOGIKASI
 */
menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    if (category === "all") {
      searchInput.value = ""; // Search'ni tozalaymiz
      displayResults(allData, " "); // "Hammasi"da barcha ma'lumotni ko'rsatamiz (term bo'sh emas)
    } else {
      searchInput.value = category; // Kategoriya nomini searchga yozish
      handleSearch(category.toLowerCase());
    }
  });
});

/**
 * SEARCH INPUT LOGIKASI
 */
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase().trim();

  // Agar qidiruv bo'sh bo'lsa "Hammasi" tugmasini active qilish
  if (term === "") {
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    document.querySelector('[data-category="all"]').classList.add("active");
    displayResults([], "");
  } else {
    handleSearch(term);
  }
});

// Sayt ochilganda ekran bo'sh turishi uchun
displayResults([], "");
