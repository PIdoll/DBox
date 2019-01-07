const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');


const common = require('./webpack.common.js');

 let webpackConfig = merge(common, {
	devtool: '#source-map',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(less|css)$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
				}, 'css-loader', {
					loader: 'postcss-loader',
						options: {
							plugins: () => [
								autoprefixer({add: true, remove: true, browsers: ['>0%']}),
								cssnano()
								]
						}
				}, 'less-loader']
			}
		]
	},
	optimization: {
		minimizer: [
		  // we specify a custom UglifyJsPlugin here to get source maps in production
		  new UglifyJSPlugin({
			cache: true,
			parallel: true,
			uglifyOptions: {
			  compress: false,
			  ecma: 6,
			  mangle: true
			},
			sourceMap: true
		  }),
		  new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/dbox-ui.[name].css',
			chunkFilename: 'css/dbox-ui.[contenthash:12].css' // use contenthash *
		  }),

		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'assets'),
				to: path.resolve(__dirname, 'dist/assets'),
				ignore: ['.*']
			},
			{
				from: path.resolve(__dirname, 'favicon.ico'),
				to: path.resolve(__dirname, 'dist/')
			}
		]),

		// Dll user的配置
		// 单独编译更改不频繁的代码
		// node_modules中的任何所需模块都提取到vendor
		// 这里的路径要和 webpack.dll.config.js 里面的对应。
		new webpack.DllReferencePlugin({
		// 需要和webpack.dll.config.js中配置的context保持一致，用来指导webpack匹配manifest中库的路径
		context: __dirname,
		// 用来引入webpack.dll.config.js中输出的manifest文件
		manifest: path.resolve(__dirname, './dist/dll/vendors-manifest.json')
		}),
		// webpack3 new feature,Scope Hoisting
		new webpack.optimize.ModuleConcatenationPlugin(),
	]
})

// 开启包分析的情况时， 给 webpack plugins添加 webpack-bundle-analyzer 插件
// `npm run build --report`
if (process.env.npm_config_report) {
    // https://github.com/th0r/webpack-bundle-analyzer
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;
