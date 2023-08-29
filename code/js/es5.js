"use strict"

// es5 中的类继承
function Person (name, age) {
    this.name = name
    this.age = age
}
function Man(name, age, job) {
    Person.call(this, name, age) // 此时父类的 this 指向 子类的 this ，同时调用这个函数
    this.job = job
}

var man = new Man('ly', 22, 'developer')
console.log(man)

// es5 新增方法 **************

// 数组方法
var arr = [1, 2, 3, 4]

// currentValue：数组当前项的值
// index：数组当前项的索引
// arr：数组对象本身

// 遍历数组
arr.forEach((currentValue, index, arr) => {
    console.log(currentValue)
})

// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，主要用于筛选数组。
var arr2 = arr.filter((currentValue, index, arr) => {
    return currentValue > 1
})
console.log(arr2)

// some() 方法用于检测数组中的元素是否满足指定条件，返回值是布尔值，找到第一个满足条件的元素，则终止循环。
var flag = arr.some((currentValue, index, arr) => {
    return currentValue > 1
})
console.log(flag)

// 字符串方法
var str = '  hello world  '

// trim() 方法会从一个字符串的两端删除空白字符，不影响原字符串本身，返回一个新的字符串。
const str2 = str.trim()
console.log(str2)

// 对象方法
var person = {
    name: 'ly',
    age: 22,
    sex: 1
}

const propertyArr = Object.keys(person)
console.log(propertyArr)

for (const v in person) {
    console.log(v)
}

Object.defineProperty(person, 'job', {
    value: 'developer',
    writable: true,
    enumerable: false,
    configurable: true
})

console.log(person.job)