/**
 * Created by qile on 2017/8/14.
 */
function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();

function Person(username,age){
    this.username = username;
    this.age = age;
}
Person.prototype.sayHi = function(){
    console.log(this.username);
}
//将sayHi方法通过Person.prototype.sayHi写和直接写到构造函数的区别
var person = new Person("zhangsan",30);
console.log(Person.prototype = person._proto_);
console.log(Person.prototype.constructor == Person);
console.log(Person.prototype._proto_ ==Object.prototype);
console.log(Person.prototype.constructor == Object);
console.log(Person.prototype._proto_ ==null);
var person2 = new Person("lisi",30);
console.log(person1._proto_ == person2._proto_);//true 都指向Person.prototype，即两个对象共用一个方法，节省内存空间，如果将sayHi方法直接加到构造函数中，则每构造一个对象就会有一个方法，占内存空间
//构造函数中写属性，用构造函数名.prototype.方法名写方法，让所有对象共用一个方法
console.log(person._proto_ == Person.prototype);
//prototype和_proto_的区别
//__proto__是每个对象都有的一个属性，而prototype是函数才会有的属性
//对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。


//课上练习
//定义一个车car的对象，height、width、weight
//创建一个小轿车的对象，继承相关的属性，自己具有color、seatNum
//create方法，以及构造函数形式
var car = {
    height:150,
    width:200,
    weight:2000
}
//构造函数
function Car(height,width,weight){
    this.height = height;
    this.width = width;
    this.weight = weight;
}
function createSmallCar(color,seatNum){
    this.color = color;
    this.seatNUm == seatNum;
}
createSmallCar.prototype = car;
var smallcar = new createSmallCar("red",4);
//create方法
var car = {
    height:150,
    width:200,
    weight:2000
}
var samllcar = Object.create(car);
smallcar.color = "red";
smallcar.seatNum = 4;


