export const variables = [
  {
    id: 1,
    title: "let",
    category: "Variables",
    desc: "O'zgaruvchan qiymatlar uchun ishlatiladi. Block scope-ga ega (faqat o'zi yozilgan blok ichida ko'rinadi).",
    example: "let price = 100;\nprice = 150; // Qiymatni o'zgartirsa bo'ladi",
  },
  {
    id: 2,
    title: "const",
    category: "Variables",
    desc: "O'zgarmas qiymatlar (konstanta) uchun ishlatiladi. Bir marta qiymat berilgach, uni qayta tayinlab bo'lmaydi.",
    example: "const pi = 3.14;\n// pi = 3.15; // Xato beradi",
  },
  {
    id: 3,
    title: "var",
    category: "Variables",
    desc: "Eski uslubdagi o'zgaruvchi e'lon qilish. Function scope-ga ega va hoisting xususiyati bor. Zamonaviy JSda tavsiya etilmaydi.",
    example:
      "var name = 'Ali';\nif(true) { var name = 'Vali'; }\nconsole.log(name); // 'Vali'",
  },
  {
    id: 4,
    title: "Global Scope",
    category: "Variables",
    desc: "Har qanday funksiya yoki blokdan tashqarida e'lon qilingan o'zgaruvchi. Dasturning hamma joyida ko'rinadi.",
    example: "let globalVar = 'Men hamma joydaman';",
  },
  {
    id: 5,
    title: "Block Scope",
    category: "Variables",
    desc: "Faqat jingalak qavslar { } ichida ko'rinadigan o'zgaruvchilar (let va const).",
    example:
      "if(true) {\n  let blockVar = 'Sir';\n}\n// console.log(blockVar); // Xato!",
  },
  {
    id: 6,
    title: "Hoisting",
    category: "Variables",
    desc: "O'zgaruvchi va funksiyalarni e'lon qilishdan oldin ishlatish mexanizmi. 'var' bilan e'lon qilinganlar undefined qaytaradi.",
    example: "console.log(x); // undefined\nvar x = 5;",
  },
  {
    id: 7,
    title: "Variable Naming Rules",
    category: "Variables",
    desc: "Nomlash qoidalari: harf, $ yoki _ bilan boshlanishi kerak. Raqam bilan boshlanishi mumkin emas.",
    example: "let _user; let $price; // To'g'ri\n// let 1user; // Xato!",
  },
  {
    id: 8,
    title: "Camel Case",
    category: "Variables",
    desc: "JavaScript-da o'zgaruvchilarni nomlashning standart usuli. Birinchi so'z kichik, keyingilari katta harf bilan.",
    example: "let userFirstName = 'TemurMalik';",
  },
  {
    id: 9,
    title: "Re-declaration",
    category: "Variables",
    desc: "'var'ni qayta e'lon qilsa bo'ladi, lekin 'let' va 'const'ni bir xil nom bilan qayta e'lon qilib bo'lmaydi.",
    example: "let x = 1;\n// let x = 2; // Xato!",
  },
  {
    id: 10,
    title: "Temporal Dead Zone (TDZ)",
    category: "Variables",
    desc: "'let' va 'const' e'lon qilinishidan oldin ularga murojaat qilib bo'lmaydigan vaqt oralig'i.",
    example: "// console.log(a); // ReferenceError\nlet a = 10;",
  },
];
