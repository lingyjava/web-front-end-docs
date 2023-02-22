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
jQuery中用于控制元素上滑和下滑效果的方法

| 方法                                |                   说明                   |
| ----------------------------------- | :--------------------------------------: |
| slideUp([speed,[easing],[ fn]])     |     垂直滑动显示匹配元素（向上减小）     |
| slideToggle([speed],[easing],[ fn]) | 在slideUp()和slideDown()两种效果间的切换 |
| slideDown([speed],[easing],[ fn])   |     垂直滑动显示匹配元素（向下增大）     |

### 停止动画
使用动画的过程中，如果在同一个元素上调用一个以上的动画方法，那么对这个元素来说，除了当前正在调用的动画，其他的动画将被放到效果队列中，这样就形成了动画队列。

动画队列中所有动画都是按照顺序执行的，默认只有当前一个动画执行完毕，才会执行后面的动画。为此，jQuery提供了stop()方法用于停止动画效果，通过此方法，可以让动画队列后面的动画提前执行。

stop()方法适用于所有的jQuery效果，包括元素的淡入淡出，以及自定义动画等。

stop()方法语法如下所示：
```js
$(selector).stop(stopAll, goToEnd);
// stop()方法的两个参数都是可选的。
// stopAll参数用于规定是否清除动画队列，默认是false
// goToEnd参数用于规定是否立即完成当前的动画，默认是false。

$("div").stop();        // 停止当前动画，继续下一个动画
$("div").stop(true);      // 清除div元素动画队列中的所有动画
$("div").stop(true, true);   // 停止当前动画，清除动画队列中的所有动画
$("div").stop(false, true);   // 停止当前动画，继续执行下一个动画
```

### 淡入淡出
jQuery中用于控制元素淡入和淡出效果的方法。

| 方法                                     |                    说明                    |
| ---------------------------------------- | :----------------------------------------: |
| fadeIn([speed],[easing],[ fn])           |              淡入显示匹配元素              |
| fadeOut([speed],[easing],[ fn])          |              淡出隐藏匹配元素              |
| fadeTo([[speed],opacity,[easing],[ fn]]) | 以淡入淡出方式将匹配元素调整到指定的透明度 |
| fadeToggle([speed,[easing],[ fn]])       |   在fadeIn()和fadeOut()两种效果间的切换    |

- 透明度数值，范围在0~1之间，0代表完全透明

### 自定义动画
jQuery中提供了animate()方法自定义动画。

```js
$(selector).animate(params[, speed][, easing][, fn])
// params表示想要更改的样式，以对象形式传递，样式名可以不用带引号，但如果样式名中有“-”（如border-left），需要用驼峰命名法（如borderLeft）。
// 其余参数的含义与动画方法相同。

$("div").animate({ left: 500, top: 300, opacity: .4, width: 500 }, 500);
```
