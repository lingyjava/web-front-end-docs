# 5·axios

- [5·axios](#5axios)
  - [what’s this](#whats-this)
  - [基本使用](#基本使用)
  - [请求类型](#请求类型)
  - [form-serialize 插件](#form-serialize-插件)
  - [同步和异步](#同步和异步)
  - [Promise](#promise)
    - [状态](#状态)
    - [链式调用](#链式调用)
  - [async、await函数](#asyncawait函数)
  - [错误捕获处理](#错误捕获处理)
  - [事件循环](#事件循环)
  - [宏任务与微任务](#宏任务与微任务)
  - [Promise.all 静态方法](#promiseall-静态方法)


## what’s this

基于 XMLHttpRequest 封装的与服务器进行数据通信的 JS 库。

Vue、React 项目中都用到 axios.

cdn 引入：https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js

## 基本使用

```js
axios({
    // 请求类型
    method: "GET",
    // 请求路径
    url: 'http://localhost:80/api/cors/tes',
    // query 参数
    params: {
        p1: 'param1'
    },
    // body 参数
    data: {
        p2: 'param2'
    }
}).then((result) => {
    // 处理返回数据
    console.log(result);
    document.querySelector('div').innerHTML = result.data
}).catch((error) => {
    // 错误处理
    alert("请求失败：" + error.message)
})
```

## 请求类型

- GET：获取数据。
- POST：数据提交。
- PUT 修改数据（全部）。
- DELETE 删除数据。
- PATCH 修改数据（部分）。

## form-serialize 插件

快速收集表单元素的值。

```js
const form = document.querySelector('form')
const data = serialize(form, {hash: true, empty: true})
```

## 同步和异步

- 同步代码：逐行执行，需等待结果后，才继续向下执行。

- 异步代码：调用后不阻塞代码继续执行（不必原地等待），在完成后触发一个回调函数。
  - setTimeout / setInterval.
  - 事件。
  - AJAX。

## Promise

Promise 对象用于表示一个异步操作最终完成或失败及其结果。

`axios()` 本质是返回 Promise 对象。

```js
// axios() 原理
// 创建 Promise 对象
const p = new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:80/api/cors/test')
    xhr.addEventListener('loadend', () => {
        // xhr如何判断响应成功还是失败的？
        // 2xx开头的都是成功响应状态码
        console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response)
        } else {
            reject(new Error(xhr.response))
        }
    })
    xhr.send()
})

// 执行异步任务-并传递结果
// 成功调用：resolve(值) 触发 then() 执行
// 失败调用：reject(值) 触发 catch() 执行
// 接收结果
p.then(result => {
    // 成功
    document.querySelector('div').innerHTML = result
}).catch(error => {
    // 失败
    alert("请求失败：" + error.message)
})
```

### 状态

Promise对象，必然处于三种状态之一：

- 待定（pending）：初始状态，既没有被兑现，也没有被拒绝。
- 已兑现（fulfilled）：意味着，操作成功完成，触发 then() 执行。
- 已拒绝（rejected）：意味着，操作失败，触发 catch() 执行。

Promise 对象一旦被兑现/拒绝，状态无法再被改变。

状态改变后，调用关联的处理函数。

### 链式调用

解决因在回调函数中嵌套回调函数，一直嵌套导致可读性差，异常无法捕获，耦合性严重等问题。

依靠 Promise 对象的 then() 方法返回一个新生成的 Promise 对象特性，继续串联下一环任务，直到结束。

then() 回调函数中的返回值，会影响新生成的 Promise 对象最终状态和结果。

```js
// 链式调用
axios({
    method: "GET",
    url: 'http://localhost:80/api/cors/test'
}).then((result) => {
    console.log(result);
    document.querySelector('div').innerHTML = result.data
    return axios({
        method: "GET",
        url: 'http://localhost:80/api/cors/test'
    })
}).then(result => {
    document.querySelector('p').innerHTML = result.data
})
// ...持续链式调用
    .catch((error) => {
    // 错误处理
    alert("请求失败：" + error.message)
})
```

## async、await函数

async 函数是使用 async 关键字声明的函数，是 AsyncFunction 构造函数的实例，并且其中允许使用  await  关键字。 async 和 await 关键字可以用更简洁的方式写出基于 Promise 的异步行为，而无需刻意地链式调用  promise.

在 async 函数内，使用 await 关键字取代 then 函数，等待获取 Promise 对象成功状态的结果值。

```js
async function render() {
    const r1 = await axios({
        method: "GET",
        url: 'http://localhost:80/api/cors/test'
    })
    const r2 = await axios({
        method: "GET",
        url: 'http://localhost:80/api/cors/test2'
    })

    document.querySelector('div').innerHTML = r1.data
    document.querySelector('p').innerHTML = r2.data
}
render()
```

## 错误捕获处理

使用 try-catch 语句捕获并处理错误。

```js
try {
    // 可能出现错误的代码
} catch (error) {
    // 处理错误
}
```

## 事件循环

执行代码和收集异步任务的模型，在调用栈空闲，反复调用任务队列里回调函数的执行机制，就叫事件循环。

事件循环模型负责执行代码、收集处理事件以及执行对列中的子任务，解决 JS 单线程（某一刻只能执行一行代码），让耗时代码不阻塞其他代码运行。

## 宏任务与微任务

ES6 之后引入了 Promise 对象， 让 JS 引擎也可以发起异步任务。

异步任务分为：

- 宏任务：由浏览器环境执行的异步代码。
  - JS 脚本执行事件。
  - setTimeout/setInterval.
  - AJAX请求完成事件。
  - 用户交互事件等。
- 微任务：由 JS 引擎环境执行的异步代码。
  - Promise对象.then().

微任务队列清空后，才会执行下一个宏任务。

## Promise.all 静态方法

合并多个 Promise 对象，等待所有同时成功完成（或某一个失败），做后续逻辑。

```js
// Promise.all
const p1 = axios({
    method: "GET",
    url: 'http://localhost:80/api/cors/test'
})
const p2 = axios({
    method: "GET",
    url: 'http://localhost:80/api/cors/test2'
})

const pAll = Promise.all([p1, p2])
pAll.then(result => {
    // result为数组
    console.log(result);
    document.querySelector('div').innerHTML = result[0].data
    document.querySelector('p').innerHTML = result[1].data
}).catch((error) => {
    // 错误处理
    alert("请求失败：" + error.message)
})
```

