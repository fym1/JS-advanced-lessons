/**
 * Created by qile on 2017/8/14.
 */

// Part 111111111111111111
console.log(a);
var a = 1;
console.log(a);

//上边代码等价如下 解析器眼中的代码
var a;
console.log(a);
a = 1;
console.log(a);

//思考如下代码输出什么 值类型
console.log(a,b);//输出什么undefined undefined
var b = 23;
console.log(a,b);//输出什么undefined 23
var a = b;
console.log(a,b);//输出什么23 23

//思考如下代码输出什么 引用类型
console.log(obj1,obj2);//输出什么undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//输出什么{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//输出什么{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);//输出什么{x:25} {x:25}


// Part 22222222222222222
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2


// Part 33333333333333333 见下一页PPT 同时有var和function的情况一
foo();
var foo = function(){
    console.log("foo");
};
//该种情况时，仅会对变量进行定义的提升
//思考以下代码是否会报错，写出这段代码的等价形式
console.log(foo);//输出什么
var foo = function(){
    console.log("foo");//undefined
};
foo();//是否会报错//undefined



// Part 444444444444444444
//把函数提升，把变量提升
AA();
function AA(){
    console.log("AA_1");//AA_1
}
var AA = function AA(){
    console.log("AA_2");
};
AA();//AA_2

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();