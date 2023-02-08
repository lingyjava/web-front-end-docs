# 6·本地存储

<!-- TOC -->
* [6·本地存储](#6本地存储)
  * [介绍](#介绍)
  * [sessionStorage](#sessionstorage)
  * [localStorage](#localstorage)
<!-- TOC -->

## 介绍
为了满足各种各样的需求，经常需要在本地存储大量的数据，HTML5规范提出了相关解决方案。

本地存储特性：
1. 数据存储在用户浏览器中。
2. 设置、读取方便、甚至页面刷新不丢失数据。
3. 容量较大，sessionStorage约5M、localStorage约20M.
4. 只能存储字符串，可以将对象SON.stringify0 编码后存储。

## sessionStorage
window.sessionStorage 特点：
1. 生命周期为关闭浏览器窗口。
2. 在同一个窗口（页面）下数据共享。
3. 以键值对的形式存储使用。

```js
// 存储数据
sessionStorage.setItem(key, value);
// 获取数据
sessionStorage.getItem(key, value);
// 删除数据
sessionStorage.removeItem(key, value);
// 删除所有数据
sessionStorage.clear(key, value);
```

## localStorage
window.localStorage 特点：
1. 生命周期永久有效，除非手动删除。页面关闭也存在。
2. 同一浏览器共享（多窗口）。
3. 以键值对的形式存储。

```js
// 存储数据
localStorage.setItem(key, value);
// 获取数据
localStorage.getItem(key, value);
// 删除数据
localStorage.removeItem(key, value);
// 删除所有数据
localStorage.clear(key, value);
```