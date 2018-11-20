const webpack = require('webpack')
const path = require('path')
const dependencies = require('./package.json').dependencies

let x;
const vendors = [];
for (x in dependencies) {
	vendors.push(x)
}
const library = '[name]_[chunkhash]'
module.exports = {
	entry: {
		vendors: vendors
	},

	output: {
		filename: '[name].dll.js',
		path: path.resolve(__dirname, 'dist/dll'),
		/* 将会定义为window.${output.library}
		这里将会被定义为“window.vendors_[chunkhash] */
		library
	},

	plugins: [
		new webpack.DllPlugin({
			// manifest文件的输出路径,[name]的部分由entry的名字替换
			path: path.join(__dirname, 'dist/dll/[name]-manifest.json'),
			// 这里必须匹配上面的output.library中的值,dll暴露的对象名
			name: library,
			// 解析包路径的上下文，这个要跟配置的dll user一致
			context: __dirname
		}),
		// 压缩打包的文件
	    new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
	    // definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
		// 此处，插入适当的环境
		// https://webpack.js.org/plugins/define-plugin/
		new webpack.DefinePlugin({
			'process.env': {
			 'NODE_ENV': JSON.stringify('production')
			}
		})
	]
}
