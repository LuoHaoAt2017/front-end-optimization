
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');

function resolve(pathname) {
	return path.resolve(__dirname, pathname);
}

module.exports = {
	mode: "development",
	entry: {
		app: resolve('./src/main.js') // 打包入口文件
	},
	output: {
		filename: 'main.js',
		path: resolve('./dist')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpeg|png|jpg|gif)$/,
				loader: ['file-loader']
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				loader: 'svg-react-loader',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)/,
				use: ['file-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						//url-loader能将小于某个大小的图片进行base64格式的转化处理。
						loader: 'url-loader',
						options: {
							limit: 2048
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			"@": resolve('./src')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve('./public/index.html')
		}),
		new CleanWebpackPlugin(),
		//new WebpackBundleAnalyzer(),
		new CompressionWebpackPlugin()
	],
	devServer: {
		contentBase: resolve('assets'),
		compress: true, // 一切服务都启用 gzip 压缩
		port: 9000,
		hot: true, // 启用模块热替换功能
		open: 'Google Chrome',
		stats: 'errors-only'
	}
};
