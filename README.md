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