# HTML表格标签
&ensp;&ensp;&ensp;&ensp;
标识表格整体，以行 + 列的方式展示数据。

<!-- TOC -->
* [HTML表格标签](#html表格标签)
  * [行列标签](#行列标签)
  * [标题标签](#标题标签)
  * [结构标签](#结构标签)
  * [合并单元格](#合并单元格)
  * [表格属性](#表格属性)
  * [表格练习1](#表格练习1)
  * [表格练习2](#表格练习2)
<!-- TOC -->

## 行列标签
- table双标签：表示表格整体, 用于包裹多个tr标签。
- tr双标签：表示表格的一行, 用于包裹多个td标签。
- td双标签： 表示表格的一个单元格, 用于包裹内容。

## 标题标签
&ensp;&ensp;&ensp;&ensp;
表示表格整体大标题和每列小标题。
- caption双标签：表示表格整体大标题，在table标签内部，默认在表格整体顶部居中显示。
- th双标签：表示表格一列的小标题, 在tr标签内部，替换td标签，通常用于表格第一行, 默认内容加粗并居中显示。

## 结构标签
&ensp;&ensp;&ensp;&ensp;
让表格的内容结构分布，突出表格不同部分（头部、主体、底部），用于包裹tr标签，且可以省略。
- thead双标签：表格头部。
- tbody双标签：表格主体。
- tfoot双标签：表格底部。

## 合并单元格
&ensp;&ensp;&ensp;&ensp;
将水平或垂直的多个单元格合并成一个。  
&ensp;&ensp;&ensp;&ensp;
**_合并原则_**：左上原则，优先保留最上或者最左，其他删除。给保留的单元格设置rowspan或colspan属性。只能合并同一结构标签中行列。

在行列标签中添加以下属性合并单元格： 
- rowspan=""：合并单元格的个数, 跨行合并, 垂直合并。
- colspan=""：合并单元格的个数, 跨列合并, 水平合并。

## 表格属性
&ensp;&ensp;&ensp;&ensp;
table双标签提供以下属性设置表格样式，样式效果建议使用CSS统一设置。
- broder=""：设置边框宽度。
- width=""：设置表格宽度。
- height=""：设置表格高度。

## 表格练习1
```html
<table border="2px" width="150" height="50px">
  <caption>订单列表</caption>
    <thead>
        <tr>
            <th>订单ID</th>
            <th>商品</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>MALL001</td>
            <td rowspan="2">PP/K8303</td>
            <td><a href="#">发货</a></td>
        </tr>
        <tr>
            <td>MALL002</td>

            <td><a href="#">收货</a></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th colspan="3">帮助支持</th>
        </tr>
    </tfoot>
</table>
```

## 表格练习2
```html
<table border="1" width="500" height="300">
    <caption>优秀学生信息表格</caption>
    <thead>
        <tr>
            <th>年级</th>
            <th>姓名</th>
            <th>学号</th>
            <th>班级</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">高三</td>
            <td>张三</td>
            <td>110</td>
            <td>三年二班</td>
        </tr>
        <tr>
            <td>赵四</td>
            <td>120</td>
            <td>三年三班</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>评语</td>
            <td colspan="3">你们都很优秀</td>
        </tr>
    </tfoot>
</table>
```