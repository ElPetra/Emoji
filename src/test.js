let data = [
  {
    title: "100",
    symbol: "💯",
    keywords:
      "hundred points symbol symbol wow wow win win perfect perfect parties parties",
  },
  {
    title: "1234",
    symbol: "🔢",
    keywords: "input symbol for numbers symbol",
  },
  {
    title: "Grin",
    symbol: "😀",
    keywords: "grinning face happy smiley emotion emotion",
  },
  {
    title: "Grimacing",
    symbol: "😬",
    keywords: "grimacing face silly smiley emotion emotion selfie selfie",
  },
];

const filterArr = data.filter((el) => el.title == 100);

// let word = "numbers";
// data.filter((el) => {
//   let newArr = el.keywords.split(" ");
//   if (
//     newArr.includes(word.toLowerCase()) ||
//     el.title.includes(word.toLowerCase())
//   ) {
//     console.log(el);
//   }
// });

let word = "1234";
let dataNew = data.filter(el => el.keywords.includes(word.toLowerCase()) || el.title.includes(word.toLowerCase())) 
    console.log(dataNew);

// let arr = [1, 2, 3, 0, -1]
// let arrNew = arr.filter(el => el < 0)
// console.log(arrNew);