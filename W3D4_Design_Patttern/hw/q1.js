const basketModule = (function () {
  let basket = [];
  return {
    upsertItem: function (values) {
      basket.push(values);
    },
    getItemCount: function () {
      return basket.length;
    },
    getTotalPrice: function () {
      let total = 0;
      basket.map((item) => {
        total += item.price;
      });
      return total;
    },
    removeItemByID: function (id) {
        let remove = basket.map(item => {
            return item.id
        }).indexOf(id);
        basket.splice(remove,1)
    },
  };
}());
basketModule.upsertItem({
  id: 18,
  name: "Coffee",
  description: "Coffee Grounds from  Ethiopia",
  price: 9.5,
  count: 1,
});
basketModule.upsertItem({
    id: 33,
    name: "Bread",
    description: "Bread from Turk",
    price: 20,
    count: 2,
  });

  console.log(basketModule.getItemCount())
  console.log(basketModule.getTotalPrice())
  basketModule.removeItemByID(33)
  console.log(basketModule.getItemCount())

let goShopping = function(){ //singlton function
    let cart = null;//instance
    let getShoppingCart = function(){ //module
        let basket =[];
        return { 
            upsertItem: function(product){
                basket = this.removeItemByID(product.id).concat(product);
            },
            getItemCount : function(){
               return basket.reduce((a,p)=>a+p.count,0);
            },
            getTotalPrice: function (){
                let cost = basket.reduce((a,p)=>a+(p.count *p.price),0);
                return Math.round(cost *100)/100;
            },
            removeItemByID: function(id){
                return basket.filter((p) => p.id !== id);
            },
            viewCart : function(){
                return {...basket};
            }
        }
    } //module pattern end 
    return {
        getCart(){ //singlton = getInstance 
            if(!cart)
            cart = getShoppingCart()
            return cart
        }
    }
}(); 

goShopping().getCart
