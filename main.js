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
const mainLogo = document.getElementById("mainLogo");

/**
 * HTML teglarini xavfsiz matnga aylantirish (Kod buzilmasligi uchun)
 */
const escapeHTML = (str) => {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/**
 * Natijalarni ekranga chiqarish funksiyasi
 */
function displayResults(data, term = "") {
  resultsDiv.innerHTML = "";

  if (data.length === 0) {
    resultsDiv.innerHTML = `
      <div class="no-result" style="width:100%; text-align:center; padding: 50px;">
        <i class='bx bx-search-alt' style='font-size: 3rem; color: #64748b;'></i>
        <p style="color: #64748b; margin-top: 10px;">Hech narsa topilmadi...</p>
      </div>`;
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    // Qidirilgan so'zni bo'yash (Highlight)
    const highlight = (text) => {
      if (!term || term.trim() === "") return text;
      const regex = new RegExp(`(${term})`, "gi");
      return text.replace(regex, (match) => `<mark>${match}</mark>`);
    };

    // KARTOCKA STRUKTURASI: KOD VA NATIJA BILAN
    card.innerHTML = `
            <h3>${highlight(item.title)} <span class="badge">${item.category}</span></h3>
            <p style="color:#94a3b8; margin-bottom:15px;">${item.desc}</p>
            
            <div class="code-box" style="margin-top:20px;">
                <span style="font-size:12px; color:#94a3b8; display:block; margin-bottom:8px;">💻 JS KODI:</span>
                <pre style="background:#000; padding:20px; border-radius:12px; border:1px solid #1e293b; overflow-x:auto;"><code style="color:#fb7185; font-family:'JetBrains Mono', monospace; font-size:14px; line-height:1.5;">${escapeHTML(item.code)}</code></pre>
            </div>

            <div class="result-box" style="margin-top:20px; margin-bottom:20px;">
                <span style="font-size:12px; color:#94a3b8; display:block; margin-bottom:8px;">🚀 KONSOLDA:</span>
                <div style="background:#f8fafc; color:#020617; padding:15px; border-radius:12px; border:2px dashed #0ea5e9; min-height:40px; font-family:monospace;">
                    ${item.result}
                </div>
            </div>

            <p style="margin-top:15px; font-size:14px;"><strong>📌 Reja:</strong> ${item.reja}</p>
            <p style="font-size:14px; color:#10b981;"><strong>📝 Vazifa:</strong> ${item.vazifa}</p>
        `;
    resultsDiv.appendChild(card);
  });
}

/**
 * Qidiruv logikasi
 */
function handleSearch(term) {
  const norm = term.toLowerCase().trim();
  const filtered = allData.filter((item) => {
    return (
      item.title.toLowerCase().includes(norm) ||
      item.category.toLowerCase().includes(norm) ||
      item.desc.toLowerCase().includes(norm)
    );
  });
  displayResults(filtered, norm);
}

/**
 * Menyu tugmalari (Kategoriya filtri)
 */
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

/**
 * Qidiruv inputi logikasi
 */
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

/**
 * Logotip bosilganda reset qilish
 */
mainLogo.addEventListener("click", () => {
  searchInput.value = "";
  document.querySelector(".menu-btn.active")?.classList.remove("active");
  document.querySelector('[data-category="all"]').classList.add("active");
  displayResults(allData, "");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/**
 * SAYT OCHILGANDA ISHLAYDIGAN QISM
 */
function init() {
  const allBtn = document.querySelector('[data-category="all"]');
  if (allBtn) allBtn.classList.add("active");
  displayResults(allData, "");
}

init();
