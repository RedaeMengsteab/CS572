const item={
    "name":"Avocado",
    "type":"Fruit",
    "category":"Food",
    "price":200
}
//Curring in JavaScript;
const applyCoupon=item=>num=>{
    item.price-=(num*0.01*item.price);
     return item;
}
console.log(applyCoupon(item)(10).price);

