export const objects = [
  {
    id: 1,
    title: "Object Literal",
    category: "Objects",
    desc: "Obyekt yaratishning eng oddiy usuli. Kalit va qiymat juftligidan iborat.",
    example: "const user = {\n  name: 'Temur',\n  age: 16\n};",
  },
  {
    id: 2,
    title: "Accessing Properties",
    category: "Objects",
    desc: "Obyekt xususiyatlariga nuqta (.) yoki qavs ([]) orqali murojaat qilish.",
    example:
      "console.log(user.name); // 'Temur'\nconsole.log(user['age']); // 16",
  },
  {
    id: 3,
    title: "Object Methods",
    category: "Objects",
    desc: "Obyekt ichidagi funksiyalar metodlar deyiladi.",
    example:
      "const car = {\n  brand: 'Tesla',\n  start: function() {\n    console.log('Vroom!');\n  }\n};",
  },
  {
    id: 4,
    title: "Object Destructuring",
    category: "Objects",
    desc: "Obyekt ichidagi qiymatlarni alohida o'zgaruvchilarga ajratib olish.",
    example: "const { name, age } = user;\nconsole.log(name); // 'Temur'",
  },
  {
    id: 5,
    title: "Object.keys()",
    category: "Objects",
    desc: "Obyektning barcha kalitlarini (keys) massiv qilib qaytaradi.",
    example: "Object.keys(user); // ['name', 'age']",
  },
  {
    id: 6,
    title: "Object.values()",
    category: "Objects",
    desc: "Obyektning barcha qiymatlarini (values) massiv qilib qaytaradi.",
    example: "Object.values(user); // ['Temur', 16]",
  },
  {
    id: 7,
    title: "Object.entries()",
    category: "Objects",
    desc: "Obyektni kalit-qiymat juftliklaridan iborat massivga aylantiradi.",
    example: "Object.entries(user); // [['name', 'Temur'], ['age', 16]]",
  },
  {
    id: 8,
    title: "Spread Operator (...) ",
    category: "Objects",
    desc: "Obyektlarni nusxalash yoki birlashtirish uchun ishlatiladi.",
    example: "const updatedUser = { ...user, city: 'Urganch' };",
  },
  {
    id: 9,
    title: "Optional Chaining (?.)",
    category: "Objects",
    desc: "Obyekt ichidagi chuqur xususiyat mavjudligini xatosiz tekshirish.",
    example: "console.log(user?.address?.city); // undefined (xato bermaydi)",
  },
  {
    id: 10,
    title: "this Keyword",
    category: "Objects",
    desc: "Metod ichida o'sha obyektning o'ziga murojaat qilish uchun ishlatiladi.",
    example:
      "const person = {\n  name: 'Ali',\n  greet() {\n    return 'Salom, ' + this.name;\n  }\n};",
  },
];
