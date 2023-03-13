# 4·跨域与JSONP

- [4·跨域与JSONP](#4跨域与jsonp)
  - [同源策略](#同源策略)
  - [JSONP](#jsonp)
    - [jQuery-JSONP](#jquery-jsonp)
  - [防抖](#防抖)
  - [缓存](#缓存)
  - [节流](#节流)

## 同源策略
同源策略（Same origin policy）是浏览器的一个安全功能。
如果两个页面的协议、域名、端口都相同，那么两个页面则为同源。

同源策略限制了从同一个源加载的文档或脚本如何与另一个源的资源进行交互，这是用于隔离潜在恶意文件的重要安全机制。

不允许和非同源网站之间进行资源交互，如：
- 无法读取非同源网页的Cookie、LocalStorage、IndexedDB.
- 无法接触非同源网页的DOM.
- 无法向非同源地址发送AJAX请求。

## JSONP
要实现跨域请求最主要的两种解决方案是JSONP、CORS.
JSONP是早期出现的临时解决方案，兼容低版本IE，但是仅支持GET请求。
CORS是符合W3C标准的解决跨域请求的根本解决方案，直接GET、POST请求，不兼容低版本浏览器。

JSONP（JSON with Padding）是JSON的一种使用模式，浏览器同源策略可以拦截跨域的AJAX请求，但`script`标签中的`src`引用可以请求非同源的js脚本。
JSONP的实现原理就是通过`script`标签中的`src`属性，请求跨域的数据接口，并通过函数调用的形式接收响应数据。

原理：HTML页面中引入多个script标签视为一个script块，使用script标签引入服务器资源，服务器资源中调用回调函数并返回数据。

```js
// url:https://test.com/api/data
success({
  name: 'ly',
  age: 18
});
```

```html
<body>
  <script>
        function success(data) {
            console.log(data);
        };
  </script>

  <script src='https://test.com/api/data'>
</body>
```

### jQuery-JSONP
在jQuery框架中ajax函数也支持发起JSONP请求，只需指定dataType参数为jsonp.
jQuery框架发起的JSONP请求自动携带一个callback参数，意义为回调函数名，可以通过属性jsonpCallback修改。

```js
$.ajax({
    url: 'https://test.com',
    dataType: 'jsonp',
    jsonp: 'callback',// 默认发送的参数名
    jsonpCallback: 'success'// 默认发送的参数值
    success: function (data) { 
        console.log(data);
     }
  });
```

jQuery通过动态创建和移除script标签的方式发起JSONP数据请求，本质也是通过script标签src属性获取实现跨域获取资源。在发起JSONP请求时动态向header标签中添加一个script标签，请求成功后移除此script标签。

## 防抖
防抖策略（debounce）是当事件被触发后，延迟n秒后再执行回调，如果在n秒内又被触发，则重新计时。

输入框防抖：
```js
var timer = null;

// 防抖函数
function debounceSearch (keywords) { 
    timer = setTimeout(function () { 
        // 发起JSONP请求
        getSuggestList(keywords)
     }, 500);
 }

 // 触发事件时清空timer
 $('#input').on('keyup', function() {
    clearTimeout(timer);

    debounceSearch(keywords);
 });
```

## 缓存
将服务器返回结果保存到缓存中，在使用相同参数请求时优先使用本地缓存。

```js
// 缓存对象
var cacheObj = {};

function renderSuggestList(res) { 
    // ..处理页面逻辑

    // 将结果保存到缓存对象中
    var key = $('#input').val.trim();
    cacheObj[k] = res;
}

// 优先获取缓存
if (cacheObj[key]) {
    return renderSuggestList(cacheObj[k]);
}
```

## 节流
节流策略（throttle），可以减少一段时间内的事件触发频率。

场景：
- 鼠标连续不断地触发某个事件，在单位事件内只触发一次。
- 懒加载时监听计算机滚动条的位置，不必每次滑动都触发，可以降低计算频率。

使用节流阀标识事件是否在近期已经触发过。

```js
// 节流阀
var timer = null;

$('#btn').on('mousemove', function(e) {
    if (timer) {
        // 节流阀不为空, 不执行
        return;
    }

    timer = setTimeout(function() {
        // 页面处理逻辑

        // 还原节流阀
        timer = null;
    }, 16);
});
```