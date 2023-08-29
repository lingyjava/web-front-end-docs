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

// extends 子类继承父类
class SmallDog extends Dog { 
    constructor(name, color, age) {
        // 调用父类构造方法，必须在最前面（先调用父类的构造方法,在使用子类构造方法）
        super(name, color)
        this.age = age
    }

    say() {
        super.say()
        console.log(this.name + "：汪汪汪")
    }
}
var smallDog = new SmallDog('xh', 'black', 3)
smallDog.say()


