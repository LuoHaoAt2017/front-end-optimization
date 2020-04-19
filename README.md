# front-end-optimization
前端优化实践

1. 按需引入antd或者element-ui等组件库组件
不引入组件库的时候，js打包大小是884 KB
引入antd组件库并引入全部样式时，js打包大小是6.42 MB，几乎是原来的7倍。
按需引入antd一个Button组件后，js打包大小是2.25 MB，几乎是原来的2倍。
通过实践确实可以看出按需引入的合理性。

2. 开启gzip压缩，将文件压缩成二进制文件
2.25 MiB的js 压缩后只有380KiB
453 bytes的html 压缩后只有304bytes

3. 启动webpack打包
减少文件数量，也就减少了http请求数。
副作用就是合并后的文件体积过大，首次加载缓慢。

4. 图片压缩
附注: jpg图片远比svg图片大，项目中尽量使用svg矢量图片。

附注：npm run build 打包后，如何查看效果
首先我们需要安装它命令npm install http-server -g，
然后执行npm run build,之后进入打包的目录我这里是cd dist然后执行http-server就可以了

附注：更改了webpack配置后是需要重启项目的
style-loader 和 css-loader的顺序不能错，loader的执行顺序是先执行后面的再执行前面的。
css-loader是允许在js中import一个css文件，会将css文件当成一个模块引入到js文件中。
style-loader主要用于将css插入到页面的style标签中，如果缺少style-loader，样式没有引入，就不会生效。
url-loader会将引入的图片编码，生成dataURl。相当于把图片数据翻译成一串字符。再把这串字符打包到文件中，最终只需要引入这个文件就能访问图片了。当然，如果图片较大，编码会消耗性能。因此url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。其实简单来说，url-loader的作用就是根据配置来判断图片是否需要转换成字符串编码，来使项目的性能和速度更快。
