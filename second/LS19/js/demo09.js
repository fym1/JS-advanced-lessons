/**
 * Created by qile on 2017/8/14.
 */
// Date 方法参考链接
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
//Date.now() 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
//getTime() 方法返回一个时间的格林威治时间数值。
console.log((new Date()).getTime());
//Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数
console.log(Date.parse("1970-01-01"));//dateTimeString字符串转换成毫秒
console.log(Date.parse("1970-01-02"));
//Date.UTC() 方法接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。
console.log(Date.UTC(2017,9,1));//将给定的日期转换成毫秒,解释为UTC 协调世界时间


//Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date

