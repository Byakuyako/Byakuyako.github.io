const $siteList = $(".siteList");
const $lastLi = $siteList.find("li.last");
const x = localStorage.getItem("x");
const xObject = JSON.parse(x);

const hashMap = xObject || [
    {
        logo: "B",
        url: "http://js.jirengu.com/",
    },
    {
        logo: "C",
        url: "https://www.codewars.com/",
    },
    {
        logo: "J",
        url: "https://juejin.im/",
    },
    {
        logo: "S",
        url: "https://segmentfault.com/",
    },
    {
        logo: "M",
        url: "https://developer.mozilla.org/zh-CN/",
    },
    {
        logo: "V",
        url: "https://www.v2ex.com",
    },
    {
        logo: "W",
        url: "https://wangdoc.com/javascript",
    },
    {
        logo: "Z",
        url: "https://www.zhihu.com",
    },
];
// 简化url
const simplifyUrl = (url) => {
    return url
        .replace("https://", "")
        .replace("http://", "")
        .replace("www.", "")
        .replace(/\/.*/, ""); // 删除 / 开头的内容
};

const render = () => {
    $siteList.find("li:not(.last)").remove();
    hashMap.forEach((node, index) => {
        //forEach第一个参数是当前元素,第二个元素是下标
        const $li = $(`<li>
        <div class="site">
          <div class="logo">${node.logo[0]}</div>
          <div class="link">${simplifyUrl(node.url)}</div>
          <div class="close">                   
            <svg class="icon">
              <use xlink:href="#icon-close"></use>
            </svg>
          </div>
        </div>          
      </li>`).insertBefore($lastLi);
        $li.on("click", () => {
            window.open(node.url);
        });
        $(".close").on("mouseover", () => {
            $(".cloase").css("visibility", "visible");
        });

        $li.on("click", ".close", (e) => {
            e.stopPropagation(); //阻止冒泡
            console.log(hashMap);
            hashMap.splice(index, 1);
            render();
        });
    });
};

render();

$(".addButton").on("click", () => {
    let url = window.prompt("请问要添加的网址是?");

    if (url.indexOf("http") !== 0) {
        url = "https://" + url;
    }
    console.log(url);

    hashMap.push({
        logo: simplifyUrl(url)[0].toUpperCase(),
        url: url,
    });
    render();
});

//在离开页面前处理数据
window.onbeforeunload = () => {
    console.log("页面要关闭了");
    const string = JSON.stringify(hashMap);

    localStorage.setItem("x", string);
};

//绑定键盘事件
$(document).on("keypress", (e) => {
    const { key } = e;
    for (let i = 0; i < hashMap.length; i++) {
        if (hashMap[i].logo.toLowerCase() === key) {
            window.open(hashMap[i].url);
        }
    }
});

//在点击搜索框时禁用键盘事件, 保证正常输入
