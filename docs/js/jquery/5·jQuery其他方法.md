# 5·jQuery其他方法

- [5·jQuery其他方法](#5jquery其他方法)
  - [$.extend()方法](#extend方法)
  - [$.ajax()方法](#ajax方法)


## $.extend()方法
`$.extend()`方法用来实现对象成员的扩展，它可以将一个对象的成员拷贝给另一个对象使用。

```js
$.extend([deep], target, object1, [objectN])
```

target是要拷贝的目标对象，后面可以跟多个对象（object1~objectN）。
object1表示待拷贝的第一个对象，objectN表示待拷贝的第N个对象。
当不同对象中存在相同的成员名时，后面的对象的成员会覆盖前面的对象的成员。
第1个参数deep是可选参数，如果设为true表示深拷贝，默认为false表示浅拷贝。

浅拷贝：当一个对象中包含复杂数据类型（如对象）的成员时，浅拷贝会把这个成员的引用地址拷贝给目标对象，相当于“=”赋值。
深拷贝：把obj对象的成员完全复制一份，再添加给目标对象targetObj，如果对象的成员中包含对象，会递归进行复制。

```js
$.extend(targetObj, obj); // 浅拷贝
$.extend(true, targetObj, obj); // 深拷贝
```

## $.ajax()方法
jQuery提供了$.ajax()方法，用来通过Ajax（Asynchronous JavaScript and XML，异步JavaScript和XML）技术请求服务器，获取服务器的响应结果。Ajax技术用来在浏览器中通过JavaScript向服务器发送请求，接收服务器返回的结果。

```js
$.ajax({
    type: 'GET',            // 请求方式
    url: 'server.html',        // 请求地址
    data: { id: 2, name: 'Hello' },  // 发送的数据
    success: function(msg) {     // 请求成功后执行的函数
    console.log(msg);
    }
});
 ```

- $.ajax()请求的地址受同源策略的限制，必须是相同域名、相同协议、相同端口号下的地址，否会会被浏览器拦截，在控制台中会看到错误提示。

除了$.ajax()方法，jQuery还提供了更加快捷的get()、post()和load()方法，也可以发送Ajax请求。下面通过表1列举jQuery中常用的Ajax操作方法。
| 方法                            |                     说明                     |
| ------------------------------- | :------------------------------------------: |
| $.get(url[,data][,fn][,type])   |         通过远程HTTP GET请求载入信息         |
| $.post(url[,data][,fn][, type]) |        通过远程HTTP POST请求载入信息         |
| $.getJSON(url[,data][,fn])      |         通过HTTP GET请求载入JSON数据         |
| $.getScript(url[,fn])           | 通过HTTP GET请求载入并执行一个JavaScript文件 |
| 对象.load(url[,data] [,fn])     |      载入远程HTML文件代码并插入至DOM中       |
| $.ajax(url[,options])           |           通过HTTP请求加载远程数据           |
| $.ajaxSetup(options)            |             设置全局Ajax默认选项             |

参数选项如下：
| 名称        |                               说明                               |
| ----------- | :--------------------------------------------------------------: |
| url         |                     处理Ajax请求的服务器地址                     |
| data        |               发送Ajax请求时传递的参数，字符串类型               |
| success     |                  Ajax请求成功时所触发的回调函数                  |
| type        |                 发送的HTTP请求方式，如get、post                  |
| datatype    |       期待的返回值类型，如xml、json、script或html数据类型        |
| async       |       是否异步，true表示异步，false表示同步，默认值为true        |
| cache       |      是否缓存，true表示缓存，false表示不缓存，默认值为true       |
| contentType | 请求头，默认值为application/x-www-form-urlencoded; charset=UTF-8 |
| complete    |       当服务器URL接收完Ajax请求传送的数据后触发的回调函数        |
| jsonp       |               在一个jsonp请求中重写回调函数的名称                |


```js
// $.get()方法
$.get('server.html', function(data, status) {
    console.log('服务器返回结果：' + data + '\n请求状态：' + status);
});
// $.post()方法（HBuilder内置Web服务器不支持POST方式）
$.post('server.php', { id: 1 }, function(data) {
    console.log('服务器返回结果：' + data + '\n请求状态：' + status);
});
```
