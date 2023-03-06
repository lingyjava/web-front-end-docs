# AJAX加强

- [AJAX加强](#ajax加强)
  - [XMLHttpRequest基本使用](#xmlhttprequest基本使用)
  - [查询字符串](#查询字符串)
  - [URL编码](#url编码)
  - [xhr-post请求](#xhr-post请求)
  - [数据交换格式](#数据交换格式)
  - [JSON对象与JS对象的互相转换](#json对象与js对象的互相转换)
  - [简单AJAX实现](#简单ajax实现)
  - [XHR Level2 新特性](#xhr-level2-新特性)
    - [设置HTTP请求时限](#设置http请求时限)

## XMLHttpRequest基本使用
XMLHttpRequest(XHR)是浏览器提供的JS对象，通过它可以请求服务器的数据资源。
AJAX函数就是基于XHR对象的封装。

使用XHR发起GET请求案例：
```js
// 1. 创建XHR对象
var xhr = new XMLHttpRequest();
// 2. 指定请求方式与URL地址
xhr.open('GET', 'https://www.baidu.com/api');
// 3. 发送请求
xhr.send();
// 4. 监听xhr对象的请求状态readyStatus , 与服务器响应状态status
xhr.onreadystatechange = function () { 
    if (xhr.readyState === 4 && xhr.status === 200) {
        xhr.responseText; // 响应数据
    }
 }
```

readyState属性，用于表示当前请求所处状态，每个请求必然处于以下状态其中一个：
| 值  | 状态             | 描述                               |
| --- | ---------------- | ---------------------------------- |
| 0   | UNSET            | XML对象被创建，尚未调用open方法    |
| 1   | OPENED           | open方法已被调用                   |
| 2   | HEADERS_RECEIVED | send方法已被调用，响应头已被接收   |
| 3   | LOADING          | 数据接收中，response中包含部分数据 |
| 4   | DONE             | 请求完成，数据传输已经完成或失败 |

## 查询字符串
查询字符串指URL末尾添加参数向服务器发送信息。
格式：将？放在URL末尾，通过参数＝值，使用&分隔多个参数。

## URL编码
URL地址中只允许出现英文字母、标点符号、数字，不能出现中文字符。
当URL中包含中文字符时，将对中文字符进行编码。
浏览器会自动对URL地址进行编码操作。

浏览器提供了URL编码与解码API：
- encodeURI(); // 编码
- decodeURI(); // 解码

## xhr-post请求

```js
// 1. 创建XHR对象
var xhr = new XMLHttpRequest();
// 2. 指定请求方式与URL地址
xhr.open('POST', 'https://www.baidu.com/api');
// 3. 设置Content-Type
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 4. 发送请求，将数据以查询字符串格式提交给服务器
xhr.send('name=ly&age=18');
// 5. 监听xhr对象的请求状态readyStatus , 与服务器响应状态status
xhr.onreadystatechange = function () { 
    if (xhr.readyState === 4 && xhr.status === 200) {
        xhr.responseText;
        // AJAX封装后返回的res
        var result = JSON.parse(xhr.responseText);
    }
}
```

## 数据交换格式
数据交换格式指服务器与客户端之间进行数据传输与交换的格式。
常用的数据交换格式有XML、JSON.

XML(EXtensible Markup Language)：可扩展标记语言。设计用来传输和存储数据，是数据的载体。
XML格式臃肿，和数据无关的代码多，体积大，传输效率低。
解析XML比较麻烦。

JSON(JavaScript Object Notation)：Java对象表示法。就是JS对象和数组的字符串表示法，本质是字符串。
JSON是轻量级的文本数据交换格式，作用与XML类似，比XML更小更快更易解析。
JSON是主流的数据交换格式。

JSON包含对象和数组两种结构。通过两个结构的相互嵌套，可以表示各种复杂的数据结构。

对象结构：表示为`{}`包含的内容，数据结构为`{key1: value1, key2: value2...}`，其中key是双引号包裹的字符串，value可以是数字、字符串、布尔值、null、数组、对象6种类型。

数组结构：表示为`[]`包含的内容。

## JSON对象与JS对象的互相转换

```js
// js对象
var obj = {
    name: 'ly',
    age: '18'
}

// json对象本质是字符串,表示js对象
var json = '{"name": "ly", "age": "18"}'

// 使用JSON.parse()方法将json字符串转换为js对象
// 将字符串转为数据对象的过程又称为反序列化
var obj = JSON.parse(json);

// 使用JSON.stringify()方法将js对象转换为json字符串
// 将数据对象转为字符串的过程又称为序列化
var json = JSON.stringify(obj);
```

## 简单AJAX实现
- [AJAX简单实现](././../../../code/js/ajax.js)

调用方式
```javascript
<script>
    var result;
    ajax({
        method: 'GET',
        url: 'https://www.baidu.com/',
        data: {
            
        },
        success: function(res) {
            console.log(res);
            result = res;
        }
    });
    console.log(result);
</script>
```

## XHR Level2 新特性
旧版XHR的缺点：
- 只支持文本数据传输，无法读取或上传文件。
- 传送和接收数据没有进度展示。

XHR Level2新概念：
- 可以设置HTTP请求时限。
- 可以使用FormData对象管理表单数据。
- 可以上传文件。
- 可以获得数据传输的进度信息。

### 设置HTTP请求时限
XHR对象增加了timeout属性，可以设置请求最长等待时间，超过时限自动停止HTTP请求。
```js
// 设置请求时限为3000毫秒
xhr.timeout = 3000;
```
与timeout属性配套的有timeout事件，用于指定回调函数。
```js
xhr.ontimeout = function(event) {
    alert('请求超时');
}
```

