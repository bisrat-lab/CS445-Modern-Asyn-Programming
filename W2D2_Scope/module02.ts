interface Iitem {
  name: string;
  type: string;
  category: string;
  price: number;
}
const item: Iitem = {
  name: "Avocado",
  type: "Fruit",
  category: "Food",
  price: 200,
};

const aaplyCop = function(i :Iitem){
    return function (discount :number){
        item.price - (0.1 * item.price)
      return function (){
          return `${i.name} price ${discount}`
      }  
    }
}
aaplyCop(item)(10).price  ===180 ;
// */
// const student = (name) => (grade) => `Name: ${name}, Grade: ${grade}`;
// student("Asaad")(10); // Name: Asaad, Grade: 10

// const student2 = function (name) {
//   return function (greade) {
//     return `Name: ${name}, Grade: ${grade}`;
//   };
// };
