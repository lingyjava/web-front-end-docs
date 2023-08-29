function fn(callback) {
    callback&&callback()
}
    
fn(function(){
    console.log('hi')
})

function fn2(){
    return function() {
        console.log('hi 2')
    }
}
fn2()();

// 闭包函数
function fn1() { 
    var num = 10
    // 延伸变量的作用范围
    function fn2(){
        console.log(num) // 10
    }
    fn2()
}
fn1()
