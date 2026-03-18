export const domApi = [
  {
    id: 1,
    title: "document.getElementById()",
    category: "DOM API",
    desc: "Elementni uning ID-si orqali topish. Faqat bitta element qaytaradi.",
    example: "const title = document.getElementById('main-title');",
  },
  {
    id: 2,
    title: "document.querySelector()",
    category: "DOM API",
    desc: "CSS selektori yordamida birinchi mos kelgan elementni topadi. Eng ko'p ishlatiladigan zamonaviy usul.",
    example: "const btn = document.querySelector('.submit-btn');",
  },
  {
    id: 3,
    title: "document.querySelectorAll()",
    category: "DOM API",
    desc: "CSS selektoriga mos keladigan barcha elementlarni NodeList (massivga o'xshash) ko'rinishida qaytaradi.",
    example: "const items = document.querySelectorAll('li.active');",
  },
  {
    id: 4,
    title: "addEventListener()",
    category: "DOM API",
    desc: "Elementga biror voqeani (click, input, submit) eshituvchi funksiya biriktiradi.",
    example:
      "btn.addEventListener('click', () => {\n  console.log('Bosildi!');\n});",
  },
  {
    id: 5,
    title: "textContent & innerHTML",
    category: "DOM API",
    desc: "textContent matnni o'zgartiradi, innerHTML esa element ichiga HTML kod yozish imkonini beradi.",
    example: "el.textContent = 'Salom!';\nel.innerHTML = '<b>Qalin matn</b>';",
  },
  {
    id: 6,
    title: "style property",
    category: "DOM API",
    desc: "Elementning CSS stillarini to'g'ridan-to'g'ri JavaScript orqali o'zgartirish.",
    example: "el.style.backgroundColor = 'blue';\nel.style.fontSize = '20px';",
  },
  {
    id: 7,
    title: "classList (add, remove, toggle)",
    category: "DOM API",
    desc: "Elementning klasslari bilan ishlash: qo'shish, o'chirish yoki bor bo'lsa yo'q, yo'q bo'lsa bor qilish.",
    example: "el.classList.add('hidden');\nel.classList.toggle('active');",
  },
  {
    id: 8,
    title: "document.createElement()",
    category: "DOM API",
    desc: "Yangi HTML elementini yaratish (hali ekranda ko'rinmaydi).",
    example:
      "const newDiv = document.createElement('div');\nnewDiv.textContent = 'Yangi element';",
  },
  {
    id: 9,
    title: "appendChild() & remove()",
    category: "DOM API",
    desc: "appendChild - elementni boshqa element ichiga qo'shadi. remove - elementni o'chiradi.",
    example: "parent.appendChild(newDiv);\noldElement.remove();",
  },
  {
    id: 10,
    title: "getAttribute() & setAttribute()",
    category: "DOM API",
    desc: "Elementning atributlarini (src, href, value va h.k.) olish yoki o'zgartirish.",
    example:
      "img.setAttribute('src', 'logo.png');\nconst link = a.getAttribute('href');",
  },
];
