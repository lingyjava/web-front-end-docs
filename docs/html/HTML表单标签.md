# HTML表单标签

## form标签
&ensp;&ensp;&ensp;&ensp;
表示表单主体，包裹其他表单标签。
```html
<form action="#" method="get"></form>
```
- action为必选属性，表示表单提交的地址。  
- method为提交方式，post、get等。

## get & post
&ensp;&ensp;&ensp;&ensp;
后端接口的两种请求方式。
- get：在url中拼接表单参数，可以在url中看到提交的信息，不安全，高效。
- post：比较安全，可以传输大文件。

## input标签
&ensp;&ensp;&ensp;&ensp;
显示收集用户信息的表单效果。
```html
<input type="">
```
- type为必选属性，属性值不同展示效果不同。

### input-文本框
&ensp;&ensp;&ensp;&ensp;
展示一个文本输入框。
```html
<input type="text" placeholder="请输入文本">
<input type="password" placeholder="请输入密码">
```
- text：展示一个标准的文本输入框。
- password：展示密码框，输入的文字变为 * 号。
---
文本框的特有属性：
- placeholder=""：属性，占位符, 提示用户输入信息。

### input-选择框
&ensp;&ensp;&ensp;&ensp;
分为单选和多选框。
```html
<input type="radio" name="sex" checked>man
<input type="radio" name="sex">woman
<input type="checkbox" name="hobby" checked>打游戏
<input type="checkbox" name="hobby" >打游戏
<input type="checkbox" name="hobby" >打游戏
```
- radio：展示单选按钮。
- checkbox：展示多选按钮。
---
选择框特有属性：
- name=""：分组，有相同name属性值的单选框为一组，一组中同时只能选中一个。
- checked：默认选中。

### input-文件框
&ensp;&ensp;&ensp;&ensp;
用于上传文件。
```html
<input type="file" multiple>
```
- file：展示文件上传按钮。
---
文件框特有属性：
- multiple：允许选择多个文件。

### input-按钮框
&ensp;&ensp;&ensp;&ensp;
展示有功能的按钮，需要配合form标签使用。
```html
<form action="#">
    <input type="text" placeholder="请输入文本">
    <input type="submit" value="登录">
    <input type="reset">
    <input type="button">
</form>
```
- submit：提交按钮, 提交表单。
- reset：重置按钮, 恢复表单默认值。
- button：普通按钮, 无功能, 通过js添加功能。
---
按钮框特有属性：
- value：按钮名。

## button标签
&ensp;&ensp;&ensp;&ensp;
显示用户点击的按钮。根据type属性拥有不同的功能。和input标签功能类型，但具有更强的语义。
```html
<form action="#">
    <input type="text" placeholder="请输入文本">
    <button type="submit">提交</button>
    <button type="reset">重置</button>
    <button type="button">普通按钮</button>
</form>
```
- submit：提交按钮, 提交表单。
- reset：重置按钮, 恢复表单默认值。
- button：普通按钮, 无功能, 通过js添加功能。

## select标签
&ensp;&ensp;&ensp;&ensp;
显示提供多个选择项的下拉菜单表单控件。
```html
<select name="city" id="">
    <option value="BeiJing">北京</option>
    <option value="ShangHai">上海</option>
    <option value="Guangzhou">广州</option>
    <option value="ShenZhen" selected>深圳</option>
</select>
```
- select双标签：下拉菜单的整体。
- option双标签：下拉菜单的每一项。
  - selected：属性默认选中。

## textarea标签
&ensp;&ensp;&ensp;&ensp;
文本域标签，提供可输入多行文本的表单控件。
```html
<textarea name="text" id="text" cols="30" rows="15"></textarea>
```
- textarea：展示文本域整体。
  - cols=""：文本域可见宽度。
  - rows=""：文本域可见行数。同样的数值下高度是宽度的两倍。

## label标签
&ensp;&ensp;&ensp;&ensp;
绑定内容与表单标签。
```html
<label for="username">用户名：
    <input type="text" id="username">
</label>
```
使用方法：
1. 使用label标签包裹内容；为表单标签添加id属性，在label标签的for属性设置和表单标签对应的id。
2. 使用label标签包裹内容；删除label标签的for属性。

## 表单练习
```html
<form action="#">
    <p></p>
    <label for="username">昵称：
        <input type="text" id="username">
    </label>
    <p></p>
    <label>性别：
        <input type="radio" name="sex">男
        <input type="radio" name="sex">女
    </label>
    <p></p>
    <label for="city">所在城市：
        <select name="city" id="city">
            <option value="BeiJing">北京</option>
            <option value="ShangHai" selected>上海</option>
            <option value="ShenZhen">深圳</option>
        </select>
    </label>
    <p></p>
    <label>婚姻状况：
        <input type="radio" name="marital">未婚
        <input type="radio" name="marital">已婚
        <input type="radio" name="marital">保密
    </label>
    <p></p>
    <label>喜欢的类型：
        <input type="checkbox" name="hobby">可爱
        <input type="checkbox" name="hobby">性感
        <input type="checkbox" name="hobby">御姐
        <input type="checkbox" name="hobby">萝莉
        <input type="checkbox" name="hobby">小鲜肉
        <input type="checkbox" name="hobby">大叔
    </label>
    <p></p>
    <label for="self">个人介绍：<p></p>
        <textarea name="self" id="self" cols="30" rows="10"></textarea>
    </label>
    <h3>我承诺</h3>
    <ul>
        <li>年满18岁</li>
        <li>抱着严肃的态度</li>
        <li>真诚寻找另一半</li>
    </ul>
    <label>
        <input type="checkbox" name="articles">
        我同意所有条款
    </label>
    <p></p>
    <button type="submit">免费注册</button>
    <button type="reset">重置</button>
</form>
```