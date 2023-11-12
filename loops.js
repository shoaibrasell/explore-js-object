const numbers =[12, 54, 65, 3, 56];
// for (const number of numbers){
//   console.log(number)
// }

//1. For of can not used with objects
const Mobile = {color: "black", price: 110000, weight: "200G", model: "Iphone 14 Pro", sim: "single", };
const keys = Object.keys(Mobile);
console.log(keys);