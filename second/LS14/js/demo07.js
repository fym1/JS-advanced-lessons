/**
 * Created by qile on 2017/8/14.
 */
//修改obj属性的特性
var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
//*定义新属性或修改原有的属性的方法：defineProperty(目标对象，需定义或修改的属性的名字，目标属性所拥有的特性)
//enumerable作用：可枚举性（enumerable）用来控制所描述的属性，是否将被包括在for...in循环之中。具体来说，如果一个属性的enumerable为false，下面三个操作不会取到该属性。
//* for..in循环
//* Object.keys方法
//* JSON.stringify方法
for(var k in obj){
    console.log(k,obj[k]);
}

//思考：如果只更改writable特性的话，enumerable特性是否被修改

