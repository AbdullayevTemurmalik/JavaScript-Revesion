export const loops = [
  {
    id: 1,
    title: "for loop",
    category: "Loops",
    desc: "Eng ko'p ishlatiladigan klassik sikl. Ma'lum bir marta takrorlash uchun ishlatiladi.",
    example: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
  },
  {
    id: 2,
    title: "while loop",
    category: "Loops",
    desc: "Berilgan shart true bo'lib turguncha takrorlanadi. Shart sikl boshida tekshiriladi.",
    example: "let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}",
  },
  {
    id: 3,
    title: "do...while loop",
    category: "Loops",
    desc: "Sikl kamida bir marta ishlaydi, keyin shart tekshiriladi.",
    example: "let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 5);",
  },
  {
    id: 4,
    title: "for...of loop",
    category: "Loops",
    desc: "Massiv (Array) yoki string elementlarini birma-bir aylanib chiqish uchun eng qulay usul.",
    example:
      "const fruits = ['olma', 'banan'];\nfor (let fruit of fruits) {\n  console.log(fruit);\n}",
  },
  {
    id: 5,
    title: "for...in loop",
    category: "Loops",
    desc: "Obyektning xususiyatlarini (kalitlarini) aylanib chiqish uchun ishlatiladi.",
    example:
      "const user = { name: 'Temur', age: 16 };\nfor (let key in user) {\n  console.log(key + ': ' + user[key]);\n}",
  },
  {
    id: 6,
    title: "break",
    category: "Loops",
    desc: "Siklni muddatidan oldin butunlay to'xtatish uchun ishlatiladi.",
    example:
      "for (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i);\n}",
  },
  {
    id: 7,
    title: "continue",
    category: "Loops",
    desc: "Siklning hozirgi qadamini o'tkazib yuborib, keyingi qadamdan davom ettiradi.",
    example:
      "for (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 2 ni chiqarmaydi\n}",
  },
  {
    id: 8,
    title: "Infinite Loop",
    category: "Loops",
    desc: "Tugamaydigan sikl. Agar shart doim true bo'lsa yoki noto'g'ri yozilsa, brauzer qotib qolishi mumkin.",
    example: "// while(true) { ... } // Ehtiyot bo'ling!",
  },
  {
    id: 9,
    title: "Nested Loops",
    category: "Loops",
    desc: "Sikl ichida boshqa bir siklning kelishi.",
    example:
      "for (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    console.log(i, j);\n  }\n}",
  },
  {
    id: 10,
    title: "Array.forEach()",
    category: "Loops",
    desc: "Aslida massiv metodi, lekin sikl vazifasini bajaradi (har bir element uchun funksiya chaqiradi).",
    example: "[1, 2, 3].forEach(n => console.log(n));",
  },
];
