const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const dependencies = require('./package.json').dependencies
const CleanWebpackPlugin = require('clean-webpack-plugin')

const vendors = [];
for (let x in dependencies) {
	vendors.push(x)
}
const library = '[name]_[chunkhash]'
module.exports = {
	entry: {
		vendors: vendors
	},
	mode: 'production',
	output: {
		filename: '[name].dll.js',
		path: path.resolve(__dirname, 'dist/dll'),
		library
	},
	optimization: {
		minimizer: [
		  // we specify a custom UglifyJsPlugin here to get source maps in production
		  new UglifyJSPlugin({
			cache: true,
			parallel: true,
			uglifyOptions: {
			  compress: true,
			  ecma: 6,
			  mangle: true,
			},
			sourceMap: false,
			extractComments: true,
		  })
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.DllPlugin({
			// manifest文件的输出路径,[name]的部分由entry的名字替换
			path: path.join(__dirname, 'dist/dll/[name]-manifest.json'),
			// 这里必须匹配上面的output.library中的值,dll暴露的对象名
			name: library,
			// 解析包路径的上下文，这个要跟配置的dll user一致
			context: __dirname
		}),
		new webpack.DefinePlugin({
			'process.env': {
			 'NODE_ENV': JSON.stringify('production')
			}
		})
	]
}
