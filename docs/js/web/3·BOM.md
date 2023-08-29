# 3·BOM

<!-- TOC -->
* [3·BOM](#3bom)
  * [介绍](#介绍)
  * [window对象常见事件](#window对象常见事件)
    * [窗口加载事件](#窗口加载事件)
    * [窗口大小调整事件](#窗口大小调整事件)
  * [定时器](#定时器)
  * [this](#this)
  * [JS执行机制](#js执行机制)
  * [location对象](#location对象)
    * [url的组成](#url的组成)
    * [location常用属性](#location常用属性)
    * [location常用方法](#location常用方法)
  * [navigator对象](#navigator对象)
  * [history对象](#history对象)
<!-- TOC -->

## 介绍
BOM（Browser Object Model）：浏览器对象模型，提供了与浏览器窗口进行交互的对象，核心对象（顶层对象）是window.

BOM由一系列相关对象的集合，但是BOM缺乏标准，兼容性较差，JS的语法标准化组织是ECMA，DOM是W3C，BOM最初是Netscape浏览器标准的一部分。

BOM的构成（顶层对象window）：
- document（DOM）
- location
- navigator
- screen
- history

window对象是BOM的顶层对象：
- 既是通过JS访问浏览器窗口的接口。
- 也是全局对象，定义在全局中的变量和函数都可以通过window调用，调用时window.可以被省略。

## window对象常见事件

### 窗口加载事件
window.onload是窗口（页面）加载事件，当文档内容（包括图像、脚本文件、CSS文件等）完全加载完成会触发该事件， 调用该事件对应的事件处理函数。

因为onload事件是等页面内容全部加载完毕再去执行处理函数的，所以写到window.onload事件处理函数中的JS代码可以写在页面的任意地方。解决了JS代码从上往下依次执行导致页面结构未生成先执行JS的问题。

两种注册方式：
```js
// 1、为window注册onload事件，只能一个生效。
window.onload = function () {
  
}

// 2、为window添加事件监听器，可以多个生效。
window.addEventListener('load', function () {
  
})
```

DOMContentLoaded加载事件会在DOM加载完成时触发，这里的加载不包括CSS样式表、图片和flash动画等额外内容的加载，因此该事件的优点在于执行的时机更快，适用于页面中图片很多的情况。
当页面图片很多时，从用户访问到onload事件触发可能需要较长的时间，这时使用document.DOMContentLoaded事件更为合适，只要DOM元素加载完即可执行。
需要注意的是，该事件有兼容性问题，IE 9以上才支持。
```js
window.addEventListener('DOMContentLoaded', function () {
  
})
```

### 窗口大小调整事件
当调整window窗口大小的时候，就会触发window.onresize事件，调用事件处理函数。

两种注册方式：
```js
// 1、为window注册onresize事件，只能一个生效。
window.onresize = function () {
  
};

// 2、为window添加事件监听器，可以多个生效。
window.addEventListener('resize', function () {
  
});
```

通过窗口大小调整事件可以实现响应式布局：
```html
<body>
    <script>
        window.addEventListener('load', function () {
            var div = document.querySelector('div');
            window.addEventListener('resize', function () {
                if (window.innerHeight <= 800) {
                    div.style.display = 'none';
                } else {
                    div.style.display = 'block'
                }
            });
        });
    </script>
    <div style="width: 200px; height: 100px; background-color: pink;">div</div>
</body>
```

## 定时器
定时器就是在指定时间后执行特定操作，或者让程序代码每隔一段时间执行一次，实现间歇操作。比如轮播图效果、商品倒计时功能等。

在JS中，提供了两组方法用于定时器的实现：

| 方法              | 说明                        |
|-----------------|---------------------------|
| setTimeout()    | 在指定的毫秒数后调用函数或执行一段代码       |
| setInterval()   | 按照指定的周期（以毫秒计）来调用函数或执行一段代码 |
| clearTimeout()	 | 取消由setTimeout()方法设置的定时器   |
| clearInterval() | 取消由setInterval()设置的定时器    |
	
- setTimeout() 和 setInterval() 都可以在一个固定时间段内执行代码，不同的是前者只执行一次代码，而后者会在指定的时间后自动重复执行代码。
- 可以通过setTimeout()方法实现函数的一次调用，并且可以通过clearTimeout()来清除setTimeout()定时器。

setTimeout() 和 setInterval 语法格式：
```js
setTimeout(函数处理器, [延迟的时间毫秒数]);
setInterval(函数处理器, [延迟的时间毫秒数]);
// 时间毫秒数默认值为0

// 参数形式1：用字符串表示一段代码
setTimeout('console.log(666)', 3000);

// 参数形式2：传入一个匿名函数
setTimeout(function () {
  console.log(666);
}, 1000);

// 参数形式3：传入函数名，函数名不加小括号()，否则将立即执行。
setTimeout(callback);
function callback() {
  console.log(666);
}
```

用一个变量保存定时器的id（唯一标识）。若想要在定时器启动后，取消该定时器操作，可以将setTimeout()的返回值（定时器id）传递给clearTimeout()方法。
```js
// 在设置定时器时，保存定时器的唯一标识
var timer = setTimeout(fn, 3000);

// 如果要取消定时器，将唯一标识传递给clearTimeout()方法
clearTimeout(timer);
```

## this
this的指向在函数定义时是不确定的，在函数执行时被确定，this的最终指向一般是调用它的对象。

- 全局作用域 和 普通函数 中的this指向window.
- 方法调用中，谁调用指向谁。
- 构造函数中的this指向实例本身。

## JS执行机制
JS语言最初诞生的使命就是处理页面中用户的交互，以及操作DOM元素。所以JS一大特点就是**单线程**，既同一时间只能做一件事。单线程就导致任务需要排队执行，如果JS执行时间过长，就会导致页面渲染加载阻塞。

为了解决这个问题，利用多核CPU的运算能力，H5中提出了Web Worker标准，允许JS中创建多个线程，于是JS中就有了同步、异步。
- 同步：程序的执行顺序与任务排列顺序一致，任务排队执行。同步的任务都在主线程上执行，形成一个执行栈。
- 异步：多个任务同时进行。JS异步通过回调函数实现，异步任务有三种类型：普通事件（click、resize...）、资源加载（load、error...）、定时器（setTimeout()、setInterval()），异步任务相关的回调函数添加到消息队列中。

JS的执行机制：
1. 先执行执行栈中的同步任务。
2. 异步任务（回调函数）存入消息队列。 
3. 所有同步任务执行完毕后，按次序读取消息队列中的异步任务，异步任务结束等待状态，进行执行栈开始执行。

主线程不断地重复获取任务、执行任务、再获取任务，这种机制被称为事件循环。

## location对象

### url的组成
location对象与URL相关，在URL中，包含了网络协议、服务器的主机名、端口号、资源名称字符串、参数以及锚点：
```text
// 格式
protocol://host[:port]/path/[?query]#fragment
// 示例
http://www.example.com:80/web/index.html?a=3&b=4#res
```

| 各部分      | 说明                               |
|----------|----------------------------------|
| protocol | 网络协议，常用的如http，ftp，mailto等        |
| host     | 服务器的主机名，如www.example.com         |
| port     | 端口号，可选，省略时使用协议的默认端口，如http默认端口为80 |
| path     | 路径，如“/web/index.html”            |
| query    | 参数，键值对的形式，通过“&”符号分隔，如“a=3&b=4”   |
| fragment | 锚点，如“#res”，表示页面内部的锚点             |

### location常用属性
location对象提供的方法，可以更改当前用户在浏览器中访问的URL，实现新文档的载入、重载以及替换等功能。属性可读写。

location对象提供的search属性返回URL中的参数，通常用于在向服务器查询信息时传入一些查询条件，如页码，搜索的关键字、排序方式等。
除了search属性外，location对象还提供了其他的属性，用于获取或设置对应的URL地址的组成部分，如服务器主机名、端口号、URL协议以及完整的URL地址等。

| 属性                | 说明                          |
|-------------------|-----------------------------|
| location.search   | 返回（或设置）当前URL的查询部分（“?”之后的部分） |
| location.hash     | 返回一个URL的锚部分（从“#”开始的部分）      |
| location.host     | 返回一个URL的主机名和端口              |
| location.hostname | 返回URL的主机名                   |
| location.href     | 返回完整的URL                    |
| location.pathname | 返回URL的路径名                   |
| location.port     | 返回一个URL服务器使用的端口号            |
| location.protocol | 返回一个URL协议                   |

### location常用方法
location对象提供的用于改变URL地址的方法，所有主流的浏览器都支持。

| 方法        | 说明                    |
|-----------|-----------------------|
| assign()  | 载入一个新的文档              |
| reload()  | 重新加载当前文档              |
| replace() | 用新的文档替换当前文档，覆盖浏览器当前记录 |

- assign()方法是比较常用的方式，使用location.assign()就可以立即打开一个新的浏览器位置，并生成一条新的历史记录。接收的参数为URL地址。
- reload()方法的唯一参数，是一个布尔类型值，将其设置为true时，它会绕过缓存，从服务器上重新下载该文档，类似于浏览器中的“刷新页面”按钮。
- replace()方法作用就是会使浏览器位置改变，并且禁止在浏览器历史记录中生成新的记录，它只接受一个要导航到的URL参数，而且在调用replace()方法后，用户不能返回到前一个页面。

## navigator对象
navigator对象包含有关浏览器的信息，但是每个浏览器中的navigator对象中都有一套自己的属性。下面列举了主流浏览器中存在的属性和方法

| 名称            | 说明                          |
|---------------|-----------------------------|
| appCodeName   | 返回浏览器的内部名称                  |
| appName       | 返回浏览器的完整名称                  |
| appVersion    | 返回浏览器的平台和版本信息               |
| cookieEnabled | 返回指明浏览器中是否启用Cookie的布尔值      |
| platform      | 返回运行浏览器的操作系统平台              |
| userAgent     | 返回由客户端发送到服务器的User-Agent头部的值 |
| javaEnabled() | 指定是否在浏览器中启用Java             |

判断设备终端的平台打开不同的网页：
```js
if (navigator.userAgent.match(/(phone|pad|ios|ipad|iPhone|Android)/i)) {
    window.location.href = 'mobile/url/#'
} else {
    window.location.href = 'pc/url/#'
}
```

## history对象
BOM中提供的history对象，可以对用户在浏览器中访问过的URL历史记录进行操作。出于安全方面的考虑，history对象不能直接获取用户浏览过的URL，但可以控制浏览器实现“后退”和“前进”的功能。

| 名称        | 说明                                                                   |
|-----------|----------------------------------------------------------------------|
| length    | 返回历史列表中的网址数                                                          |
| back()    | 加载history列表中的前一个URL                                                  |
| forward() | 加载history列表中的下一个URL                                                  |
| go()      | 加载history列表中的某个具体页面，当参数值是一个负整数时，表示“后退”指定的页数；当参数值是一个正整数时，表示“前进”指定的页数。 |

