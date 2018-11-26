const merge = require('webpack-merge');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// webpack错误信息提示插件
// https://github.com/geowarin/friendly-errors-webpack-plugin
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const common = require('./webpack.common.js');

// 将 Hot-reload 热加载的客户端代码添加到 webpack.base.conf 的 对应 entry 中，一起打包
// Object.keys(common.entry).forEach(function (name) {
//     common.entry[name] = [
//         'react-hot-loader/patch'
//     ].concat(common.entry[name]);
// });

module.exports = merge(common, {
	devtool: '#eval-source-map',
	devServer: {
		hot: true
		// 设置热启动服务器的根目录，不然一些图片等静态资源是加不到的哦
	    // contentBase: path.resolve(__dirname, 'dist')
	},
	// 添加我们的插件
	plugins: [
		// 清除dist文件夹，保证每次build的文件都是最新的
		new CleanWebpackPlugin(['dist']),
		// 会自动生成一个html文件
		new HtmlwebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
    }),
		// 热加载插件
		// 配置NamedModulesPlugin以便更容易查看要修补(patch)的依赖
	    new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
        // 此处，插入适当的环境
        // https://webpack.js.org/plugins/define-plugin/
		new webpack.DefinePlugin({
	       'process.env': {
	         'NODE_ENV': JSON.stringify('development')
	       }
	    }),
	    // webpack错误信息提示插件
        new FriendlyErrorsPlugin()
	]
});
