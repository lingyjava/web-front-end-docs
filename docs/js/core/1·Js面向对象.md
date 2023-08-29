# 1·Js面向对象

- [1·Js面向对象](#1js面向对象)
  - [What's this](#whats-this)
  - [类与对象（ES6）](#类与对象es6)
  - [构造函数](#构造函数)
    - [成员变量](#成员变量)
  - [继承](#继承)
    - [super](#super)
    - [ES5](#es5)
  - [原型](#原型)
    - [构造函数原型](#构造函数原型)
    - [对象原型](#对象原型)
    - [constructor 属性](#constructor-属性)
    - [成员查找机制](#成员查找机制)
    - [this指向](#this指向)
    - [扩展内置对象](#扩展内置对象)
  - [类的本质](#类的本质)
  - [ES5新增方法](#es5新增方法)
    - [数组方法](#数组方法)
    - [字符串方法](#字符串方法)
    - [对象方法](#对象方法)


## What's this

在典型的 OOP 的语言中（如 Java），都存在类的概念，类就是对象的模板，对象就是类的实例，但在 ES6之前， JS 中并没引入类的概念。

ES6（ECMAScript 6.0），目前浏览器的 JavaScript 是 ES5 版本，大多高版本的浏览器也支持 ES6，但只实现了 ES6 的部分特性和功能。 

在 ES6之前 ，对象不是基于类创建的，而是用一种称为构建函数的特殊函数来定义对象和它们的特征。 

---

创建对象可以通过以下三种方式：

1. 对象字面量。
1. `new Object()` .
1. 自定义构造函数。

---

面向对象是以对象功能来划分问题，而不是步骤。面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目。

特性： 封装、继承、多态。

面向对象的特点：

- 抽取对象共用的属性和行为组织封装成一个类（模板）。

- 将类进行实例化，获取类的对象（实例）。

## 类与对象（ES6）

**对象**是一个具体的事物，特指通过类实例化的某一个具体对象。

在 JavaScript 中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、 函数等。

对象是由属性（事物的特征，常用名词）和方法（事物的行为，常用动词）组成。

---

**类**抽象了对象的公共部分，泛指某一大类。

在 ES6 中新增加了类的概念，可以使用 class 关键字声明一个类，之后使用 new 类来实例化对象。

```js
// 创建类
class dog {

}
// 创建实例
var blackDog = new dog()
```

---

**注意事项**：

- 在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象。
- 类里面的共有属性和方法一定要加 this 使用。
- constructor 函数中的 this 指向实例对象，方法里面的 this 指向方法的调用者。

## 构造函数

构造函数是一个特殊的函数，主要用来初始化对象，为对象成员变量赋初始值，与 new 一起使用生成对象实例时，自动调用。可以把对象中一些公共的属性和方法抽取出来，封装到这个函数里面。

`constructor()` 方法是类的构造函数（默认方法），用于传递参数，返回实例对象。如果没有显示定义, 类内部会自动给我们创建一个 `constructor()`。

---

new 的执行过程：

1. 在内存中创建一个新的空对象。
2. 让 this 指向这个新的对象。
3. 执行构造函数里面的代码，给这个新对象添加属性和方法。
4. 返回新对象（构造函数里面不需要 return ）。

---

类中的方法之间不能加逗号分隔，同时方法不需要添加 function 关键字。

```js
// 创建类
class Dog {
    // 构造函数
    constructor(name, color) {
        console.log('创建了一个dog实例')
        this.name = name
        this.color = color
    }

    // 普通函数
    say() {
        console.log(this.name + '：汪汪汪')
    }
}

// 创建实例
var blackDog = new Dog('xh', 'black')
// 获取实例属性
console.log(blackDog.color)
// 调用函数
blackDog.say()

// 创建了一个dog实例
// black
// xh：汪汪汪
```

### 成员变量

构造函数中可以在构造函数入参上添加，也可以在构造函数内部的 this 上添加。分别称为静态成员和实例成员。

- 静态成员：在构造函数入参上添加的成员称为静态成员，只能由构造函数本身来访问。
- 实例成员：在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问。

---

构造函数方法存在浪费内存的问题，即多个实例定义的函数相互独立，如果所有的对象使用同一个函数，就比较节省内存。

## 继承

使用 extends 关键字使一个类（子类）继承另一个类（父类），子类继承父类的一些属性和方法。

```js
// extends 子类继承父类
class SmallDog extends Dog { 
	
}
var smallDog = new SmallDog('xh', 'black')
smallDog.say()
// xh：汪汪汪
```

### super

super 关键字用于访问和调用对象父类上的函数，包括构造函数和普通函数。

```js
class SmallDog extends Dog { 
    constructor(name, color, age) {
        // 调用父类构造方法，必须在最前面（先调用父类的构造方法,在使用子类构造方法）
        super(name, color)
        this.age = age
    }

    say() {
        // 调用父类普通函数
        super.say()
        console.log(this.name + "：汪汪汪")
    }
}
var smallDog = new SmallDog('xh', 'black', 3)
smallDog.say()

// xh：汪汪汪
// xh：汪汪汪
```

### ES5

ES6之前并没有提供 extends 继承。可以通过构造函数+原型对象模拟实现继承，被称为组合继承。

调用 `call()` 函数，修改函数运行时的 this 指向。

`fun.call(thisArg, arg1, arg2, ...)`

- thisArg ：当前调用函数 this 的指向对象。
- arg1，arg2：传递的其他参数。

通过 call() 把父类型的 this 指向子类型的 this ，就可以实现子类型继承父类型的属性。借用构造函数继承父类型属性。

```js
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

// Man { name: 'ly', age: 22, job: 'developer' }
```

一般情况下，对象的方法都在构造函数的原型对象中设置，通过构造函数无法继承父类方法。

核心原理：

- 将子类所共享的方法提取出来，让子类的 prototype 原型对象 = new 父类() .
- 本质：子类原型对象等于是实例化父类，因为父类实例化之后另外开辟空间，就不会影响原来父类原型对象。
- 将子类的 constructor 重新指向子类的构造函数。

## 原型

### 构造函数原型

构造函数通过原型分配的函数是所有对象所共享的。

每一个构造函数都有一个 prototype 属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数所拥有。可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。

### 对象原型

对象都会有一个属性  `__proto__ ` 指向构造函数的 prototype 原型对象。

`__proto__` 对象原型和原型对象 prototype 是等价的。

其意义在于为对象的查找机制提供一个方向，但它是一个非标准属性， 实际开发中不可以使用这个属性，它只是内部指向原型对象 prototype .

`构造函数.prototype -> 原型对象`

`对象实例.__proto__ -> 原型对象`

### constructor 属性

对象原型和构造函数原型对象里面有一个属性 `constructor` ，称为构造函数，指回构造函数本身。

主要用于记录该对象引用于哪个构造函数，可以让原型对象重新指向原来的构造函数。

一般情况下，对象的方法都在构造函数的原型对象中设置。如果有多个对象的方法，可以给原型对象采取对象形式赋值，但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数。 此时可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。

`原型对象.prototype.constructor -> 构造函数`

### 成员查找机制

当访问一个对象的属性（包括方法）时：

1. 首先查找对象自身有没有该属性。
2. 如果没有，查找它的原型（也就是 `__proto__` 指向的 prototype 原型对象）。
3. 如果没有，查找原型对象的原型（Object的原型对象）。
4. 依此类推一直找到 Object 为止（null）。

所以`__proto__` 对象原型的意义就在于为对象成员查找机制提供一个方向。

### this指向

构造函数中的 this 指向实例对象。

原型对象里面放的是方法，方法里面的 this 指向的是方法的调用者。

### 扩展内置对象

通过原型对象，可以对原来的内置对象进行扩展自定义的方法。

---

**注意：**

数组和字符串内置对象不能给原型对象覆盖操作 Array.prototype = {} ，只能是 Array.prototype.xxx = function(){} 的方式。

## 类的本质

- class 本质还是 function.
- 类的所有方法都定义在类的prototype属性上。
- 类创建的实例,里面也有 `__proto__` 指向类的 prototype 原型对象。
- ES6中类的大部分功能，ES5都可以做到，class 写法只是让对象原型的写法更加清晰。ES6的类就是语法糖。

## ES5新增方法

### 数组方法

遍历方法：forEach()、map()、filter()、some()、every()

```js
var arr = [1, 2, 3, 4]

// currentValue：数组当前项的值
// index：数组当前项的索引
// arr：数组对象本身

// 遍历数组
arr.forEach((currentValue, index, arr) => {
    console.log(currentValue)
})
// 1
// 2
// 3
// 4

// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，主要用于筛选数组。
var arr2 = arr.filter((currentValue, index, arr) => {
    return currentValue > 1
})
console.log(arr2)
// [ 2, 3, 4 ]

// some() 方法用于检测数组中的元素是否满足指定条件，返回值是布尔值，找到第一个满足条件的元素，则终止循环。
var flag = arr.some((currentValue, index, arr) => {
    return currentValue > 1
})
console.log(flag)
// true
```

### 字符串方法

trim() 方法会从一个字符串的两端删除空白字符。不影响原字符串本身，返回一个新的字符串。

```js
var str = '  hello world  '
const str2 = str.trim()
console.log(str2)
```

### 对象方法

Object.keys() 用于获取对象自身所有的属性，类似 for…in，返回一个由属性名组成的数组。

```js
var person = {
    name: 'ly',
    age: 22,
    sex: 1
}

const propertyArr = Object.keys(person)
console.log(propertyArr)
// [ 'name', 'age', 'sex' ]

for (v in person) {
    console.log(v)
}
// name
// age
// sex
```

---

Object.defineProperty() 定义对象中新属性或修改原有的属性。

`Object.defineProperty(obj, prop, descriptor)`

- obj：必需，目标对象。
- prop：必需，需定义或修改的属性的名字。
- descriptor：必需，目标属性所拥有的特性说明，以对象形式 { } 书写。
  - value：设置属性的值，默认为undefined.
  - writable：值是否可以重写，true | false，默认为false.
  - enumerable：目标属性是否可以被枚举，true | false，默认为 false.
  - configurable：目标属性是否可以被删除或是否可以再次修改特性，true | false，默认为false.

```js
Object.defineProperty(person, 'job', {
    value: 'developer',
    writable: true,
    enumerable: false,
    configurable: true
})

console.log(person.job)
// developer
```