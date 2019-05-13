/**
 * Created by qile on 2017/8/14.
 */
function thisTest() {
    "use strict"//严格模式
    console.log(this);
}
thisTest();//undefined


//严格模式检测
//"use strict"
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();