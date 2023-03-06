// 处理data参数
function resolveData(data) {
    var arr = []
    for (let k in data) {
        arr.push(k + '=' + data[k])
    }
    return arr.join('&');
}

// 定义ajax函数
function ajax(options) {
    var xhr = new XMLHttpRequest();

    // 拼接查询字符串
    var qs = resolveData(options.data);

    // 判断请求类型
    if (options.method.toUpperCase() === 'GET') {
        xhr.open(options.method, options.url + '?' + qs);
        xhr.send();
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(qs);
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            options.success(result);
        }
    }
}