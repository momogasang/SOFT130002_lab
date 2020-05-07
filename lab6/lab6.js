/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/


function timeTest() {
    var counter = 0;
    var Day1 = new Date();
    var Minutes1 = Day1.getMinutes();
    nAdd = function () {
        var Day2 = new Date();
        var Minutes2 = Day2.getMinutes();
        var second = Day2.getSeconds()
        if (Minutes1 === Minutes2 && counter < 10) {
            setTimeout(function () {
                counter = counter + 1;
                console.log(counter);
                console.log(second);
                nAdd();
            }, 5000);
        } else if (counter === 10) {
            console.log("运行完成");
        } else {
            console.log("提前完成")
        }
    }
    return nAdd;

}

var result1 = timeTest();
nAdd();
// 2.
// 要求：
//     ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
//     ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
//     ③邮箱字符串的正则匹配的理解需写入lab文档。
//     ④telephone与mail均是字符串。
// */
function testMail(telephone, mail) {

    function isTelCode(telephone) {
        var reg = /^[1][0-9]{10}$/;//第一位以1开头，后面10位以0-9
        return reg.test(telephone);
    }



    function IsEmail(mail) {
        var reg = /^([a-zA-Z0-9_-]+)@(([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)+)/; //@前面部分的 ([^([a-zA-Z0-9_-]+) 匹配帐号 + @ 后面 (([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)+) 匹配域名部分
        var s =mail
        return reg.test(s);
    }
    var boolean1 = isTelCode(telephone);
    if (boolean1) {
        console.log("The telephone is right");
    }
    var boolean2 = IsEmail(mail);
    if (boolean2) {
        console.log("The mail is right");
    }
    if (boolean1 && !boolean2) {
        console.log("The telephone is right and the mail is wrong!");
    }
}

console.log("telephone:13916711138  " + "mail:1580248525@qq.com");
testMail("13916711138","1580248525@qq.com");
console.log("telephone:13916711138" + "mail:1580248525@.qq.co");
testMail("13916711138","1580248525@.qq.co");


/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    var words = str.split(" "); //以空格分开
    var a = "";
    var set1 = new Set();
    for (var i = 0; i < words.length - 1; i++) {
        var reg = new RegExp(words[i], "i");    //搜索找到与前一个同样的words【】，且无视大小写
        if (reg.test(words[i + 1]) && set1.size <= 10) {    //取前10个
            a = words[i] + " " + words[i + 1];
            set1.add(a);
        }
    }
    console.log(set1);
}
testRedundancy("Is is the iS is cost of of gasoline going up up");


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    var actualInput1 = new Set(actualInput);
    var result = new Set();
    for (var i = 0; i < wantInput.length; i++) {
        if (!actualInput1.has(wantInput[i])) {
            result.add(wantInput[i].toUpperCase());
        }
    }
    console.log(result);
}

testKeyBoard("7_This_is_a_test", "_hs_s_a_es");

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    var m = str.split(" ");
    var arrayObj = new Array();

    //赋值到array中
    for (var i = 0; i < m.length; i++) {
        arrayObj[i] = m[i];
    }
    // console.log(arrayObj);
    //清除开头的空格
    for (var i = 0; i < m.length; i++) {
        if (arrayObj[0] === '') {
            arrayObj.shift();
        }
        if (arrayObj[0] !== '') {
            break;
        }
    }
    // console.log(arrayObj);
    //清除末尾的空格
    var a = arrayObj.length - 1;
    // console.log(a);
    for (var i = a; a > 0; a--) {
        if (arrayObj[a] === '') {
            arrayObj.pop();
        }
        if (arrayObj[a - 1] !== '') {
            break;
        }

    }
    // console.log(arrayObj);

    // 将连续出现的空格变成一个
    for (var i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i] === '') {
            arrayObj.splice(i, 1);
        }
    }
    // console.log(arrayObj);
    //倒序输出
    var arr = new Array();
    var j = 0;
    for (var i = arrayObj.length - 1; i >= 0; i--) {
        arr[j] = arrayObj[i];
        j++;
    }
    console.log(arr);
    //输出
    console.log(arr.join(" "));
}
console.log("    hello world ");
testSpecialReverse("    hello world ");

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    var map = new Map();
    var arr = [];//存放输出的数组
    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
        var num = map.get(target - nums[i]);
        if (num !== undefined) {//如果num存在 则把num的位值get给num
            arr.push(num);
            arr.push(i);
            console.log(arr);
            arr = [];//重置
        }
    }
}
console.log("[1, 2, 3, 4, 5], 5");
twoSum([1, 2, 3, 4, 5], 5);


/*
7.
背景：

要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    var a = str;
    a = a.replace(/(.)(?=.*\1)/g, "");//替换掉重复的字符
    console.log(a.length);
}
console.log("打印最长的包含不同字符串的子字符串长度:" + "aaab1112##");
lengthOfLongestSubstring("aaab1112##");

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

//构造函数
function DevelopingCountry() {
    Country.call(this);
    this.sayHi = function () {
        console.log("Hi,i am a developing country.")
    }
}

var developingCountry = new DevelopingCountry();

//原型链
function PoorCountry() {
}

PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};
var poorCountry = new PoorCountry();
//Object.create
var DevelopedCountry = Object.create(new Country());
DevelopedCountry.sayHappy = function () {
    console.log("I am a Happy developed country.")
};
//type
developingCountry.sayHi();
poorCountry.saySad();
DevelopedCountry.sayHappy();



