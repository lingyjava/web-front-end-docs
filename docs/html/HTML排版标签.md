# HTML排版标签

## 标题标签

&ensp;&ensp;&ensp;&ensp;
h双标签，标题标签又称h标签，因为标签以h开头，紧跟一个数字表示几级标题，标题等级越大字体越小。
标题用于突出主题。特点是文字加粗、字体变大、独占一行。

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

## 段落标签

&ensp;&ensp;&ensp;&ensp;
p双标签，用于分段显示。段落之间有间隙。

```html
<p>唧唧复唧唧,木兰当户织。</p>
<p>不闻机杼声,唯闻女叹息。</p>
```

## 换行标签

&ensp;&ensp;&ensp;&ensp;
br单标签，用于行内元素之间的强制换行。

```html
<p>不闻机杼声,<br/>唯闻女叹息。</p>
```

## 水平线标签

&ensp;&ensp;&ensp;&ensp;
hr单标签，用于分割不同内容的水平线，块级元素，独占一行。

```html
<h2>木兰诗</h2>
<hr>
```

## div标签

&ensp;&ensp;&ensp;&ensp;
div双标签，标记一块区域，块级元素，独占一行。项目开发中需要块级元素时常被使用。

```html
<div></div>
```

## span标签

&ensp;&ensp;&ensp;&ensp;
span双标签，行内元素。项目开发中需要行内元素时常被使用。

```html
<span></span>
```

## 列表标签

### 无序列表
&ensp;&ensp;&ensp;&ensp;
ul双标签搭配li双标签，表示一组无顺序之分的列表。每一项前默认显示圆点标识。  
- ul双标签：表示无序列表整体, ul标签中只允许包含li标签。  
- li双标签：表示无序列表每一项, li标签中可以包含任意内容。

```html
<h2>前端三剑客</h2>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

### 有序列表
&ensp;&ensp;&ensp;&ensp;
ol双标签搭配li双标签，表示一组有顺序之分的列表。每一项前默认显示序号标识。  
- ol双标签：表示有序列表的整体, ol标签中只允许包含li标签。

```html
<h2>排行榜</h2>
<ol>
    <li>MySQL</li>
    <li>SQLServer</li>
    <li>PostgreSQL</li>
</ol>
```

### 自定义列表
&ensp;&ensp;&ensp;&ensp;
dl双标签搭配dt双标签和dd双标签，自定义列表格式，网页底部导航中经常使用。
- dl双标签：表示自定义列表的整体, dl标签中只允许包含dt/dd标签。
- dt双标签：表示自定义列表的主题, dt标签中可以包含任意内容。
- dd双标签：表示自定义列表的每一项内容, 默认显示缩进效果, dd标签中可以包含任意内容。

```html
<dl>
    <dt>帮助中心</dt>
    <dd>账户管理</dd>
    <dd>购物指南</dd>
    <dd>订单操作</dd>
</dl>
```

## 语义化标签

&ensp;&ensp;&ensp;&ensp;
在HTML5中，推出的有语义的布局标签，特点与div一致，仅多了语义：
- header标签：网页头部。 
- nav标签：网页导航。 
- footer标签：网页底部。 
- aside标签：网页侧边栏。 
- section标签：网页区块。 
- article标签：网页文章。