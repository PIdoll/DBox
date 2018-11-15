const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const glob = require('glob-all');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


const common = require('./webpack.common.js');

 let webpackConfig = merge(common, {
	devtool: '#source-map',
	module: {
		rules: [
			{
				test: /\.(less|css)$/,
				use: ExtractTextPlugin.extract({
			        fallbackLoader: 'style-loader',
			        // 如果需要，可以在 less-loader 之前将 resolve-url-loader 链接进来
				use: [
					'css-loader', {
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								autoprefixer({add: true, remove: true, browsers: ['>0%']}),
								cssnano()
								]
						}
					},
					'less-loader'
					]
				})
			}
		]
	},
	plugins: [
	// 会自动生成一个html文件
	new HtmlwebpackPlugin({
		filename: 'dbox.html',
		template: 'dbox.html',
		inject: true,
		minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // 更多选项:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
        // 必须通过 CommonsChunkPlugin一致地处理多个 chunks
        chunksSortMode: 'dependency'
	}),
	// webpack 复制文件和文件夹的插件
    // https://github.com/kevlened/copy-webpack-plugin
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
	// 压缩混淆js文件
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		comments: false,
		sourceMap: true
	}),
	// 删除掉未引用的export代码
	new UglifyJSPlugin({
		sourceMap: true
	}),
	// 提取 css
    new ExtractTextPlugin({
        filename: 'main.[contenthash].css',
        allChunks: true
    }),
    new PurifyCSSPlugin({
      //  去除无用的css样式
      paths: glob.sync([
        path.join(__dirname, './*.html'),
        path.join(__dirname, './index.html')
      ])
    }),
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
	// definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
	// 此处，插入适当的环境
	// https://webpack.js.org/plugins/define-plugin/
	new webpack.DefinePlugin({
		'process.env': {
		 'NODE_ENV': JSON.stringify('production')
		}
	})
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
