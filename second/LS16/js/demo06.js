/**
 * Created by qile on 2017/8/14.
 */
// Part1 方法中函数嵌套 this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX();//moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);

//课上老师代码
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX(x) {
            console.log(this);//window
            this.x = x;//this绑定到了哪里？
        }
        //内部嵌套函数
        function moveToY(y) {
            this.y = y;//this绑定到了哪里？
        }
        moveToX(x);//moveToX.call(this);通过间接调用来解决
        moveToY(y);
    }
};
/*对象内部函数存在嵌套关系，内部函数的this指向是window对象 */
point.moveTo(10,10);
console.log(point);//{x: 0, y: 0, moveTo: ƒ}
console.log(window.x,window.y);//10 10


// Part2 方法中函数嵌套 this缺陷 解决办法
// 解决方案一：软绑定
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//{x: 2, y: 2, moveTo: ƒ}
console.log(window.x,window.y);//undefined undefined

//解决方案二：通过call和apply来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX.call(this);//->this.moveToX()->point.MoveToX()
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//2,0

//解决方案三：通过bind来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX.bind(point)();
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);
/*
函数.bind(对象)切换函数的调用主体
生成了一个新的函数，并且是不会立即执行的
 */
