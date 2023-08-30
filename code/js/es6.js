// console.log(num)
// let num = 666

// if (true) {
//     var i = 10;
// }
// console.log(i)
// ReferenceError: i is not defined

// 经典面试题
var arr = [];
for (let i = 0; i < 2; i++) {
    arr[i] = function () {
        console.log(i);
    }
}
arr[0]();
arr[1]();
// 2
// 2

const ary = [100, 200];
ary[0] = 'a';
ary[1] = 'b';
console.log(ary); // ['a', 'b'];
// ary = ['a', 'b']; // Assignment to constant variable.

let [a, b, c] = [1, 2, 3];
console.log(a)
console.log(b)
console.log(c) 
// 1
// 2
// 3

let [bar, foo] = [1];
console.log(bar)
console.log(foo)
// 1
// undefined

let person = { 
    name: 'ly', 
    age: 22
}
let { name, age } = person
console.log(name); // 'ly'
console.log(age); // 22

let {name: myName, age: myAge} = person; // myName myAge 属于别名
console.log(myName); // 'ly'
console.log(myAge); // 22

() => {}
const fn = () => {}

const sum = (num1, num2) => num1 + num2;
console.log(sum(1, 2))

const fn_2 = v => console.log(v);
fn_2(666) // 666


const obj = { name: '张三'}
function fn_3 () {
    console.log(this);
    return () => {
        console.log(this)
    }
}
const resFn = fn_3.call(obj);
resFn();

// 剩余参数
function sum_2 (first, ...args) {
    console.log(first); // 10
    console.log(args); // [20, 30]
    let sum = first
    args.forEach((curr, index, ) => {
        sum += curr
    })
    return sum
}
console.log(sum_2(10, 20, 30)) // 60


let students = ['wangwu', 'zhangsan', 'lisi'];
let [s1, ...s2] = students;
console.log(s1); // 'wangwu'
console.log(s2); // ['zhangsan', 'lisi']


// 扩展运算符
let arr_2 = [1, 2, 3];
console.log(...arr_2)
// 1 2 3

// 合并数组
// 方法一
let ary1 = [1, 2, 3];
let ary2 = [3, 4, 5];
let ary3 = [...ary1, ...ary2];
console.log(...ary3)
// 1 2 3 3 4 5
// 方法二
ary1.push(...ary2);
console.log(...ary1)
// 1 2 3 3 4 5

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}
let arr4 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr4)
// [ 'a', 'b', 'c' ]

let arr5 = Array.from(arrayLike, item => 'item:' + item)
console.log(arr5)

let personArr = [{
    id: 1,
    name: '张三'
}, {
    id: 2,
    name: '李四'
}]
let target = personArr.find((item, index) => item.id == 2);
console.log(target)

let arr6 = [1, 5, 10, 15];
let index = arr6.findIndex((value, index) => value > 9);
console.log(index); // 2

console.log(arr6.includes(1)) // true
console.log(arr6.includes(2)) // false

// string
let username = 'ly'
let sayHi = () => {
    console.log('hello world')
    return 'hi'
}
let templateStr = `this ${username},
<div>${sayHi()}</div>`
console.log(templateStr)

let hello = 'Hello world!';
console.log(hello.startsWith('Hello')) // true
console.log(hello.endsWith('world!')) // true

console.log('x'.repeat(5)) // "xxxxx"

// Set
// 使用构造函数生成。
const set_1 = new Set();
// 接收数组参数初始化set
const set_2 = new Set([1, 2, 3, 4, 4]);

set_1.add(1).add(2).add(3); // 向 set 结构中添加值
console.log(set_1)

set_1.delete(2) // 删除 set 结构中的2值
console.log(set_1)

// 判断 set 结构中是否有1这个值 返回布尔值
console.log(set_1.has(1)) 

set_1.clear() // 清除 set 结构中的所有值

console.log(set_1)

set_1.forEach(value => console.log(value))
