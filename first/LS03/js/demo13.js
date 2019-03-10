/**
 * Created by qile on 2017/8/14.
 */
//Number构造器属性（静态属性）
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();  把数字转换为字符串，结果的小数点后有指定位数的数字
// Number.prototype.toPrecision();  规定必须被转换为指数计数法的最小位数。该参数是 1 ~ 21 之间（且包括 1 和 21）的值。有效实现允许有选择地支持更大或更小的 num。如果省略了该参数，则调用方法 toString()，而不是把数字转换成十进制的值。
// Number.prototype.toString();  把数字转换为字符串，使用指定的基数
// Number.prototype.toExponential();  把对象的值转换为指数计数法

var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4

//
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
console.log(Math.floor(3.8));//3 去尾法
console.log(Math.floor(-3.8));//-4 下舍入
console.log(Math.ceil(3.2));//4 上舍入
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3 四舍五入
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4

//其余部分参见《深入理解JS》第11章

