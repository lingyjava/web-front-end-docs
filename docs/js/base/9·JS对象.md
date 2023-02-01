# 9·JS对象

<!-- TOC -->
* [9·JS对象](#9js对象)
  * [介绍](#介绍)
  * [创建对象](#创建对象)
  * [new](#new)
  * [遍历对象](#遍历对象)
  * [内置对象](#内置对象)
<!-- TOC -->

## 介绍
JS中，对象是一组无序的相关属性和方法的集合。字符串、数值、数组、函数都是对象。

对象由属性和方法组成：
- 属性：事物的特征，用属性表示，常用名词。
- 方法：事物的行为，用方法表示，常用动词。

## 创建对象
JS中创建对象的方式：

- 使用字面量创建对象。
```js
var obj = {
    userrname: 'lingyuan',
    age: 18,
    sex: 1,
    
    getAge: function () {
        return this.userrname;
    },
    setAge: function (username) {
        this.userrname = username;
    }
}

console.log(obj.userrname, obj.getAge(), obj["sex"]);
```

- 使用 new Object 创建对象。
```js
var obj = new Object();
obj.username = 'lingyuan';
obj.age = '18';
obj.getAge = function () {
    return this.age;
}
```

- 使用构造函数创建对象。
构造函数是一种特殊的函数，用来初始化对象，为对象成员变量赋初始值，与new一起使用。可以把对象中公共的属性和方法提取出来，封装到构造函数中。
```js
// 构造函数名首字母大写
function Person(username, age) {
  //   使用this.属性的方式赋值
  this.username = username;
  this.age = age;
  // 构造函数不需要return也有返回值
}

// 调用构造函数
var person = new Person('lingyuan', 18); // object
```

## new
new关键字执行过程：
1. new 构建函数 在内存中创建一个空对象。
2. this 指向创建的空对象。
3. 执行构造函数中的代码，给空对象添加属性和方法。
4. 返回此对象。

## 遍历对象
使用for...in...语句对数组或对象的属性进行循环操作。

```js
var person = {
    name: 'lingyuan' , 
    age: 18,
    sex: 1
}

for (var key in person) {
    console.log(key); // 输出属性名
    console.log(person[key]); // 输出属性值
}


```

## 内置对象
JS对象分为三种：自定义对象、内置对象、浏览器对象。

内置对象指JS语言自带的对象，提供了一些常用和基本的功能(属性和函数)。

API文档：
- [MDN](https://developer.mozilla.org/zh-CN/)
- [W3C](https://www.w3school.com.cn/)

