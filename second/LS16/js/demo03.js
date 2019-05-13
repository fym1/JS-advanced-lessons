/**
 * Created by qile on 2017/8/14.
 */
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);
//{x: 1, y: 1, moveTo: ƒ}
//1.直接定义在对象下的方法，调用主体就是当前对象
//2.前提是没有函数的嵌套
//私有属性 闭包
var Person = function(name,age){
    var namePrivate = name;
   var agePrivate = age;
   this.showMe = function(){
       console.log(namePrivate,agePrivate);
   }
}
var p1 = new Person("Mike",23);
p1.showMe();

