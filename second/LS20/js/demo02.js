/**
 * Created by qile on 2017/10/23.
 */
//在控制台上测试，了解两点
// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

//X* 匹配前面的模式X0或多次
var regExp = /a*b/gi; //注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

//(点号，小数点) 匹配任意单个字符，但是行结束符除外：\n \r \u2028 或 \u2029
var regExp = /a.b/gi;//注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

//test初步了解
var regExp = /a/i;
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？

/*
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
}
*/

//老师上课举例
var reg1 = /adf/gi;
var str = "abcdef adf kil";
console.log(str.match(reg1));

var str = "abcdef adf kil ad adfff";
var reg2 = /adf*/gi;
var reg3 = /a.c/gi;
console.log(str.match(reg2));
console.log(str.match(reg3));


