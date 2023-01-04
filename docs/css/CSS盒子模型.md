# CSS盒子模型

<!-- TOC -->
* [CSS盒子模型](#css盒子模型)
  * [盒子模型介绍](#盒子模型介绍)
  * [内容的宽度和高度](#内容的宽度和高度)
  * [边框](#边框)
    * [边框-单方向](#边框-单方向)
  * [内边距](#内边距)
  * [盒子尺寸](#盒子尺寸)
  * [自动内减](#自动内减)
  * [外边距](#外边距)
    * [外边距单方向](#外边距单方向)
  * [清除默认盒子模型样式](#清除默认盒子模型样式)
  * [外边距折叠合并](#外边距折叠合并)
  * [外边距折叠塌陷](#外边距折叠塌陷)
  * [行内元素内外边距问题](#行内元素内外边距问题)
<!-- TOC -->

## 盒子模型介绍
页面中每一个标签都是一个盒子，浏览器渲染网页时，将网页中的每个元素看作是一个矩形区域。在CSS中可以设置盒子的一些属性，
包括：内容区域（content）、内边距区域（padding）、边框区域（border）、外边距区域（margin）。

## 内容的宽度和高度
使用width/height属性设置盒子内容区域的大小。  
取值：数字 + px
```css
div {
  width: 300px;
  height: 400px;
}
```

## 边框
属性名：border（bd）  
属性值：粗细（border-width） 线条样式（border-style） 颜色（border-color）。复合属性，单个取值的连写，取值之间空格隔开，不分先后顺序。  

取值方式：
- border-width：数值 + px
- border-style：solid（实线）、dashed（虚线）、dotted（点线）
- border-color：颜色取值（#000、pink...）

```css
div {
  border: 5px solid pink;
}
```

### 边框-单方向
只给盒子某个方向单独设置边框。  
属性名：border-方位名词  
属性值：同border取值。  
方位名词：left（左）、right（右）、top（上）、bottom（下）

## 内边距
内边距是盒子内部与内容区域的距离。  
属性名：padding  

属性取值：
- 数值 + px ，取一个值，同时添加四个方向的内边距。
- 数值 + px ，取四个值，作为复合属性使用，添加 上、右、下、左 方向的内边距。
- 数值 + px ，取三个值，作为复合属性使用，添加 上、左右、下 方向的内边距。
- 数值 + px ，取两个值，作为复合属性使用，添加 上下、左右 方向的内边距。（多取值时从上开始顺时针转一圈，熟练不够时算上对面）

```css
div {
  padding: 10px 20px 30px 40px;
}
```

## 盒子尺寸
边框和内边距会撑开盒子尺寸，盒子尺寸 = width / height + 边框粗细 + 内边距尺寸

## 自动内减
由于border和padding会撑开盒子，可以通过计算多余大小手动在内容中减去，这样计算量较大。  
自动内减：给盒子设置属性box-sizing: border-box; ，浏览器会自动计算多余大小，自动在内容中减去。

```css
div {
  box-sizing: border-box;
}
```

## 外边距
设置盒子外部的尺寸。  
属性名：margin  
属性取值：数值 + px，单个取值，设置四个方向的外边距。
```css
div {
  margin: 5px;
}
```

### 外边距单方向
设置单个方向的外边距。  
属性名：margin + 方位名词  
方位名词：left（左）、right（右）、top（上）、bottom（下）
属性值：数值 + px
```css
div {
  margin-left: 5px;
}
```

## 清除默认盒子模型样式
浏览器默认给部分标签设置默认的属性。
- body标签默认有margin:8px;
- p标签默认有上下的margin
- ul标签默认有上下的margin和padding-left

解决方法：
```css
/*选择想要去除的标签*/
body, button, h1, h2, p, ul, li {
  margin: 0;
  padding: 0;
}

/*选择所有元素*/
* {
  margin: 0;
  padding: 0;
}
```

## 外边距折叠合并
垂直布局的块级元素，上下的margin会合并。最终两个块元素的距离为margin的最大值。  
尽量避免两个相邻盒子的接触方向都设置margin。

## 外边距折叠塌陷
互相嵌套的块级元素，子元素的margin-top会作用在父元素上，导致父元素一起往下移动。  

解决方法：
1. 给父元素设置border-top分隔父子元素的margin-top属性，或者使用padding-top属性代替子元素的margin-top属性。
2. 给父元素设置overflow: hidden
3. 转换成行内块元素。
4. 设置浮动。

## 行内元素内外边距问题
行内元素无法通过margin，padding改变标签的垂直位置，即margin-top、margin-bottom、padding-top、padding-bottom四种属性不生效。  
行内标签的高度由内容高度决定，所以可以用行高line-height属性设置。