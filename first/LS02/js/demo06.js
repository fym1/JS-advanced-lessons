/**
 * Created by qile on 2017/8/14.
 */

var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2));//如果是非数字，则先转换为字符串，然后在转成整型 23
console.log(parseFloat("23.456xy"));//同上，结果为23.456 23.456
//注意：parseInt和parseFloat都为全局方法，即window全局对象的方法
console.log(parseInt === window.parseInt); //true
console.log(parseFloat === window.parseFloat);  //true
//思考：函数、对象属性、对象方法之间的关系
//思考：在node.js中全局对象是什么？


console.log(Math.ceil(a2));//24 进一法
console.log(Math.floor(a2));//23 去尾法
console.log(Math.round(a2));//23 四舍五入
a3 = 5e2;//指数形式 
console.log(a3);//500
console.log(typeof Math);//输出function 还是 object ？object(Math对象)
//typedof:(6种输出方式）：functuion（函数类型）、object（对象、数组、null）、number、string、undefined、boolean


//NaN
var x = Number("xis021");//试着转成Number类型
console.log(x);//NaN
isNaN(x);//true
typeof NaN;//number

console.log(Math.log(-1));//NaN 返回数的自然对数
console.log(Math.acos(2));//NaN 返回x的反余弦值
console.log(NaN === NaN);//false 


//Infinity与-Infinity
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false，非有限数
isFinite(23);//true，有限数

//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0


