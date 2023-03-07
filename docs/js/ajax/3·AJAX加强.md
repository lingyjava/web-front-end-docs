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
    - [FormData对象](#formdata对象)
    - [上传文件](#上传文件)
    - [显示文件上传进度](#显示文件上传进度)
  - [jQuery高级用法](#jquery高级用法)
    - [文件上传](#文件上传)
    - [ajaxStart ajaxStop](#ajaxstart-ajaxstop)
  - [axios](#axios)
    - [axios - get post](#axios---get-post)
    - [axios函数](#axios函数)

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

### FormData对象
FormData对象可以模拟表单操作。
```js
// 1. 创建FormData对象
var fd = new FormData();

// 2.1 添加表单项
fd.append('name', 'ly');
fd.append('pwd', '123456');

// 2.2 获取表单值
var form = document.querySelector('#form');
var fd = new FormData(form);

// 3. 提交fd对象
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.baidu.com')
xhr.send(fd);
```

### 上传文件
XHR对象不仅可以发送文本信息，还可以上传文件。

UI结构:
```html
<input type="file" id="file">
<button id="upload">上传文件</button>
<img src="" alt="" width="200px" id="img">
```

```js
// 1. 获取文件
var upload = document.querySelector('#upload');
upload.addEventListener('click', function() {
    var files = document.querySelector('#file').files;
    // 验证是否上传文件
    if (files.length <= 0) {
        return alert('请上传文件');
    }

    // 追加文件参数
    var fd = new FormData();
    fd.append('avatar', files[0]);

    // 发起请求
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://www.baidu.com');
    xhr.send(fd);

    // 接收数据
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            if (data.status === 200) {
                // 上传文件成功
                document.querySelector('#img').src = 'https://www.baidu.com' + data.url;
            } else {
                console.log(data.message);
            }
        }
    }
});
```

### 显示文件上传进度
通过监听 xhr.upload.onprogress 事件获取文件上传进度。
```js
var xhr = new XMLHttpRequest();
xhr.upload.onprogress = function(e) {
    // e.lengthComputable是一个布尔值，表示当前上传资源是否具有可计算的长度
    if (e.lengthComputable) {
        // e.loaded 已传输字节
        // e.total 需传输总字节
        // 完成率
        var percentComplete = Math.ceil((e.loaded / e.total) * 100);
        $('#percent')
            // 设置进度条宽度
            .attr('style', 'width' + percentComplete + '%')
            // 显示上传进度
            .html(percentComplete + '%');
    }
}

// 监听上传完成事件
xhr.upload.onload = function() {
    $('#percent')
        // 移除上传中的类样式
        .removeClass()
        // 添加上传完成的新样式
        .addClass('className');
}
```

## jQuery高级用法

### 文件上传
```js
$.ajax({
    method: 'POST',
    url: 'https://www.baidu.com',
    data: fd, // FormData对象
    // 不修改Content-Type属性，使用fd对象的默认值
    contentType: false,
    // 不对fd对象中的数据进行url编码，将数据原样发送到服务器
    processData: false,
    success: function(res) {
        console.log(res);
    }
});
```

### ajaxStart ajaxStop
AJAX请求开始时会执行ajaxStart函数，结束时执行ajaxStop函数。
可以在函数中实现loading效果。
```
// 该函数会监听当前文档内所有的AJAX请求
$(document).ajaxStart(function() {
    $('#loading').show();
});
$(document).ajaxStop(function() {
    $('#loading').hide();
});
```

## axios
Axios是网络数据请求库，相比于XHR对象更简单易用，相比于jQuery更轻量化。
- [axios](https://axios-http.com/)

### axios - get post
使用axios发起get请求。
```js
var url = 'https://www.baidu.com';
var paramObj = {
    name: 'ly',
    age: 18
};
// 发送get请求
axios.get(url, {params: paramObj}).then(function (res) { 
    var result = res.data;
    console.log(res);
 });
// 发送post请求
 axios.post(url, paramObj).then(function(res) {
    var result = res.data;
    console.log(res);
 });
```

### axios函数
类似于ajax函数，兼容get、post请求。
```js
axios({
    method: '请求类型',
    url: '请求地址',
    data: {
        // post请求参数
    },
    params: {
        // get请求参数
    }
 }).then(function(res) {
    
 });
```
