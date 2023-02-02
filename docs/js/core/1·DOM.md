# 1·DOM

<!-- TOC -->
* [1·DOM](#1dom)
  * [简介](#简介)
  * [获取元素](#获取元素)
    * [根据id获取](#根据id获取)
    * [通过标签名获取](#通过标签名获取)
    * [H5新增方法](#h5新增方法)
    * [获取特殊元素](#获取特殊元素)
  * [事件基础](#事件基础)
    * [事件执行过程](#事件执行过程)
    * [常见事件](#常见事件)
  * [操作元素](#操作元素)
    * [改变元素内容](#改变元素内容)
    * [常用元素的属性操作](#常用元素的属性操作)
    * [表单属性](#表单属性)
    * [修改样式属性](#修改样式属性)
<!-- TOC -->

## 简介
Document Object Model，文档对象模型，W3C组织推荐的处理可扩展标记语言（HTML、XML）的标准编程接口。  
通过DOM接口可以改变网页的内容、结构和样式。  
[MDN DOM中文文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)

- 文档：一个页面就是一个文档，DOM中使用document表示。
- 元素：页面中的所有标签都是元素，DOM中使用element表示。
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示。

## 获取元素
获取页面元素可以使用以下方式：
- 根据ID获取。
- 根据标签名获取。
- 通过HTML5新增的方法获取。
- 特殊元素获取。

### 根据id获取
```js
var element = document.getElementById(id);
```
- element 是一个Element对象，如果拥有特定id的元素不存在则返回null.
- id 是大小写敏感的字符串，代表要查找元素的唯一id.

### 通过标签名获取
```js
var list = document.getElementsByTagName('tagName');
```
- getElementsByTagName()返回的是HTMLCollection，是元素对象的集合，以伪数组形式存储。
- tagName 是标签的名字，特殊字符 "*" 代表了所有元素。如果没有找到返回值是空的伪数组。

### H5新增方法
```js
var list = document.getElementsByClassName('className')
```
- className 是元素的类名，根据元素的类名查找返回HTMLCollection.

```js
var firstElement = document.querySelector('选择器');
var allElement = document.querySelectorAll('选择器');
```
- querySelector返回指定选择器的第一个元素对象。
- querySelectorAll返回指定选择器的所有元素对象。

### 获取特殊元素

```js
// 获取body元素
var bodyEle = document.body;

// 获取head元素
var headEle = document.head;

// 获取html元素
var htmlEle = document.documentElement;
```

## 事件基础
事件是可以被JS侦测到的行为。  
事件由三部分组成：事件源、事件类型、事件处理程序。

- 事件源：事件被触发的对象。
- 事件类型：事件如何被触发。
- 事件处理程序：通过一个函数赋值的方式完成。

```js
var btn = document.getElementById('btn');
btn.onclick = function () {
  alert('提交成功');
}
```

### 事件执行过程
1. 获取数据源。
2. 注册（绑定）事件。
3. 添加事件处理程序（函数赋值形式）。

### 常见事件

| 事件          | 说明       |
|-------------|----------|
| onclick     | 鼠标左键点击触发 |
| onmouseover | 鼠标经过触发   |
| onmouseout  | 鼠标离开触发   |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发   |
| onmouseup   | 鼠标弹起触发   |
| onmousedown | 鼠标按下触发   |

## 操作元素
使用DOM操作元素改变元素内容、属性 等。

### 改变元素内容
- element.innerText : 可读可写，从起始位置到终止位置的内容，去除HTML标签、空格、换行。
- element.innerHTML ： 可读可写，从起始位置到终止位置的内容，包括HTML标签，保留空格、换行。

```js
var divElement = document.getElementById('div');
var btnElement = document.getElementById('btn');

btnElement.onclick = function () {
  divElement.innerText = new Date();
}
```

### 常用元素的属性操作
- innerText、innerHTML
- src、href
- id、alt、title

```js
var imgElement = document.getElementById('img');
var btnElement = document.getElementById('btn');

btnElement.onclick = function () {
  imgElement.src  = '#';
}
```

### 表单属性
使用DOM可以操作以下表单元素的属性： type、value、checked、selected、disabled.

```js
var inputElement = document.getElementById('input');
var btnElement = document.getElementById('btn');

btnElement.onclick = function () {
  inputElement.disabled = true;
  this.disabled = true;
}
```

### 修改样式属性
使用JS修改元素的大小、颜色、位置等样式。

- element.style ： 行内样式操作，注意行内样式CSS权重较高，适合用于样式较少的情况。
- element.className ： 类名样式操作，直接修改类名，适用于样式较多的情况。

```js
var divElement = document.querySelector('.box');
divElement.onclick = function () {
  this.style.backgroundColor = 'pink';
  
  this.className = 'box red';
}
```

