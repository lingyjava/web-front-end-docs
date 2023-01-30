# 7·JS函数

<!-- TOC -->
* [7·JS函数](#7js函数)
  * [介绍](#介绍)
  * [声明函数](#声明函数)
  * [调用函数](#调用函数)
  * [参数](#参数)
  * [形参&实参匹配问题](#形参实参匹配问题)
  * [返回值](#返回值)
  * [arguments](#arguments)
<!-- TOC -->

## 介绍
函数就是封装了一段可被重复调用执行的代码块。通过调用此函数实现代码的复用，减少重复代码。

## 声明函数
function 是声明函数的关键字，函数命一般使用动词。

```js
// 声明函数
function getSum(param1, param2) {
    // 函数体
}

// 函数表达式，匿名函数，通过变量存储函数，也可以传递参数
var name = function (param) {
    console.log(param);
    return 'name';
}

name('lingyuan');
```

## 调用函数
函数在不调用时不执行。通过 函数名() 调用函数。

```js
// 调用函数
getSum(1, 2);
```

## 参数
函数的参数不是必须的，当函数内部的某些值不固定时，可以通过参数在调用函数时传入。  
- 声明函数时的参数为形式参数，用于接收调用函数时的实际参数。
- 调用函数时传入的参数为实际参数。  

## 形参&实参匹配问题
- 函数的形参和实参数量一致时可以正常输出结果。
- 如果函数的形参大于实参数量，那么未传入实参对应的形参被看做不用声明的变量，值为undefined.
- 如果函数的实参大于形参数量，将返回形参的数量。

## 返回值
函数通过return语句将结果值返回给调用者，如果没有return 则返回undefined。return语句后的代码不再执行。

```js
function getName() {
    return 'name';
}
```

## arguments
当不确定函数收到多少个参数时，可以用arguments获取，所有函数都内置了arguments对象，它存储了传递的所有实参。

arguments展示形式是一个伪数组，具有以下特性：
- 有length属性。
- 按索引方式存储数据。
- 不具有push，pop等方法。

```js
function fun(param) {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
}
```
