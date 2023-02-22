# 4·jQueryDOM

- [4·jQueryDOM](#4jquerydom)
  - [属性操作](#属性操作)
    - [prop方法](#prop方法)
    - [attr方法](#attr方法)
    - [data方法](#data方法)
  - [内容操作](#内容操作)
  - [元素操作](#元素操作)
    - [遍历](#遍历)
    - [创建](#创建)
    - [添加](#添加)
      - [内部添加](#内部添加)
      - [外部添加](#外部添加)
    - [删除](#删除)
  - [尺寸](#尺寸)
  - [位置](#位置)
  - [事件](#事件)
    - [事件绑定](#事件绑定)
    - [事件委派](#事件委派)
    - [事件解绑](#事件解绑)
    - [触发事件](#触发事件)
      - [事件方法触发](#事件方法触发)
      - [trigger方法触发](#trigger方法触发)
      - [triggerHandler方法触发](#triggerhandler方法触发)
    - [事件对象](#事件对象)


## 属性操作

### prop方法
prop()方法用来设置或获取元素固有属性值。元素固有属性是指元素本身自带的属性。

```js
$(selector).prop("属性名")                // 获取属性值
$(selector).prop("属性", "属性值")    // 设置属性值

$("a").prop("title", "首页");
```

### attr方法
attr()用来设置或获取元素的自定义属性，自定义属性是指用户给元素添加的非固有属性。自定义属性无法使用prop()设置和获取。

```js
$(selector).attr("属性名")            // 获取属性值
$(selector).attr("属性", "属性值")        // 设置属性值

$("div").attr("index", 3);
$("div").attr("data-index", 4);
```

### data方法
data()方法用来在指定的元素上存取数据，数据保存在内存中，并不会修改DOM元素结构。一旦页面刷新，之前存放的数据都将被移除。

```js
$(selector).data("数据名")                    // 获取数据
$(selector).data("数据名", "数据值")     // 设置数据

$("div").data("uname", "andy");
```

## 内容操作
jQuery中操作元素内容的方法，主要包括html()方法、text()方法和val()方法。

html()方法用于获取或设置元素的HTML内容，text()方法用于获取或设置元素的文本内容，val()方法用来获取或设置表单元素的value值。

| 语法          |                     说明                     |
| ------------- | :------------------------------------------: |
| html()        |         获取第一个匹配元素的HTML内容         |
| html(content) |         设置第一个匹配元素的HTML内容         |
| text()        | 获取所有匹配元素包含的文本内容组合起来的文本 |
| text(content) |          设置所有匹配元素的文本内容          |
| val()         |            获取表单元素的value值             |
| val(value)    |            设置表单元素的value值             |

## 元素操作

### 遍历
jQuery具有隐式迭代的效果，当一个jQuery对象中包含多个元素时，会对这些元素进行相同的操作。如果想要对这些元素进行遍历，可以使用jQuery提供的each()方法。

```js
$(selector).each(function(index, domEle) {
// 对每个元素进行操作
});
// each()方法会遍历$(selector)对象中的元素
// index参数是每个元素的索引号
// domEle是每个DOM元素对象,不是jQuery对象,如果要想使用jQuery方法，需要将这个DOM对象转换成为jQuery对象，即$(domEle)

$("div").each(function (index, domEle) {
 console.log(index);         // 查看索引号
 console.log(domEle);        // 查看DOM元素
 $(domEle).css("color", arr[i]);    // 对每个元素进行操作                               
});
```

### 创建
jQuery可以很方便地动态创建一个元素，直接在“$()”函数中传入一个HTML字符串即可进行创建。

```js
var li = $("<li>我是后来创建的li</li>");  // 创建元素,保存在内存中,需要利用添加元素方法，将元素添加到页面中。
```

### 添加
jQuery提供了添加元素的方法，用来为目标元素添加某个元素。添加的方式有两种，分别是内部添加和外部添加。

#### 内部添加
内部添加的方式可以实现在元素内部添加元素，并且可以放到内部的最后面或者最前面。内部添加主要通过append()和prepend()方法来实现。

```js
var li = $("<li>我是后来创建的li</li>");
$("ul").append(li);    // 内部添加并且放到内部的最后面
$("ul").prepend(li);    // 内部添加并且放到内部的最前面
```

#### 外部添加
外部添加就是把元素放入目标元素的后面或者前面，通过after()和before()方法来实现。

```js
var div = $("<div>我是后来创建的div</div>");
$(".test").after(div);   // div放入到目标元素的后面
$(".test").before(div);  // div放入到目标元素的前面
```

### 删除
删除元素分为删除匹配的元素本身、删除匹配的元素里面的子节点两种情况。

empty()方法仅能删除匹配元素的文本内容，而元素节点依然存在；remove()方法则可以同时删除匹配元素本身和文本内容。

利用html()方法可以修改元素的内容，如果在参数中传入一个空字符串，也可以实现删除元素子节点的效果，如“$("ul").html("")”。

| 语法           |                            说明                            |
| -------------- | :--------------------------------------------------------: |
| empty()        |              清空元素的内容，但不删除元素本身              |
| remove([expr]) | 清空元素的内容，并删除元素本身（可选参数expr用于筛选元素） |


```js
$("ul").remove();   // 删除匹配的元素
$("ul").empty();    // 删除匹配的元素里面的子节点
```

## 尺寸
jQuery中，尺寸方法用来获取或设置元素的宽度和高度。方法的返回值都是数字型。

常用的尺寸方法：
| 方法              |                    说明                     |
| ----------------- | :-----------------------------------------: |
| width()           |             获取或设置元素宽度              |
| height()          |             获取或设置元素高度              |
| outerWidth(true)  | 获取元素宽度（包含padding、border、margin） |
| outerHeight(true) | 获取元素高度（包含padding、border、margin） |
| innerWidth()      |         获取元素宽度（包含padding）         |
| innerHeight()     |         获取元素高度（包含padding）         |
| outerWidth()      |     获取元素宽度（包含padding、border）     |
| outerHeight()     |     获取元素高度（包含padding、border）     |

```js
$("div").width();       // 输出结果：200px
$("div").width(300);    // 设置宽度为300px
```

## 位置
jQuery操作位置的方法主要有offset()、position()、scrollTop()和scrollLeft()。

offset()方法可以获取元素的位置，返回的是一个对象，包含left和top属性，表示相对于文档的偏移坐标，和父级元素没有关系。
```js
// 获取偏移
$(".son").offset();    // 结果：top为20，left为20
$(".son").offset().top; // 结果：20
// 设置偏移
$(".son").offset({ top: 100, left: 100 });
```

position()方法用于获取元素距离父元素的位置，如果父元素没有设置定位（即CSS中的position），则获取的结果是距离文档的位置。
```js
$(".son").position().top; // 获取距离顶部的位置
$(".son").position().left; // 获取距离左侧的位置
// position()方法只能获取元素位置，不能设置元素位置。
```

scrollTop()方法用于获取或设置元素被卷去的头部距离，scrollLeft()方法用于获取或设置元素被卷去的左侧距离。
```js
// 获取元素距离页面左侧的距离
$(".container").offsetLeft();
// 设置元素距离页面顶部的距离
$(document).scrollTop(100);
```

## 事件

### 事件绑定
jQuery中，实现事件绑定有两种方式，一种是通过事件方法进行绑定，另一种是通过on()方法进行绑定。

jQuery的事件和DOM中的事件相比，省略了开头的“on”，并且，jQuery的事件方法允许为一个事件绑定多个事件处理函数，只需多次调用事件方法，传入不同的函数即可。

```js
$("div").click(function() {
    $(this).css("background", "purple");
});
$("div").mouseenter(function() {
    $(this).css("background", "skyblue");
});
```

通过on()方法绑定事件,on()方法在匹配元素上绑定一个或多个事件处理函数。
```js
element.on(events, [selector], fn)
// events表示一个或多个用空格分隔的事件类型
// fn表示回调函数

// 一次绑定一个事件
$("div").on("click", function() {
    $(this).css("background", "yellow")
});
// 一次绑定多个事件
$("div").on({
    mouseenter: function() {
        $(this).css("background", "skyblue");
    },
    click: function() {
        $(this).css("background", "purple");
    },
    mouseleave: function() {
        $(this).css("background", "blue");
    }
});
// 为不同事件绑定相同的事件处理函数
$("div").on("mouseenter mouseleave", function() {
    $(this).toggleClass("current");
});
```

### 事件委派
事件委派是指，把原本要给子元素绑定的事件，绑定到父元素上，这就表示把子元素的事件委派给父元素。
由于事件有冒泡机制，当一个元素触发事件时，可以区分发生事件的是父元素还是子元素。

事件委派是通过on()方法来实现:
```html
<ul>
    <li>我是第1个li</li>
    <li>我是第2个li</li>
</ul>
<script>
    $("ul").on("click", "li:first-child", function() {
        alert("单击了li");  // 单击第1个li会触发此事件
    });
</script>
```
click事件是绑定在父元素ul上的，但触发事件的是第1个li子元素，当子元素触发事件后，就会通过事件冒泡，执行父元素ul的事件处理程序了。

在事件委派的情况下，事件处理函数中的this表示触发事件的元素，即上述代码中的第1个li元素，并不是委派事件的ul元素。

事件委派的优势在于，可以为未来动态创建的元素绑定事件。其原理是将事件委派给父元素后，在父元素中动态创建的子元素也会拥有事件。

### 事件解绑
事件解绑使用off()方法，该方法可以移除通过on()方法添加的事件处理程序。

```js
$('p').off();          // 解除p元素上的所有事件处理程序
$('p').off('click');       // 解绑p元素上的单击事件
$('ul').off('click', 'li');   // 解绑事件委派

// 第1个参数为事件类型，表示解除单击事件，如果接收的参数为空，表示解除掉所有事件处理程序。
// 第2个参数表示解绑事件委托。
```

### 触发事件
jQuery中，触发事件有3种方式，第1种是调用事件方法；第2种是通过trigger()方法触发事件，第3种是通过triggerHandler()方法触发事件。

#### 事件方法触发
jQuery中的事件方法在调用时如果传参数，表示绑定事件，如果不传参数，表示触发事件。
```js
// 绑定事件
$("div").click(function() {
    ("hello");
});
// 触发事件
$("div").click();
```

#### trigger方法触发
使用trigger()方法可以触发指定事件。
```js
// 绑定事件
$("div").click(function() {
    alert("hello");
});
// 触发事件
$("div").trigger("click");
```

#### triggerHandler方法触发
事件方法和trigger()方法在触发事件时，都会执行元素的默认行为，而triggerHandler()方法在触发事件时不会执行元素的默认行为。
```js
$("input").on("focus", function() {
 $(this).val("你好吗");
});
$("input").triggerHandler("focus"); // 触发事件

// 此时不会触发input默认的光标闪烁
```

### 事件对象
当事件被触发时，就会有事件对象的产生，在事件处理函数中可以使用参数来接收事件对象。

```js
$("div").on("click", function(event) {
    console.log(event);
});
```