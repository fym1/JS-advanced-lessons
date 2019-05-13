/**
 * Created by qile on 2017/8/14.
 */

function foo(){}
console.log(foo); //f foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true


console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object


//思考：
console.log(typeof new Function());//function
console.log(typeof new Array());//object
console.log(typeof new Date());//object

//补充思考：
//只要是函数就可以用new Function实例化
//object是所有对象的根
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
//math不是一个函数，使用时不用实例化，直接用

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

