/**
 * Created by qile on 2017/8/14.
 */

//Part 000000000
//字符串比较
console.log("A" > "a");
console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare(""));
//输出结果：false 1 0 -1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;

//Part 111111111 字符串提取
//String.prototype.charAt(pos);  返回特定索引位置
//String.prototype.charCodeAt(pos);  返回在指定的位置的字符的 Unicode 编码。
//String.prototype.slice(start,end?);  提取字符串的片断，并在新的字符串中返回被提取的部分。
//String.prototype.substr(start,length?)  从起始索引号提取字符串中指定数目的字符。
//String.prototype.substring(start,end?);  提取字符串中两个指定的索引号之间的字符。 起始值>结束值，互换位置  如果超出索引值0~str.length-1 自动截断
//String.prototype.split(separator?,limit?);  把字符串分割为字符串数组。

//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var arr6 = "abcdef".split("c");//返回数组
var arr7 = "abcdef".split("c",1);
var arr8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
console.log(str10)
var str11 = "abcdefabcdef".indexOf("d",1);//返回某个指定的字符串值在字符串中首次出现的位置。
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏,若第二个参数为负数，则不返回值

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏
//



//Part 222222222 字符串变换
//String.prototype.trim( );  去除字符串两边的空白(若字符串中间有空格则不去除)
//String.prototype.concat(str1?,str2?);  连接两个或更多字符串，并返回新的字符串。
//String.prototype.toLowerCase( );  把字符串转换为小写。
//String.prototype.toLocaleLowerCase( );  根据本地主机的语言环境把字符串转换为小写。
//String.prototype.toUpperCase( );  把字符串转换为大写。
//String.prototype.toLocaleUpperCase( );  根据本地主机的语言环境把字符串转换为大写。
var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");

//Part 444444444 与正则相关的方法 详细内容参见正则表达式章节
//String.prototype.search(regexp);
//String.prototype.match(regexp);
//String.prototype.replace(regexp);

//其余部分参见《深入理解JS》第12章