
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
				test: /\.(png|jpg|gif|svg)$/,
				use: ['file-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)/,
				use: ['file-loader']
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
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
		// new WebpackBundleAnalyzer(),
		new CompressionWebpackPlugin()
	]
};
