/**
 * Created by qile on 2017/8/14.
 */

//闭包引入案例(思考下述两个案例的区别,那个x始终未被释放)
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//观察f1中的x变量
console.log(f3);//输出？1
console.log(f3);//输出？1

/*
//函数通过返回函数（f1（））内部定义的函数（f2（））来访问f1（）内部的局部变量x
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
//观察f1中的x变量
console.log(f3());//输出？1
console.log(f3());//输出？2
*/


/*
// 例一
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少？
console.log(inc(2));//输出多少？
inc = createInc(5);
console.log(inc(1));//输出多少？
*/

// 例二
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少？
console.log(inc(2));//输出多少？
var inc2 = createInc(5);
console.log(inc(1));//输出多少？
console.log(inc2(1));//输出多少？

/*
// 例三
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();//1
foo();//1
*/

// 例四
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//输出多少？1
a();//输出多少？2
b();//输出多少？1

//查看JavaScript权威指南（第6版）184页中的描述