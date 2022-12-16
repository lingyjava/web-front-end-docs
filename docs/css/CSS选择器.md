# CSS选择器

&ensp;&ensp;&ensp;&ensp;
如何选择选择到想要设置样式的标签？

## 标签选择器
&ensp;&ensp;&ensp;&ensp;
通过标签名找到页面中所有此类标签设置样式。
> 标签名 {css属性: 属性值;}
```css
/* 选中所有的p标签设置字体大小 */
p {
	font-size: 30px;
}
```

## 类选择器
&ensp;&ensp;&ensp;&ensp;
通过类名，找到页面中所有带有这个类目的标签设置样式。 所有标签都有class属性，属性值为类名。  
&ensp;&ensp;&ensp;&ensp;
类名由字母、数字、下划线和中划线组成，不能以数字和中划线开头。**一个标签可以同时有多个类名，类名之间用空格隔开。**
类名允许重复，所以类选择器可以同时选中多个标签。


> .类名 {css属性: 属性值;}
```css
/* 选中类名为one的标签, 颜色设置为蓝色 */
.one {
    color:blue;
}
```

## id选择器
&ensp;&ensp;&ensp;&ensp;
通过id属性值，找到带有这个id的标签。所有标签都有id属性，id在一个页面中唯一不可重复。所以一个id选择器只能选择一个标签。  
&ensp;&ensp;&ensp;&ensp;
规范的编码中id选择器最好只使用一次设置所有样式。

> #id属性值 {css属性名: 属性值; }

```css
#skyblue {
    color: skyblue;
}
```

## 通配符选择器
&ensp;&ensp;&ensp;&ensp;
找到页面中所有的标签。极少情况下使用。

> *{css属性名: 属性值; }

