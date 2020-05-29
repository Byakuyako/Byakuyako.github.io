let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/*
*你好, 我叫 Jesse
*下面我来演示一下我的前端基础
*首先我要画一个div
**/

.box{
    border: 1px solid #857c70;
    width: 300px;
    height: 300px;
}
/*接下来把div变成一个圆
 **/

.box{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
}

/*把这个圆分为两块
 *一黑一白
 **/
.box{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*加上两个小圆点
 *同样一黑一白
 **/
.box::before{
    width: 150px;
    height: 150px;
    top: 0;
    left: 50%;
    transform: translateX(-55%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
.box::after{
    width: 150px;
    height: 150px;
    bottom: 0;
    left: 50%;
    transform: translateX(-45%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

/*这样一个太极图就画出来啦*/
`;

let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>"; //处理换行符
        } else if (string[n] === " ") {
            string2 += "&nbsp"; //处理空格
        } else {
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n); //追加文本
        window.scrollTo(0, 2000);
        html.scrollTo(0, 2000);

        if (n < string.length - 1) {
            n++;
            step();
        }
    }, 40);
};

step();
