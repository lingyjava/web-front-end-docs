// 调用 RegExp 对象构造函数创建
var reg_1 = new RegExp(/[0-9]/)
// 使用字面量创建
// var reg_2 = /表达式/

// test 方法
const flag = reg_1.test('1')

console.log(flag)

var reg_2 = /[abc]/
console.log(reg_2.test('andy')) // true


var reg_3 = /^[a-z]$/
console.log(reg_3.test('c')) // true

var reg_4 = /[^abc]/
console.log(reg_4.test('a')) // false

var reg_5 = /[^a-z1-9]/
console.log(reg_5.test('andy1')) // false
