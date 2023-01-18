# CSS动态样式

<!-- TOC -->
* [CSS动态样式](#css动态样式)
  * [字体图标](#字体图标)
  * [平面转换](#平面转换)
    * [位移](#位移)
    * [位移-绝对定位居中](#位移-绝对定位居中)
  * [旋转](#旋转)
    * [转换原点](#转换原点)
    * [多重转换](#多重转换)
  * [缩放](#缩放)
  * [渐变](#渐变)
  * [空间转换](#空间转换)
    * [空间转换-位移](#空间转换-位移)
    * [空间转换-透视](#空间转换-透视)
    * [空间转换-空间旋转](#空间转换-空间旋转)
    * [立体呈现](#立体呈现)
    * [空间缩放](#空间缩放)
  * [动画](#动画)
    * [animation复合属性](#animation复合属性)
    * [animation复合属性拆分](#animation复合属性拆分)
    * [逐帧动画](#逐帧动画)
    * [多组动画](#多组动画)
<!-- TOC -->

## 字体图标
处理简单的、颜色单一的图片，实现网页中简洁的图标效果。  
字体图标展示的是图标，本质是字体。  
[获取字体图标](https://www.iconfont.cn/)

使用方式：
- 引入字体图标样式表。
```html
<link rel="stylesheet" href="./iconfont.css">
```

- 调用图标对应的类名。
  - iconfont类：基本样式，包含字体的使用等。
  - icon-xxx：图标对应的类名。
```html
<span class="iconfont icon-favorites-fill"></span>
```

## 平面转换
使用transform属性实现元素的位移、旋转、缩放等效果。  

### 位移
设置属性：transform: translate(水平移动距离, 垂直移动距离);  

取值：
- 像素单位数值，正负均可。
- 百分比，参考盒子自身尺寸。
- X轴正向为右，Y轴正向为下。

使用技巧：
- 配合过渡属性使用。
- translate()如果只取一个值，表示X轴方向的移动距离。
- 单独设置某个方向的移动距离可以使用属性：translateX() 、 translateY()

```css
div {
  transition: all 0.5s;
}
div:hover {
  transform: translate(0, -50%);
}
```

### 位移-绝对定位居中
使用translate快速实现绝对定位的元素居中效果。  

实现方法：
```css
div {
  position: absolute;
  left: 50%;
  right: 50%;
  
  /*改变盒子的位置*/
  /*
  margin-left: -100px;
  margin-top: -50px;
  */
  
  /*位移*/
  transform: translate(-50%, -50%);
  
  width: 200px;
  height: 100px; 
}
```

## 旋转
使用rotate实现元素旋转效果。  

设置属性transform: rotate(角度);  

使用技巧：
- 取值正负均可。正则顺时针旋转，负则逆时针旋转。
- 角度单位是deg.

### 转换原点
盒子中心点默认是盒子原点，使用transform-origin属性改变转换原点。  

设置属性：transform-origin: 原点水平位置 原点垂直位置;  
添加给标签本身，不需要加到:hover

属性取值：
- 方位名词：left、right、top、bottom、center.
- 像素单位数值。
- 百分比。

```css
div {
  transform-origin: right bottom;
}
```

### 多重转换
使用transform复合属性实现多形态转换。  

transform: translate() rotate();

使用注意：
- 顺序颠倒将导致奇怪的效果，因为旋转会改变坐标轴向，影响了位移的方向。
- 多重转换如果涉及旋转属性，需最后使用。

```css
img {
  transform: translate(600px) rotate(720deg);
  
  /* 异常效果 */
  /*transform: rotate(720deg) translate(600px);*/
}
```

## 缩放
使用scale属性改变元素尺寸。  
设置属性：transform: scale(x轴缩放倍数, y轴缩放倍数);  

使用注意：
- 一般情况下可以只设置一个值，表示x轴和y轴等比例缩放。
- scale取值大于1表示放大，小于1表示缩放。

```css
img {
  transform: scale(1.5);
}
```

## 渐变
使用background-image属性实现渐变背景效果，渐变是多个颜色逐渐变化的视觉效果，一般用于设置盒子的背景。  
设置属性background-image: linear-gradient(颜色1, 颜色2, ...);  

```css
div {
  background-image: linear-gradient(
    pink, 
    hotpink
  );
}

/*半透明渐变*/
div {
  background-image: linear-gradient(
    transparent,
    rgba(0,0,0,.5)
  );
}
```

## 空间转换
使用transform属性实现元素在空间内的位移、旋转、缩放等效果。  

- 空间：x、y、z三条坐标系构成的一个立体空间，z轴位置与视线方向一致。

### 空间转换-位移
设置属性：
- transform: translate3d(x, y , z);
- transform: translateX();
- transform: translateY();
- transform: translateZ();

属性值（正负均可）：
- 数值 + px.
- 百分比。

使用注意：
- z轴效果与视线平行，所以直接不可见，但如果设置透视后，z轴的变化可导致元素变大或变小。

### 空间转换-透视
使用perspective属性实现透视效果。透视效果可以实现近大远小、近实远虚的效果。  

设置属性：
- perspective: 数值 + px;
- 数值一般在800 ~ 1200.
- 设置给父元素。

### 空间转换-空间旋转
使用rotate属性实现元素空间旋转效果。  

设置属性：
- transform: rotateZ();
- transform: rotateX();
- transform: rotateY();
- rotate3d(x, y, z, 角度度数);
  - 角度度数用来设置自定义旋转轴的位置及旋转的角度。
  - x, y ,z 取值为 0 ~ 1 之间。

### 立体呈现
使用transform-style: preserve-3d;属性呈现立体图形。  

transform-style: preserve-3d;使子元素处于3d空间。默认值flat，表示子元素处于2D平面。

### 空间缩放
设置属性：
- transform: scale3d(x, y, z);
- transform: scaleX(倍数);
- transform: scaleY(倍数);
- transform: scaleZ(倍数);


## 动画
使用animation属性添加动画效果。动画效果可以实现多个状态间的变化过程（重复播放、最终画面、是否暂停）。  

动画的本质是快速切换大量图片形成的具有连续性的画面，构成动画的最小单元是帧或动画帧。  

定义动画：
```css
/*使宽度从200px 变到 600px */
@keyframes 动画名称 {
  /*动画的初始状态和盒子默认样式一致，可以省略*/
  from {
    width: 200px;
  }
  to {
    width: 600px;
  }
}

/*使用百分比的方式分段设置效果，百分比指动画总时长的占比*/
@keyframes 动画名称 {
  0% {
    width: 200px
  }
  10% {
    width: 300px;
    height: 100px;
  }
  15% {
    width: 500px;
    height: 900px;
  }
  100% {
    width: 500px;
    height: 1500px;
  }
}
```

使用动画：
```css
div {
  animation: 动画名称 2s /*动画花费时长*/;
}
```

### animation复合属性
animation: 动画名称 动画时长 速度曲线 延迟时间 重复次数 动画方向 执行完毕时状态;

使用注意：
- 动画名称和动画时长必须赋值。
- 取值不分先后顺序。
- 如果取值存在两个数值，第一个表示动画时长，第二个表示延迟时间。

速度曲线取值：
- linear：默认值，线性的。
- steps(数值)：逐帧动画，数值是步数。

重复次数取值：
- 数值：重复几次。
- infinite：无限循环。

动画方向取值：
- alternate：交替的。

执行完毕时状态取值（无限循环不能使用）：
- backwards：默认值，动画停留在第一帧状态。
- forwards：动画停留在最后一帧状态。

### animation复合属性拆分
- animation-name：动画名称。
- animation-duration：动画时长。
- animation-delay：延迟时间。
- animation-fill-mode：动画执行完毕时状态。
- animation-timing-function：速度曲线。
- animation-iteration-count：重复次数。
- animation-direction：动画执行方向。
- animation-play-state：暂停动画。（paused为暂停，通常配合:hover使用）。

### 逐帧动画
使用精灵图，设置盒子尺寸为一个小图的尺寸，改变背景图的位置，添加速度曲线，帧数设置为精灵图中小图的个数，添加无限重复效果。  

### 多组动画
逐帧动画、位移动画等多个动画配合使用。实现更多的效果。  




