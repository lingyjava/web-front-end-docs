# 1·CSS简述

> CSS（Cascading style sheets）层叠样式表。

<!-- TOC -->
* [1·CSS简述](#1css简述)
  * [作用](#作用)
  * [导入方式](#导入方式)
  * [注释](#注释)
<!-- TOC -->

## 作用
&ensp;&ensp;&ensp;&ensp;
给HTML标签设置样式。
设置样式的过程通常是：
1. 选择标签。
2. 设置属性.
3. 属性赋值。

## 导入方式
&ensp;&ensp;&ensp;&ensp;
引入方式离标签越近，优先级越高（行内样式 > 内部样式 > 外部样式）  

三种引入方式：
1. 内嵌式：在head标签中添加style双标签，在标签内部可以编写CSS样式。作用于当前页面。
2. 外联式：写在单独的.css文件中，通过link标签引入HTML网页。可以作用于多个页面。
3. 行内式：写在标签style属性中。作用于单个标签，配合js使用。

```html
<html>
  <head>
    <!--内部样式-->
    <style>
      h1{color: brown;}
    </style>

    <!--外部样式-->
    <link rel="stylesheet" href="./../../codes/index.css">

    <!--导入式 css2.1-->
    <style>
      @import url(./../../codes/index.css);
    </style>
  </head>

  <body>
    <!--行内样式，在标签元素中，编写一个style属性，添加样式-->
    <h1 style="color:aqua">标题</h1>
  </body>
</html>
```
   

## 注释
```css
/* 这是多行注释 */
```

