export const es6Plus = [
  {
    id: 1,
    title: "Template Literals",
    category: "ES6+",
    desc: "Bektiklar (``) yordamida matn ichida o'zgaruvchilarni ${} orqali juda oson ishlatish usuli.",
    example: "const name = 'Temur';\nconsole.log(`Salom, ${name}!`);",
  },
  {
    id: 2,
    title: "Destructuring (Array)",
    category: "ES6+",
    desc: "Massiv elementlarini alohida o'zgaruvchilarga juda tez oson ajratib olish.",
    example: "const [a, b] = [10, 20];\nconsole.log(a); // 10",
  },
  {
    id: 3,
    title: "Destructuring (Object)",
    category: "ES6+",
    desc: "Obyekt xususiyatlarini kalit so'zi orqali o'zgaruvchiga chiqarib olish.",
    example:
      "const user = { name: 'Ali', age: 20 };\nconst { name, age } = user;",
  },
  {
    id: 4,
    title: "Spread Operator (...)",
    category: "ES6+",
    desc: "Massiv yoki obyekt ichidagi elementlarni 'yoyib' yuborish (nusxalash yoki birlashtirish uchun).",
    example:
      "const arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]",
  },
  {
    id: 5,
    title: "Rest Parameter (...)",
    category: "ES6+",
    desc: "Funksiyaga kelayotgan barcha qolgan argumentlarni bitta massivga yig'ib olish.",
    example: "function summ(...numbers) {\n  return numbers.length;\n}",
  },
  {
    id: 6,
    title: "Arrow Functions",
    category: "ES6+",
    desc: "Funksiyalarni yozishning qisqartirilgan va zamonaviy sintaksisi.",
    example: "const square = n => n * n;",
  },
  {
    id: 7,
    title: "Modules (Import/Export)",
    category: "ES6+",
    desc: "Kodni turli fayllarga bo'lib, bir-biriga ulash imkoniyati (biz hozir ishlatayotgan usul).",
    example: "export const data = [];\nimport { data } from './file.js';",
  },
  {
    id: 8,
    title: "Classes",
    category: "ES6+",
    desc: "Obyektga yo'naltirilgan dasturlash (OOP) uchun qulay konstruksiya.",
    example: "class Animal {\n  constructor(name) { this.name = name; }\n}",
  },
  {
    id: 9,
    title: "Object Property Shorthand",
    category: "ES6+",
    desc: "Agar kalit va o'zgaruvchi nomi bir xil bo'lsa, ularni bir marta yozish kifoya.",
    example:
      "const age = 16;\nconst user = { age }; // { age: 16 } bilan bir xil",
  },
  {
    id: 10,
    title: "Optional Chaining (?.)",
    category: "ES6+",
    desc: "Obyekt ichidagi xususiyat mavjud bo'lmasa, xato (error) bermasdan undefined qaytaradi.",
    example: "const city = user?.address?.city;",
  },
];
