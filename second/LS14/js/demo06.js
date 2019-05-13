/**
 * Created by qile on 2017/8/14.
 */
var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//原型链上有toString属性 ƒ toString() { [native code] }
//对象里面某些属性和方法是没有办法被遍历到的
//原因：？？？
for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//是否能遍历到toString？
}
//x 1
//y 2
//z 3
//*什么是原型链？
//*由于_proto_是任何对象都有的属性，而js中万物皆对象，所以会形成一条_proto_连起来的链条，地柜访问_proto_必须最终到头，并且值时null
//*当js引擎查找对象的属性时，先查找对象本身是否存在该属性，如果不存在，会在原型链上查找，但不会扎找到自身的prototype