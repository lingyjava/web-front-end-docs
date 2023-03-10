# 4·跨域与JSONP

- [4·跨域与JSONP](#4跨域与jsonp)
  - [同源策略](#同源策略)
  - [JSONP](#jsonp)

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

```js
success({
  name: 'ly',
  age: 18
});
```

```html
<body>
  <script>
    
</body>
```