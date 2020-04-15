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