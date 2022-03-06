document.write("<h2>第2種.寫在js檔</h2>");
document.write("<hr>");

// 變數
document.write("<div>");
    document.write("<h1>變數</h1>");

    // js變數，沒有類型分別
    // 只能是英文大小寫或是數字或 "$" 和 "_" 的組合
    // 開頭不能是數字
    // var為全域
    var variable = "變數值";
    var number = 50;
    var bool = true;
    let str1 = "可因執行函式被修改，但不能重新定義，作用域限大括號內{}";
    const str2 = "不能因執行函式被修改，也不能重新定義，作用域限大括號內{}，且必須被初始化定義";

    document.write("這是" + variable + "<br>");
    document.write(str1 + "<br>");
    document.write(str2 + "<br>");
document.write("</div>");
document.write("<hr>");

// 字串
document.write("<div>");
    document.write("<h1>字串</h1>");

    var str = "字串加上\"號";
    var streng = "hello world";

    document.write(str + "<br>");
    // 字串長度
    document.write(str.length + "<br>");
    // 字串變大寫
    document.write(streng.toUpperCase() + "<br>");
    // 顯示第n+1位字
    document.write(str.charAt(0) + "<br>");
    // 顯示字元在第幾位
    document.write(streng.indexOf("d") + "<br>");
    // 顯示指定字串開始與結尾
    document.write(str.substring(1,5) + "<br>");
document.write("</div>");
document.write("<hr>");

// 數字
document.write("<div>");
    document.write("<h1>數字</h1>");
    document.write(5*9 + "<br>");
    var num = 5;
    document.write(9%num + "<br>");
    // 絕對值
    var num1 = -9
    document.write(Math.abs(num1) + "<br>");
    //  找出最大值
    document.write(Math.max(2,89,516,25,48,65) + "<br>");
    // 四捨五入
    document.write(Math.round(2.5) + "<br>");
    // 次方
    document.write(Math.pow(2,5) + "<br>");
    // 根號
    document.write(Math.sqrt(64) + "<br>");
    // 隨機0~1
    document.write(Math.random() + "<br>");
    // 隨機0~10
    document.write(Math.random() * 10 + "<br>");
    // 字串轉換成數字
    var num = "53.54";
    num = parseInt(num);
    // 轉換成小數
    num = parseFloat(num);
    document.write(num + "<br>");
document.write("</div>");
document.write("<hr>");

// 陣列
document.write("<div>");
    document.write("<h1>陣列</h1>");
    var array = [10,20,30];
    var strarray = [true, 30, "陣列"];
    // 改變陣列
    array[2] = 40;
    document.write(array[0] + "<br>");
    // 陣列長度
    document.write(strarray.length + "<br>");
    // 陣列尾端再加一個值
    array.push(50);
    document.write(array.length + "<br>");
document.write("</div>");
document.write("<hr>");

// 函式
document.write("<div>");
    document.write("<h1>函式</h1>");
    function hello(name,num){
        document.write(name + "有" + num + "個函式" + "<br>");
    }
    hello("我",1);

    function add(num1,num2){
        //return後不再計算後續程式碼
        return num1 + num2;
    }
    document.write(add(2,4) + "<br>");
document.write("</div>");
document.write("<hr>");

// if
document.write("<div>");
    document.write("<h1>if</h1>");
    var condition = true;
    if (condition) {
        document.write("true將執行程式碼");
    }
document.write("</div>");
document.write("<hr>");

// 物件
// key  value
// 鍵     值
{
    document.write("<div>");
        document.write("<h1>物件</h1>");

        var object = {
            key:"鍵",
            value:12,
            bool:true,
            print_result:function() {
                // this = 函式屬於誰的，此處為object的
                //this.name = object.name
                document.write(this.bool + "<br>");
            }
        };
        document.write(object.key + "<br>");
        object.print_result();

        // 現實物件
        var object2 = {
            title:"標題",
            style:"無",
            color_rgb:123,
            // 陣列內也可有物件
            array:[
                {
                    num1:567,
                    color1:5,
                },
                {
                    num2:789,
                    color2:6,
                }
            ]
        };
    document.write("</div>");
    document.write("<hr>");
}

// while
document.write("<div>");
    document.write("<h1>while</h1>");
    var condition = 2
    while (condition<=5) {
        document.write("true" + "<br>");
        break;
    }
document.write("</div>");
document.write("<hr>");

// 密碼檢驗程式
/*document.write("<div>");
    document.write("<h1>密碼檢驗程式</h1>");
    var password = 159753;
    var input;
    var count = 0;
    var count_limit = 3;
    var exceedCount = false;

    while (password!=input && !exceedCount) {
        count++;
        if (count<=count_limit) {
            input=prompt("請輸入密碼");
        }
        else{
            exceedCount = true;
        }
    }

    if (exceedCount) {
        alert("超出輸入次數");
    }
    else if(input==password){
        alert("輸入成功");
    }
document.write("</div>");
document.write("<hr>");*/

// for
document.write("<div>");
    document.write("<h1>for</h1>");
    for (var index = 0; index < array.length; index++) {
        document.write(array[index] + "\n");
    }
document.write("</div>");
document.write("<hr>");

// 二維陣列
document.write("<div>");
    document.write("<h1>二維陣列</h1>");
    var array2 = [
        [1,2,3,50],
        [4,5,6],
        [7,8,9],
        [10,11,12]
    ];

    for (var i = 0; i < array2.length; i++){
        document.write(i+1 + "列(i)=>");
        for (var j = 0; j < array2[i].length; j++) {
            document.write(array2[i][j] + " , ");
        }
        document.write("<br>");
    }
document.write("</div>");
document.write("<hr>");

// class
document.write("<div>");
    document.write("<h1>class</h1>");

    class class1
    {
        // 建構函式
        constructor(num, int, bool)
        {
            this.num = num;
            this.int = int;
            this.bool = bool;
        }
        numfuntion()
        {
            return 100 - this.num;
        }
    } 

    // 套用該類到新變數上，像給新變數套一個模板
    var one = new class1(5,"asf",false);
    // 利用新變數的值，執行該類(class)下的函式
    document.write(one.numfuntion());

document.write("</div>");
document.write("<hr>");