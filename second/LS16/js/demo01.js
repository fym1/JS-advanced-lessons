/**
 * Created by qile on 2017/8/14.
 */
//1.非严格模式下1，this指向的是window对象
//2.严格模式下，this是undefined
//3.this是谁，取决于调用函数的主体
function thisTest(){
    console.log(this === window);
}
thisTest();

var a = 10,b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);
console.log(b);//依然能输出b，为什么，查看window对象b属性的属性特性
console.log(Object.defineProperty.configurable);

/*
 var point = {
 x:0,
 y:0,
 moveTo:function(x,y){
 function moveToX(x){
 this.x = x;
 };
 function moveToY(y){
 this.y = y;
 }
 moveToX(x);
 moveToY(y);
 }
 };
 */