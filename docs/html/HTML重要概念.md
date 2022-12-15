# HTML重要概念

## 块级元素 与 行内元素

&ensp;&ensp;&ensp;&ensp;
HTML标签生成的区域分为块级元素和行内元素。
- 块级元素：无论内容多少，独占一行。（div、form、h、hr、p、table、ul、ol）
- 行内元素：内容撑开宽度，左右都是行内元素可以排在一行。（a、br、em 、font、img、input、select、span、strong 、textarea）

## 特殊符号

&ensp;&ensp;&ensp;&ensp;
通过字符实体在网页中显示特殊符号，在HTML中，多个空格将合并为一个，想要显示空格和标签关键字，就需要使用字符实体。

|  符号  |  字符实体  |
|:----:|:------:|
|  空格  | &nbsp; |
| 大于号  |  &gt;  |
| 小于号  | 	&lt;  |
| 版权符号 | &copy; |
| &符号  | 	&amp; |
|  引号  | &quot; |

## 标签属性

&ensp;&ensp;&ensp;&ensp;
在标签内部设置标签属性。标签同时可以存在多个属性，属性之间、标签名与属性之间空格隔开，没有顺序之分。部分属性不需要值直接生效。  
&ensp;&ensp;&ensp;&ensp;
<标签名 属性A="属性值" 属性B="属性值" >

## 绝对路径 & 相对路径

&ensp;&ensp;&ensp;&ensp;
绝对路径：指目录的绝对位置，通常从盘符开始。  
&ensp;&ensp;&ensp;&ensp;
相对路径：指从当前文件位置开始寻找文件。

```text
绝对地址-盘符路径：D:\workspace\demo\img.jpg
绝对地址-网络地址：http://www.baidu.com/img.icon
相对地址-同级目录：img.jpg 或 ./img.jpg
相对地址-子目录：./workspace/img.jpg
相对地址：父目录：../img.jpg
```