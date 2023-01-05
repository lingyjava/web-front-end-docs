# CSS背景

<!-- TOC -->
* [CSS背景](#css背景)
  * [背景颜色](#背景颜色)
  * [背景图片](#背景图片)
  * [背景平铺](#背景平铺)
  * [背景位置](#背景位置)
  * [背景复合属性](#背景复合属性)
  * [背景图与图片的区别](#背景图与图片的区别)
  * [图片垂直位置](#图片垂直位置)
<!-- TOC -->

## 背景颜色
属性名：background-color（bgc）  
属性值：关键字、rgb表示法、rgba表示法、十六进制...

使用注意：
- 背景颜色默认为透明：rgba(0,0,0,0) 、 transparent。
- 背景颜色不会影响盒子大小，可以方便看清楚盒子的大小和位置。  

```css
div {
    background-color: pink;
}
```

## 背景图片
属性名：background-image（bgi）  
属性值：url("")

使用注意：
- url可以省略引号
- 背景图片默认是在水平和垂直方向平铺
- 背景图片仅给盒子装饰作用，类似背景颜色，不能撑开盒子。

```css
div {
    background-image: url("#");
}
```

## 背景平铺
属性名：background-repeat（bgr）  

属性值：
- repeat：默认值，水平和垂直方向都平铺。
- no-repeat：不平铺。
- repeat-x：沿着水平方向x轴平铺。
- repeat-y：沿着垂直方向y轴平铺。

```css
div {
    background-repeat: repeat-x;
}
```

## 背景位置
属性名：background-position（bgp）  

属性值：水平方向位置 垂直方向位置  
取值方式：
1. 方位名词：水平方向（left、center、right），垂直方向（top、center、bottom）
2. 数值+px（坐标）：坐标系：原点(0,0)表示盒子左上角、x轴水平向右、y轴垂直向下。
3. 两种取值方式可以混合使用。方位名词的取值方式可以颠倒属性值的顺序。

```css
div {
    background-position: 0 0;
}
```

## 背景复合属性
属性名：background（bg）  
属性值：单个属性值之间用空格隔开，没有顺序之分，推荐顺序是：color image repeat position  

使用注意：
- 可以按需省略任意属性。
- 在pc端如果盒子大小和背景图片大小一致，可以直接使用background:url()
- 依然要小心复合属性与单个属性之间的覆盖问题，复合属性在后将覆盖单个属性。

```css
div {
    background: #000 url("#") no-repeat center;
}
```

## 背景图与图片的区别
在网页中展示一张图片，可以通过img标签，也可以通过设置一个块的背景图片。
- 使用img标签时，不设置宽高默认以图片尺寸显示。
- 使用背景图片时，需要设置所在元素的宽高，因为背景图片是装饰，不能撑开标签。

## 图片垂直位置
调节图片垂直对齐方式。  
属性名：vertical-align  
属性值：middle（居中）