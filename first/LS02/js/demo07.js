/**
 * Created by qile on 2017/8/14.
 */
//JavaScript字符串的编码方式，Unicode字符集和UTF-16编码方式，参考链接：
//http://www.ruanyifeng.com/blog/2014/12/unicode.html

//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");
//abc
//defghi\
//'mn'

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
// str.split("_");
// str.split("_",2);
// str.concat("_opq");  结果："abc_def_ghi_jkl_mn_opq"
// str.substr(4,7);  结果："def_ghi"  第一个参数是截取的起始位置，第二个参数是截取的长度
// str.substring(4,7);  结果："def"  第一个参数表示截取的期起始位置，第二个参数表示截取的末尾位置
// str.slice(2);
// str.slice(2,5);
// str.slice(-2);
// str.slice(2,-2);
// 更多内容参见下一章节

// str.bold();
// str.link();
// str.fontcolor("red");
// str.fontsize(50);


//模式匹配，参加后续正则表达式章节
