/**
 * Created by qile on 2017/8/14.
 */
//call 实例1
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};

objA.test();//AA 1
objA.test.call(objB);//BB 5  相当于objB.fun()
//方法A.call（对象）；
//切换方法A的调用主体，this指向的是函数的调用主体
//方法.call(要切换的调用对象，参数1，参数2，参数3)
//方法.apply(要切换的调用对象，[参数1，参数2，参数3])

//call 实例2
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"QL"
};
bird.fly(5,6);
bird.fly.call(me,7,8);
