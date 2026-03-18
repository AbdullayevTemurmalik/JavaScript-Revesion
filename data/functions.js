export const functions = [
  {
    id: 1,
    title: "Function Declaration",
    category: "Functions",
    desc: "Eng ko'p tarqalgan funksiya e'lon qilish usuli. Hoisting (tepaga ko'tarilish) xususiyatiga ega.",
    example: "function salom ber() {\n  return 'Salom!';\n}\nsalomBer();",
  },
  {
    id: 2,
    title: "Function Expression",
    category: "Functions",
    desc: "Funksiyani o'zgaruvchiga tenglash orqali e'lon qilish. E'lon qilinishidan oldin chaqirib bo'lmaydi.",
    example: "const xayr = function() {\n  return 'Xayr!';\n};",
  },
  {
    id: 3,
    title: "Arrow Functions (=>)",
    category: "Functions",
    desc: "ES6-da kirib kelgan qisqa va qulay funksiya yozish usuli. O'zining 'this' kalit so'ziga ega emas.",
    example: "const add = (a, b) => a + b;\nconsole.log(add(5, 10)); // 15",
  },
  {
    id: 4,
    title: "Parameters and Arguments",
    category: "Functions",
    desc: "Funksiyaga ma'lumot uzatish uchun ishlatiladi. Parametr - funksiya e'lonidagi nomi, argument - haqiqiy qiymat.",
    example:
      "function greet(name) { // name - parametr\n  return `Salom ${name}`;\n}\ngreet('Temur'); // 'Temur' - argument",
  },
  {
    id: 5,
    title: "Default Parameters",
    category: "Functions",
    desc: "Agar funksiyaga argument berilmasa, parametr uchun oldindan belgilangan qiymat ishlatiladi.",
    example:
      "function welcome(user = 'Mehmon') {\n  return `Xush kelibsiz, ${user}`;\n}",
  },
  {
    id: 6,
    title: "Return Keyword",
    category: "Functions",
    desc: "Funksiya bajarilgandan so'ng natijani qaytarish uchun ishlatiladi. 'return'dan keyin funksiya to'xtaydi.",
    example: "function kvadrat(son) {\n  return son * son;\n}",
  },
  {
    id: 7,
    title: "Callback Functions",
    category: "Functions",
    desc: "Boshqa bir funksiyaga argument sifatida berib yuboriladigan funksiya.",
    example:
      "function process(callback) {\n  callback();\n}\nprocess(() => console.log('Bajarildi!'));",
  },
  {
    id: 8,
    title: "Anonymous Functions",
    category: "Functions",
    desc: "Nomi bo'lmagan funksiyalar. Odatda bir marta ishlatiladigan joylarda qo'llaniladi.",
    example:
      "setTimeout(function() {\n  console.log('1 soniya otdi');\n}, 1000);",
  },
  {
    id: 9,
    title: "IIFE (Immediately Invoked Function Expression)",
    category: "Functions",
    desc: "E'lon qilingan zahoti ishga tushadigan funksiya.",
    example: "(function() {\n  console.log('Men darhol ishladim!');\n})();",
  },
  {
    id: 10,
    title: "Rest Parameter (...)",
    category: "Functions",
    desc: "Funksiyaga cheksiz miqdordagi argumentlarni massiv ko'rinishida qabul qilish imkonini beradi.",
    example:
      "function sum(...nums) {\n  return nums.reduce((a, b) => a + b);\n}\nsum(1, 2, 3, 4); // 10",
  },
];
