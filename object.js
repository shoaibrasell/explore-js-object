//1.create object using object literals
const player = {};
player.name = "shoaib ullah";
player.age = 25;
player.bat = function () {
  console.log("Swing your bat");
};

const student ={
  name: "Shoaib Ullah Rasel",
  job:'Travelling and gamming ',
  ball:function(){
    console.log("throw the ball to me");
  }
} 


//2.object constructor
const person = new Object();
// console.log(person);


//3.object create method
const atel = Object.create(student);
// console.log(atel.name);

//4.class ES6
class Person{
  name= 'rasel';
  address = 'Rangpur,Dhaka bangladesh';
  constructor(age){
    this.age=age;
  };
}
const Person1 =new Person(100);
console.log(Person1)

//5.Function 
function Car(model, price){
  this.model = model;
  this.price = price;
}

const tesla = new Car ("Elon Mask", 46);
console.log(tesla);