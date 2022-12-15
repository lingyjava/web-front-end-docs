# HTML简述

> HTML（Hyper Text Markup Language）：超文本标记语言。  

## W3C（World Wide Web Consortium）：万维网联盟制定的标准

&ensp;&ensp;&ensp;&ensp;网络中的每个网页都由代码组成，但是打开网页的浏览器有很多种，浏览器内核通过渲染引擎解析前端代码
为了同样的代码在不同浏览器上都可以运行，所有浏览器都必须遵循W3C标准。在此标准下，HTML、CSS、JavaScript可以在任何浏览器中被统一解析。
而浏览器根据其内核的不同对代码的渲染优化不同，但效果大多数保持一致或相似。

## 浏览器内核

&ensp;&ensp;&ensp;&ensp;渲染引擎就是浏览器内核，负责对代码进行解析渲染。渲染引擎解析代码时的速度、性能、效果不同。
目前各浏览器内核如下：  

|      浏览器       |   内核    |     remark      |
|:--------------:|:-------:|:---------------:|
|       IE       | Trident | IE、猎豹、360、百度浏览器 |
|    FireFox     |  Gecko  |      火狐浏览器      |
|     Safari     | Webkit  |      苹果浏览器      |
| Chrome / Opera |  Blink  |    Webkit的分支    |

## 页面元素
&ensp;&ensp;&ensp;&ensp;HTML是一种特殊的语法，通常以成对的标签形式出现，让浏览器识别并构建网页的基本元素。
通过标记的形式构建网页元素，构建网页的结构。