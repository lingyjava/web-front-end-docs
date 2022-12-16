# HTML媒体标签

## 图片标签

&ensp;&ensp;&ensp;&ensp;
img单标签，显示图片，需要设置属性src才能使用。  

### 图片标签-属性

- src=""：文件地址（source）。
- alt=""：图片加载失败时的提示信息。
- title=""：鼠标悬停在图片上显示。
- width=""：宽度。
- height=""：高度。 
  - 宽高只设置一个时，另一个自动等比例缩放，图片不会变形。 
  - 宽高都设置时，设置不当图片将变形。

```html
<img src="./img.jpg" alt="图片加载失败" title="图片1" width="500px" height="300px">
```

## 音频标签

&ensp;&ensp;&ensp;&ensp;
audio双标签，在页面中插入音频文件，支持的格式MP3、Wav、Ogg。

### 音频标签-属性

- src=""：文件地址。
- controls：显示播放控件。
- autoplay：自动播放（部分浏览器禁止）。
- loop：循环播放。

```html
<audio src="./music.mp3" controls autoplay loop></audio>
```

## 视频标签

&ensp;&ensp;&ensp;&ensp;
video双标签，在页面中插入视频，支持的格式MP4、WebM、Ogg。

### 视频标签-属性

- src=""：文件地址。
- controls：显示播放控件。
- autoplay：自动播放（部分浏览器禁止），谷歌浏览器搭配静音播放可不被禁止。
- muted：静音播放。
- loop：循环播放。

```html
<video src="./video.mp4" controls autoplay muted loop></video>
```

## 超链接标签

&ensp;&ensp;&ensp;&ensp;
a双标签，跳转到链接页面，标签内部为展示的文本内容。

### 超链接标签-属性

- href=""：(hyperlink reference)，链接地址。 暂不确定路径时使用占位符#。
- target=""：链接打开的方式。
  - _self：默认属性值, 在当前网页跳转。
  - _blank：在新窗口中打开。

```html
<a href="https://www.baidu.com" target="_blank">百度一下</a>
<a href="../../codes/index.html">主页</a>
<a href="#">查看详情</a>
```

## 内联框架

&ensp;&ensp;&ensp;&ensp; 
引入外部的视频、音频、网页、图片等。

```html
<!--内联框架 src:地址 w-h:宽高度-->
<iframe src="https://www.baidu.com" width="" height=""></iframe>
```
