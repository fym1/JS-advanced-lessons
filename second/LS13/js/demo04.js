/**
 * Created by qile on 2017/8/14.
 */
/**
1. var obj1 = {
    属性名：属性值；
    方法名：方法
}
2. var obj1 = {};
   var obj2 = Object.creat(obj1);obj2上面可以访问obj1上面的属性和方法
3. function Person(){};
   var person = new Person();
 */
//创建对象 三种方法
//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
console.log(obj.show());//HI
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);//true
//*prototype是通过调用构造函数而创建的那个对象实例的原型对象。prototype是函数才有的属性

//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);//newObj的原型是obj
newObj.age = 23;
console.log(newObj.num);//10
console.log(newObj.str);//Hi
console.log(newObj.show());//Hi
console.log(newObj.age);//自有属性 23
console.log(newObj.__proto__);//{num: 10, str: "Hi", show: ƒ}
console.log(newObj.__proto__ === obj);//true
//*__proto__访问在构造函数原型中定义的属性和方法。__proto__是每个对象都有的属性，可以理解为构造器的原型

//Object.create的第二个参数，参见属性特性章节
/*
o = {};
// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);
o = Object.create(Object.prototype, {
    // foo会成为所创建对象的数据属性
    foo: {
        writable:true,
        configurable:true,
        value: "hello"
    },
    // bar会成为所创建对象的访问器属性
    bar: {
        configurable: false,
        get: function() { return 10 },
        set: function(value) {
            console.log("Setting `o.bar` to", value);
        }
    }
});
*/

//构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();

//注意：
var objStr = new Object("xxx");
console.log(typeof objStr);//object
console.log(objStr instanceof String);//true

var objNum = new Object(23);
console.log(typeof objNum);//object
console.log(objNum instanceof Number);//true

var objBoolean = new Object(true);
console.log(typeof objBoolean);//object
console.log(objBoolean instanceof Boolean);//true