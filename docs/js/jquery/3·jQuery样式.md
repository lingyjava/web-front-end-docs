# 3·jQuery样式

<!-- TOC -->
* [3·jQuery样式](#3jquery样式)
<!-- TOC -->

## 获取样式
css()方法接收参数时只写样式名，则返回样式值。

```html
<style>
    div { 
        width: 200px; 
        height: 200px; 
        background-color: pink; 
    }
</style>
<div></div>
<script>
    console.log($("div").css("width")); // 结果为：200px
</script>
```

## 样式修改
jQuery使用css方法来修改简单元素样式；也可以操作类，修改多个样式。

设置单个样式：
css()接收的参数是属性名和属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号。
```js
$("div").css("width", "300px");   // 设置width为300px
console.log($("div").css("width")); // 结果为：300px
```

设置多个样式:
css()方法的参数可以是对象形式，方便设置多组样式。样式名和样式值用冒号隔开，样式名可以不用加引号。
```js
$("div").css({
    width: 400,
    height: 400,
    backgroundColor: "red"  // 属性名可以不加引号，但需要用驼峰法书写
})

```

## 类操作
类操作就是通过操作元素的类名进行元素样式操作，当元素样式比较复杂时，如果通过css()方法实现，需要在CSS里编写很长的代码。
通过把类名加上或者去掉就会很方便。

addClass() 方法向被选元素添加一个或多个类名， 基本语法如下所示：`$(selector).addClass(className)`，如果添加多个类，使用空格分隔类名：`$(this).addClass("current current1 …");`
```html
<style>
    .current { background-color: red; }
</style>
<div>添加类名</div>
<div class="current">删除类名</div>
<div class="current">切换类名</div>

<script>
    $("div").click(function() {
        $(this).addClass("current")
    };
</script>
```

removeClass()方法从被选元素移除一个或多个类，基本语法如下所示： `$(selector).removeClass(className)`，className参数可以传入一个或多个类名，使用空格来分隔，如果省略该参数，表示移除所有的类名。
```js
$('div').click(function () {
    $(this).removeClass('current');
});
```

toggleClass()方法用来为元素添加或移除某个类，如果类不存在，就添加该类，如果类存在，就移除该类。基本语法如下所示：`$(selector).toggleClass(className, switch)`。
className表示添加或移除的一个或多个类名，多个类名用空格分隔；switch参数用来规定只删除类或只添加类，设为true表示添加，设为false表示移除。
```js
$("div").click(function() {
    $(this).toggleClass("current");
});
```

## jQuery动画

### 显示与隐藏效果
jQuery中用于控制元素显示和隐藏效果的方法：

| 方法                               | 说明        |
|----------------------------------|-----------|
| `show([speed,[easing],[fn]])`    | 显示隐藏的匹配元素 |
| `hide([speed,[easing],[fn]])`    | 隐藏显示的匹配元素 |
| `toggle([speed],[easing],[ fn])` | 元素显示与隐藏切换 |
	
- 参数speed表示动画的速度，可设置为动画时长的毫秒值（如1000），或预定的3种速度（slow、fast和normal）.
- 参数easing表示切换效果，默认效果为swing，还可以使用linear效果。
- 参数fn表示在动画完成时执行的函数。
	
```html
<style>
    div { width: 150px; height: 300px; background-color: pink; }
</style>
<button>显示</button>
<button>隐藏</button>
<button>切换</button>
<div></div>
<script>
    $("button").eq(0).click(function() {
        $("div").show(1000, function() {
            alert("已显示");
        });
    });
    $("button").eq(1).click(function() {
        $("div").hide(1000, function() {
            alert("已隐藏");
        });
    });
    $("button").eq(2).click(function() {
        $("div").toggle(1000);
    });
</script>
```

### 滑动效果
