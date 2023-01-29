# 6·JS数组

<!-- TOC -->
* [6·JS数组](#6js数组)
  * [介绍](#介绍)
  * [创建方式](#创建方式)
  * [获取元素](#获取元素)
  * [遍历数组](#遍历数组)
  * [新增元素](#新增元素)
<!-- TOC -->

## 介绍
数组Array是一组数据的集合，每个数据称为一个元素，数组中可以存放任意类型的元素。

## 创建方式
创建数组的两种方式：
- 使用new创建数组。
```js
var arr = new Array();
```

- 使用数组字面量[]创建数组，初始化元素使用逗号隔开。
```js
var arr = [];
var numberArr = [1, 2, 3];
```

## 获取元素
数组索引：用于访问数组元素，从0开始。

```js
var nameArr = ['小黑', '小白', '小红'];
console.log(nameArr[0]); // 小黑
console.log(nameArr[1]); // 小白
console.log(nameArr[2]); // 小红
console.log(nameArr[3]); // undefined
```

## 遍历数组
使用循环遍历数组。

```js
var nameArr = ['小黑', '小白', '小红'];
for (var i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i]);
}
```

## 新增元素
1. 通过修改length属性实现数组扩容，length属性是可读写的。
2. 通过数组索引给数组元素赋值。

```js
var nameArr = ['小黑', '小白', '小红'];
nameArr.length = 5; // nameArr = ['小黑', '小白', '小红', undefined, undefined]
nameArr[3] = '小绿';
```
