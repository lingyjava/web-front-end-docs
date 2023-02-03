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
    * [获取自定义属性](#获取自定义属性)
    * [自定义属性](#自定义属性)
  * [节点操作](#节点操作)
    * [获取父子节点](#获取父子节点)
    * [获取兄弟节点](#获取兄弟节点)
    * [创建节点](#创建节点)
    * [删除节点](#删除节点)
    * [复制节点](#复制节点)
    * [write创建元素](#write创建元素)
    * [三种创建元素方式的区别](#三种创建元素方式的区别)
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
// 组合使用
var trElement = document.querySelector('body').querySelectorAll('.box')
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

### 获取自定义属性
获取属性值可以使用 element.属性 ， 获取自定义的属性 通过 element.getAttribute('属性名')

```js
var element = document.documentElement;
element.id
element.getAttribute('属性');
```

设置属性值，因为属性值是可读可写的， 使用 element.属性 = '属性值' ，或者 使用element.setAttribute('属性名', '属性值') 设置自定义属性的值。

移除属性：使用element.removeAttribute('属性名');

### 自定义属性
自定义属性是为了保存并使用数据，数据保存到页面中而不用保存到数据库中。

H5规定自定义属性data-开头做为属性名并赋值。

```html
<div data-index="1"></div>
```

```js
var element = document.getElementById('div');
element.setAttribute('data-index', 2)
```

H5新增使用 element.dataset.属性名 或者 element.dataset['属性名'] 获取自定义属性。  
dataset是一个集合，存储了所有以data开头的自定义属性。  
如果自定义变量由多个-链接单词，获取时使用驼峰命名法查找。
```js
var element = document.getElementById('div');
element.dataset.index;
element.dataset['index'];
element.dataset.loginName; // <div data-login-name='1'></div>
```

## 节点操作
使用节点关系获取元素，逻辑性更强。  

网页中所有内容都是节点（标签、属性、文本、注释等），在DOM中，节点使用node表示。所有节点可通过JS访问，可修改、可创建、可删除。  

节点至少拥有nodeType（节点类型）、nodeName（节点名称）、nodeValue（节点值）三个基本属性。

- 元素节点：nodeType = 1
- 属性节点：nodeType = 2
- 文本节点：nodeType = 3

### 获取父子节点
BOM树中最常见的节点关系层级：父子节点。

获取父节点（离当前元素最近，没有父节点返回null）：
```js
node.parentNode;

var node = document.querySelector('.box');
var nodes = node.parentNode;
```

获取子节点（返回包含子节点的即时更新的集合，返回值包含了所有的子节点，包括元素节点、文本节点等）：
```js
node.childNodes;
```

获取子节点（返回所有子节点，仅元素节点，使用方便）
```js
node.children;

// 获取第一个子元素
node.children[0];
// 获取最后一个子元素
node.children[this.length - 1];
```

获取第一个或最后一个子节点（包含所有节点，不方便使用）：
```js
node.firstChild;
node.lastChild;
```

获取第一个或最后一个子元素节点（存在兼容性问题，ie11）：
```js
node.firstElementChild;
node.lastElementChild;
```

### 获取兄弟节点

获取当前元素的 下一个 / 上一个 兄弟节点，找不到则返回null，包含所有节点。
```js
node.nextSibling;
node.previousSibling;
```

获取当前元素 下一个 / 上一个 兄弟元素节点，找不到则返回null，兼容性问题ie9.
```js
node.nextElementSibling;
node.previousElementSibling;
```

解决兼容性问题，封装兼容性函数：
```js
function getNextElementSibling(element) {
  var el = element;
  while (el = el.nextSibling) {
      if (el.nodeType === 1) {
          return el;
      }
  }
  return null;
}
```

### 创建节点

```js
document.createElement('tagName');
```
- document.createElement()方法创建由tagName指定的HTML元素，这些元素是动态生成的。

```js
node.appendChild(node);
```
- node.appendChild()方法将一个节点添加到指定父节点的子节点列表末尾，类似于after伪元素。

```js
node.insertBefore(node, indexNode);
```
- node.insertBefore();方法将一个节点添加到父节点指定的子节点（indexNode）之前。类似于before伪元素。

### 删除节点

```js
node.removeChild(node);
```
- node.removeChild();方法从DOM中删除一个子节点，返回删除的节点。

### 复制节点

```js
node.cloneNode();
```
- node.cloneNode();方法返回调用该方法的节点的一个副本，称为克隆节点。
- 如果括号参数为空或false，则为浅拷贝，只拷贝复制节点本身，不克隆其子节点。
- 如果括号参数为true，则为深拷贝，复制节点本身及其所有子节点。

### write创建元素
```js
document.write('<div></div>');
```
- document.write('');是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘。

### 三种创建元素方式的区别
- document.write 将内容写入页面的内容流，该方法执行时导致页面重绘。
- innerHTML 将内容写入某个DOM节点，不会导致页面全部重绘。
- innerHTML 创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂。
- createElement() 创建多个元素效率稍低，但结构更加清晰。

