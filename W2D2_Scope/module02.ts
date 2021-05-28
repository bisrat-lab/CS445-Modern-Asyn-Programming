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
       const copy ={...i}
       copy.price = copy.price - (copy.price * 100 / discount)
          return copy;
        
    }
}
aaplyCop(item)(10).price===180;
 const copon = (i:Iitem) => (discount :number) => {
  const copy ={...i}
  copy.price = copy.price - (copy.price * 100 / discount)
     return copy;
 }

// */
// const student = (name) => (grade) => `Name: ${name}, Grade: ${grade}`;
// student("Asaad")(10); // Name: Asaad, Grade: 10

// const student2 = function (name) {
//   return function (greade) {
//     return `Name: ${name}, Grade: ${grade}`;
//   };
// };
