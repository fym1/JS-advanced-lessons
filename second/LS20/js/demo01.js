/**
 * Created by qile on 2017/10/20.
 */
//正则案例 练习 查看编辑器如何使用正则
console.log("moon2xyz".replace(/o/,"ab"));//mabon2xyz
console.log("moon2xyz".replace(/o/g,"ab"));//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on

//将下列文章中 单独的大写C统一改为大写D，要求其他的c不受影响
/*
Chaude and Cold
　　A patron in Montreal cafe turned on a tap in the washroom and got scalded. "This is an outrage," he complained. "The faucet marked C gave me boiling water."
　　"But, Monsieur, C stands for chaude - French for hot. You should know that if you live in Montreal."
　　"Wait a minute," roared the patron. "The other tap is also marked C."
　　"Of course," said the manager, "It stands for cold. After all, Montreal is a bilingual city."
 */

//正则对象的创建方式一 通过字面量直接创建
var reg1 = /[bcf]at/gi;

//正则对象的创建方式二 通过RegExp构造函数来实例化正则对象
var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
var reg3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]

//正则工具
//http://www.iteye.com/news/29859
//老师上课举例
/*
    /正则表达式的文本部分/正则表达式的标识符
    [xzy]值得匹配中括号中任意的字符
    g是否全局的检索
    i表示是否忽略大小写

 */
var reg1 = /[bcf]at/gi;
var reg2 = new RegExp(/[bcf]at/,"gi");
var reg3 = new RegExp("[bcf]at","gi");
var str = "fat cat bat Fat ojiidd lppqw";
var arr = str.match(reg1);
console.log(arr);