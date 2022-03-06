// 取得html元素
{
    var h1 = document.getElementById("header");
    // console.log除錯與測試
    console.log(h1);
    h1.innerText = "印出文字";
    h1.style.color = "blue";

    var link = document.getElementById("link");
    console.log(link);
    link.href = "https://youtu.be/yZwlW5INhgk";
}

// event listener
{
    function handClick(element) {
        console.log(element);
        // alert("已按");
        element.innerText = "按這";
    }

    var button = document.getElementById("btn");

    button.addEventListener("click",function(){
        // alert("已按");
        this.style.color = "green";
    });

    var img = document.getElementById("img");
    img.addEventListener("mouseover",function () {
        this.src = "image.png";
    });
    img.addEventListener("mouseout",function () {
        this.src = "圖片網址.png";
    });
}

// 部落格
{
    let title = document.getElementById("title");
    let content = document.getElementById("content");
    let button = document.getElementById("button");
    let list = document.getElementById("list");

    button.addEventListener("click",function() {
        // innerHTML = 該list底下的所有html程式碼
        // ``為模板語法，可直接使用html方式撰寫
        list.innerHTML = list.innerHTML + `
        <div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>
        `;
        // 變成空字串以用於清空內容
        title.value = "";
        content.value = "";
    })
}