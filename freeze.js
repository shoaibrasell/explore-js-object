const Mobile = {
  color: "black",
  price: 110000,
  weight: "200G",
  model: "Iphone 14 Pro",
  sim: "single",
};
const keys = Object.keys(Mobile);
// console.log(keys);
//we can derectly console the mobile value that time we get the keys and value both
const values = Object.values(Mobile);
// console.log(values);
const pair = Object.entries(Mobile);
console.log(pair);

const twoDimension = [
  ["color", "black"],
  ["price", 110000],
  ["weight", "200G"],
  ["model", "Iphone 14 Pro"],
  ["sim", "single"],
];
