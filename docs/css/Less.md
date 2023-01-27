# Less

> 给CSS加点料。  
> 使用Less语法快速编译生成CSS代码。  

- [Less中文文档](https://less.bootcss.com/)

## Less 简介
Less是一个CSS预处理器，Less文件后缀是.less  
Less扩充了CSS语言，使CSS具备一定的逻辑性、计算能力。  
浏览器不识别Less代码，网页要引入对应的CSS文件。  

## vscode插件
- Easy Less：less文件保存自动生成CSS文件。

## 注释
语法：
```less
// 单行注释内容

/*
  多行注释
  注释内容
*/
```

## 计算
允许使用 加、减、乘、除 的计算表达式。除法需要添加小括号或使用./  

```less
.box {
  width: 6 + 5 rem;
  height: 6 - 5 rem;
  padding: 6 * 5 rem;
  margin: (6 / 5rem);
  line-height: 6 ./ 5 rem;
}
```

## 嵌套
通过嵌套写法生成后代选择器。  
使用 & 符号表示当前选择器不生成为后代选择器，配合伪类选择器、伪元素使用。  

语法：
```text
.父级选择器 {
    // 父级样式
    .子级选择器 {
        // 子级样式
    }
}
```

```less
.box {
  width: 85px;
  .nav {
    display: flex;
    width: 20px;
    .left {
      flex: 1;
      &:hover {
        color: pink;
      }
    }
  }
}
```

## 变量
使用变量存储数据，方便使用和修改。  

定义变量语法：@变量名: 值;  
使用变量语法：CSS属性: @变量名;  

```less
@color: pink;

.box {
  color: @color;
}
```

## 导入

