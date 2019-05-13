/**
 * Created by qile on 2017/8/14.
 */
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何 name属性不可修改
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出什么？Mike
person.name = "Lucy";
console.log(person.name);//输出什么？Mike
delete person.name;
console.log(person.name);//输出什么？Mike

