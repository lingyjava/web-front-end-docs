# 1·jQuery简介

<!-- TOC -->
* [1·jQuery简介](#1jquery简介)
  * [介绍](#介绍)
  * [引入jQuery](#引入jquery)
  * [网页加载事件](#网页加载事件)
  * [jQuery对象](#jquery对象)
<!-- TOC -->

## 介绍
jQuery是一个快速、简洁的JavaScript库。
jQuery封装了JavaScript常用的功能代码，使用jQuery可以快速地完成JavaScript中的DOM操作等常见的开发需求。
jQuery的出现，极大地帮助前端开发人员提高了开发速度。

- [jQuery官网](https://jquery.com/)
- [jQuery中文文档](https://www.jquery123.com/)

jQuery具有如下特点。
- jQuery是一个轻量级的脚本，其代码非常小巧。
- 语法简洁易懂，学习速度快，文档丰富。
- 支持CSS1~CSS3定义的属性和选择器。
- 跨浏览器，支持的浏览器包括IE6~IE11和FireFox、Chrome等。
- 实现了JavaScript脚本和HTML代码的分离，便于后期编辑和维护。
- 插件丰富，可以通过插件扩展更多功能。

## 引入jQuery
将jQuery文件下载后，在HTML中使用`<script>`标签引入即可。
或者从一些CDN（内容分发网络）获取jQuery文件，可以无需下载直接引入。

```html
<!-- 方式1：引入本地下载的jQuery -->
<script src="jquery-3.3.1.min.js"></script>
<!-- 方式2：通过CDN(内容分发网络)引入jQuery -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

## 网页加载事件
使用jQuery时， jQuery代码需要写在要操作的DOM元素的后面，确保DOM元素已经加载后，才可以用jQuery进行操作。否则代码不会生效。

如果一定要将jQuery代码写在DOM元素的前面，则可以使用网页加载事件来实现，在页面DOM加载完成后执行代码。

```js
// 语法1（简写形式）
$(function() {
 // 页面DOM加载后执行的代码
});
// 语法2（完整形式）
$(document).ready(function() {
 // 页面DOM加载完成后执行的代码
});
```

虽然jQuery的加载事件和DOM中的window.onload类似，但也有不同之处。

| 对比项  | window.onload                     | $(document).ready()             |
|------|-----------------------------------|---------------------------------|
| 执行时机 | 必须等待网页中的所有内容加载完成后（包括外部元素，如图片）才能执行 | 网页中的所有DOM绘制完成后就执行（可能关联内容并未加载完成） |
| 编写个数 | 不能编写多个                            | 能够编写多个，依次执行                     |
| 简化写法 | 无                                 | $()                             |

## jQuery对象
将jQuery引入后，在全局作用域下会新增“$”和“jQuery”两个全局变量，这两个变量引用的是同一个对象，称为jQuery顶级对象。
在代码中可以使用jQuery或者$.

```js
// 使用“$”  
$(function () {   
  $("div").hide();  
});  

// 使用“jquery” 
jQuery(function () {  
  jQuery("div").hide(); 
}); 
```

jQuery顶级对象类似一个构造函数，用来创建jQuery实例对象（简称jQuery对象），但它不需要使用new进行实例化，它内部会自动进行实例化，返回实例化后的对象。
jQuery的功能有很多，但使用方式很简单，一种方式是为构造函数传入不同的参数，来完成不同的功能，另一种方式是调用jQuery的静态方法。

```js
// 创建jQuery对象，语法为“$(参数)”
console.log($("div"));   // 创建div元素的jQuery对象

// 调用静态方法，语法为“$.方法名()”
console.log($.trim(" a ")); // 利用trim()方法去掉字符串两端的空白字符
```

DOM对象是用原生JavaScript的DOM操作获取的对象，jQuery对象是通过jQuery方式获取到的对象。这两种对象的使用方式不同，不能混用。
```js
// DOM对象
var myDiv = document.querySelector('div');
myDiv.hide();        // 错误写法

// jQuery对象
var div = $("div");
div.style.display = "none"; // 错误写法
```

jQuery对象实际上是对DOM对象进行了包装，也就是将DOM对象保存在了jQuery对象中，因此通过jQuery可以获取DOM对象，有两种方式。
```js
// 从jQuery对象中取出DOM对象
$("div")[0];    // 方式1
$("div").get(0);  // 方式2

// 取出DOM对象后就可以用DOM方式操作元素
$("div")[0].style.display = "none";
```
- 由于一个jQuery对象中可以包含多个DOM对象，所以在取出DOM对象时需要加上索引（从0开始），0表示第1个DOM对象。

DOM对象也可以转换成jQuery对象，其方式是将DOM对象作为$()函数的参数传入，该函数就会返回jQuery对象。
```js
var myDiv = document.querySelector('div'); // 获取DOM对象
var div = $(myDiv);             // 转换成jQuery对象
div.hide();                 // 调用jQuery对象的方法
```