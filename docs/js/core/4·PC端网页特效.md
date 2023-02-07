# 4·PC端网页特效

<!-- TOC -->
* [4·PC端网页特效](#4pc端网页特效)
  * [元素偏移量offset](#元素偏移量offset)
  * [元素可视区client](#元素可视区client)
    * [立即执行函数](#立即执行函数)
  * [元素滚动scroll](#元素滚动scroll)
  * [动画函数](#动画函数)
<!-- TOC -->

## 元素偏移量offset
offset 就是偏移量，使用 offset 系列相关属性可以动态的得到该元素的位置(偏移)、大小等。 

- 获得元素距离带有定位父元素的位置。
- 获得元素自身的大小(宽度高度)。
- 注意:返回的数值都不带单位

offset 系列常用属性：

| 属性                   | 作用                                |
|----------------------|-----------------------------------|
| element.offsetParent | 返回作为该元素带有定位的父级元素 如果父级都没有定位则返回body |
| element.offsetTop    | 返回元素相对带有定位父元素上方的偏移                |
| element.offsetLeft   | 返回元素相对带有定位父元素左边框的偏移               |
| element.offsetWidth  | 返回自身包括padding、边框、内容区的宽度，返回数值不带单位  |
| element.offsetHeight | 返回自身包括padding、边框、内容区的高度，返回数值不带单位  |

offset 和 style 的区别：

| offset                                                | style                                              |
|-------------------------------------------------------|----------------------------------------------------|
| offset可以得到任意样式表中的样式值                                  | style 只能得到行内样式表中的样式值                               |
| offset 系列获得的数值是没有单位的                                  | style.width获得的是带有单位的字符串                            |
| offsetWidth 包含padding+border+width                    | style.width获得不包含padding和border的值                   |
| offsetWidth 等属性是只读属性，只能获取不能赋值，所以想要获取元素大小位置，用offset更合适 | style.width是可读写属性，可以获取也可以赋值，所以想要给元索更改值，则需要用style改变 |

## 元素可视区client
使用 client 系列的相关属性来获取元素可视区的相关信息。动态的得到该元素的边框大小、元素大小等。

| client系列属性           | 作用                                 |
|----------------------|------------------------------------|
| element.clientTop    | 返回元素上边框的大小                         |
| element.clientLeft   | 返回元素左边框的大小                         |
| element.clientWidth  | 返回自身包括padding内容区的宽度，不含边框，返回教值不带单位  |
| element.clientHeight | 返回自身包括padding、内容区的高度，不含边框，返回数值不带单位 |

### 立即执行函数
立即执行函数相当于是在函数定义后立即调用。立即执行函数的主要作用是创建一个独立的作用域。

语法格式：
```js
// 1
(function fn1() {})();

// 2, 小括号相当于调用, 可以传入实参
(function (param) {}(p1))
```

## 元素滚动scroll
使用 scroll 系列的相关属性可以动态的得到元素的大小、滚动距离等。

| scroll系列属性           | 作用                      |
|----------------------|-------------------------|
| element.scrollTop    | 返回被卷去的上侧距离，返回数值不带单位     |
| element.scrollLeft   | 返回被卷去的左侧距离，返回数值不带单位     |
| element.scrollWidth  | 返回自身实际的宽度，不含边框，返回数值不带单位 |
| element.scrollHeight | 返回自身实际的高度，不含边框，返回数值不带单位 |

## 动画函数
核心原理:通过定时器 `setlnterval()` 不断移动盒子位置。

实现步骤:
1. 获得盒子当前位置。
2. 让盒子在当前位置加上1个移动距离。
3. 利用定时器不断重复这个操作
4. 加一个结束定时器的条件
5. 注意此元素需要添加定位，才能使用element.style.left

```js
// 封装动画函数
function animate(obj, target) {
    // 给不同的元素记录不同的定时器，将定时器方法变为元素对象的一个属性
    obj.timer = setInterval(function () {
        if (obj.offsetLeft >= target) {
          clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + 1 + 'px';
  }, 10);
};

var div = document.querySelector('div');
animate(div, 400);
```

## 缓动动画
缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来。

实现方式：
1. 让盒子每次移动的距离慢慢变小，速度就会慢慢落下来
2. 核心算法：(目标值现在的位置)/ 10 做为每次动的距离步长。
3. 停止的条件是：让当前盒子位置等于目标位置就停止定时器。

## 节流阀
节流阀目的:当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。比如防止轮播图按钮连续点击造成播放过快。

核心实现思路:利用回调函数，添加一个变量来控制。
1. 锁住函数和解锁函数开始设置一个变量 `var flag= true;`
2. `if(flag){flag=false;do something}` 关闭水龙头。
3. 利用回调函数动画执行完毕，`flag=true` 打开水龙头。