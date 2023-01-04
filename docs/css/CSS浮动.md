# CSS浮动

<!-- TOC -->
* [CSS浮动](#css浮动)
  * [伪元素](#伪元素)
<!-- TOC -->

## 伪元素
页面中的非主体内容可以使用伪元素。

区别：
- 元素：HTML标签。
- 伪元素：由CSS模拟出的标签效果。

种类：
- ::before：在父元素内容的最前添加一个伪元素。
- ::after：在父元素内容的最后添加一个伪元素。

使用注意：
1. 必须设置content属性才能生效。
2. 伪元素默认是行内元素。

```css
span::before {
  content: 'span:';
  color: pink;
}
span::after {
  content: 'span标签结束';
}
```

