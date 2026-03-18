export const asyncJs = [
  {
    id: 1,
    title: "setTimeout",
    category: "Async JS",
    desc: "Ma'lum bir vaqtdan keyin funksiyani bir marta ishga tushiradi (millisekundlarda).",
    example: "setTimeout(() => {\n  console.log('2 soniya otdi');\n}, 2000);",
  },
  {
    id: 2,
    title: "setInterval",
    category: "Async JS",
    desc: "Funksiyani har ma'lum vaqt oralig'ida to'xtovsiz ishga tushirib turadi.",
    example:
      "const id = setInterval(() => {\n  console.log('Har 1 soniyada...');\n}, 1000);\n// To'xtatish: clearInterval(id);",
  },
  {
    id: 3,
    title: "Promises",
    category: "Async JS",
    desc: "Asinxron amalning muvaffaqiyatli (resolve) yoki xato (reject) bilan tugashini ifodalovchi obyekt.",
    example:
      "const myPromise = new Promise((res, rej) => {\n  let success = true;\n  if(success) res('Tayyor!');\n  else rej('Xato!');\n});",
  },
  {
    id: 4,
    title: ".then() & .catch()",
    category: "Async JS",
    desc: "Promiselar natijasini olish uchun ishlatiladi. .then natija uchun, .catch xato uchun.",
    example:
      "myPromise\n  .then(data => console.log(data))\n  .catch(err => console.error(err));",
  },
  {
    id: 5,
    title: "Async / Await",
    category: "Async JS",
    desc: "Promiselar bilan ishlashning eng zamonaviy va o'qishga qulay usuli.",
    example:
      "async function getData() {\n  const result = await myPromise;\n  console.log(result);\n}",
  },
  {
    id: 6,
    title: "Fetch API",
    category: "Async JS",
    desc: "Serverdan ma'lumot olish yoki yuborish uchun ishlatiladigan tarmoq so'rovi.",
    example:
      "fetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));",
  },
  {
    id: 7,
    title: "Try...Catch (Async)",
    category: "Async JS",
    desc: "Async/await ishlatganda xatolarni ushlash (handling) uchun qo'llaniladi.",
    example:
      "async function load() {\n  try {\n    const res = await fetch(url);\n    const data = await res.json();\n  } catch (error) {\n    console.log('Xato yuz berdi:', error);\n  }\n}",
  },
  {
    id: 8,
    title: "Promise.all()",
    category: "Async JS",
    desc: "Bir nechta promiselarni bir vaqtda ishga tushiradi va hamma natijalarni massivda qaytaradi.",
    example:
      "Promise.all([p1, p2, p3]).then(values => {\n  console.log(values);\n});",
  },
  {
    id: 9,
    title: "Event Loop",
    category: "Async JS",
    desc: "JS-ga bir vaqtning o'zida bir nechta amalni bajarishga yordam beradigan mexanizm (Call Stack va Callback Queue).",
    example:
      "// Bu nazariy tushuncha, lekin JS asinxronligini asosi hisoblanadi.",
  },
  {
    id: 10,
    title: "Callback Hell",
    category: "Async JS",
    desc: "Funksiyalar ichma-ich ko'payib ketishi natijasida kodning o'qishga qiyin bo'lib qolishi (Promiselar buni hal qiladi).",
    example:
      "getData(d => {\n  getMoreData(d, d2 => {\n    getFinalData(d2, d3 => {\n       // Bu callback hell\n    });\n  });\n});",
  },
];
