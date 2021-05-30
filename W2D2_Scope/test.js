// const item = {
//     name: "Avocado",
//     type: "Fruit",
//     category: "Food",
//     price: 200,
// };

// const copon = function(item){
//     return function(discount){
//           item.price - (discount/100* item.price)
//           return {item}
//     }
// }
// copon(item)(10).price

var excludeWords = ['course','awesome'];

var sentence = "This course is awesome"
const removeExcludedWords = (str, words) => {
   let sentence = '';
   const regex = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');
   sentence = str.replace(regex, "****");
   return sentence;
};
console.log(removeExcludedWords(sentence, excludeWords));