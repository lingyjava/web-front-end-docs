# 1·AJAX简介

<!-- TOC -->
- [1·AJAX简介](#1ajax简介)
  - [官方文档](#官方文档)
  - [客户端与服务器](#客户端与服务器)
  - [URL](#url)
  - [资源请求方式](#资源请求方式)
  - [简介](#简介)
    - [$.get()](#get)
  - [form表单](#form表单)
  - [监听表单提交事件](#监听表单提交事件)
  - [serialize函数](#serialize函数)

## 官方文档
- [菜鸟教程-AJAX](https://www.runoob.com/ajax/ajax-tutorial.html)
- [jQuery-AJAX](https://www.jquery123.com/category/ajax/)

## 客户端与服务器
服务器是存放和对外提供资源的电脑。
客户端是获取和消费资源的电脑。

## URL
URL是统一资源定位符，用于标识互联网中每个资源的唯一存放位置，浏览器通过URL地址定位并访问对应的资源。

## 资源请求方式
客户端请求服务器资源时，请求方式有很多种，主要使用get和post请求。

- get请求通常用于获取服务器资源。
- post请求通常用于向服务器提交数据。

## 简介
Ajax（Asynchronous JavaScript And XML）：异步JS和XML.

在网页中使用XMLHttpRequest对象和服务器进行数据交互的方式就是Ajax.

浏览器中提供的XMLHttpRequest用户较复杂，jQuery框架对XMLHttpRequest进行了封装，提供了一系列Ajax相关的函数。
jQuery中发起Ajax请求常用的三个方法：
- $.get()
- $.post()
- $.ajax()

### $.get()
jQuery $.get() 函数功能单一，用来发起get请求获取服务器数据。

语法格式：`$.get(url, [data], [callback])`

| 参数名      | 参数类型     | 是否必选 | 说明           |
|----------|----------|------|--------------|
| url      | string   | 是    | 要请求的资源地址     |
| data     | object   | 否    | 请求资源期间要携带的参数 |
| callback | function | 否    | 请求成功时的回调函数   |

```js
$.get('http://baidu.com', function(res) {
  console.log(res); // res 是响应数据
});
```

## form表单
表单由三个基本部分组成：表单标签、表单域、表单按钮。

表单标签属性：
| 属性    |      值       | 描述                                     |
| ------- | :-----------: | ---------------------------------------- |
| action  |      URL      | 规定当提交表单时向何处发送表单数据。     |
| method  |   get、post   | 规定用于发送 form-data 的 HTTP 方法。    |
| enctype |               | 规定在发送表单数据之前如何对其进行编码。 |
| name    |               | 规定表单的名称。                         |
| target  | _blank、_self | 规定在何处打开 action URL。              |

通过表单按钮提交使跳转到action URL的行为，叫表单的同步提交，提交后页面之前的数据将会丢失。
为了解决同步提交的问题，可以使用表单采集数据，但使用AJAX异步提交数据。

## 监听表单提交事件
jQuery监听方式：
```js
$('#form1').submit(function(e) {
  alert('已监听到提交事件');
  // 阻止表单默认提交行为
  e.preventDefault();
});

$('#form2').on('submit', function(e) {
  alert('已监听到提交事件');
});
```

## serialize函数
jQuery提供的serialize()函数，快速获取表单中的数据。

```html
<form action="#" id="form">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">提交</button>
</form>
```
```js
$('#form').serialize();
// username=''&password=''
```
