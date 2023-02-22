# 1·ajax.md

<!-- TOC -->
- [1·ajax.md](#1ajaxmd)
  - [官方文档](#官方文档)
  - [客户端与服务器](#客户端与服务器)
  - [URL](#url)
  - [资源请求方式](#资源请求方式)
  - [Ajax](#ajax)
    - [$.get()](#get)
<!-- TOC -->

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

## Ajax
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









