/**
 * Created by qile on 2017/8/14.
 */
//类型检测 typeof 一般用于值类型检测
console.log(typeof 123);//number
console.log(typeof true);//boolean
console.log(typeof "abc");//string
console.log(typeof null);//obiect
console.log(typeof undefined);//undefined
console.log(typeof {name:"Mike",age:20});//object
console.log(typeof function foo(){});//function
//typedof:(6种输出方式）：functuion（函数类型）、object（对象、数组、null）、number、string、undefined、boolean

/*
//课外思考
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);//String、Boolean

console.log(typeof Math);
console.log(typeof JSON);
*/

//类型检测 instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);//true

var b = [12,34,{},""];
console.log(b instanceof Array);//思考console.log(b instanceof Object);//true

var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);//true
//思考console.log(p1 instanceof Object);//true

