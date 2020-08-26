const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
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
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: ['file-loader']
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				loader: 'svg-react-loader',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)/,
				use: ['file-loader']
			}
		]
	},
	resolve: {
		alias: {
			"@": resolve('src')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			minify:{
				removeAttributeQuotes:true /*压缩文件去掉属性的双引号*/
			},
			hash:true, /*加入hash值，为了避免浏览器缓存js*/
			template: resolve('./public/index.html')
		}),
		new CleanWebpackPlugin(),
		new UglifyjsWebpackPlugin(),
		new CompressionWebpackPlugin()
	],
	optimization: {
		usedExports: true//打开tree shaking 生产环境默认·true
	},
	devServer: {
		port: 9000
	}
};
