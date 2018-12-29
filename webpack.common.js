const path = require('path');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  // 项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    bundle: APP_PATH,
    vendor: [
      'array-tree-filter',
      'classnames',
      'create-react-class',
      'css-animation',
      'enquire-js',
      'gregorian-calendar',
      'gregorian-calendar-format',
      'moment',
      'object.omit',
      'omit',
      'omit.js',
      'prop-types',
      'rc-animate',
      'rc-calendar',
      'rc-cascader',
      'rc-checkbox',
      'rc-collapse',
      'rc-dialog',
      'rc-drawer',
      'rc-dropdown',
      'rc-editor-mention',
      'rc-form',
      'rc-input-number',
      'rc-menu',
      'rc-notification',
      'rc-pagination',
      'rc-progress',
      'rc-scroll-anim',
      'rc-select',
      'rc-slider',
      'rc-steps',
      'rc-switch',
      'rc-table',
      'rc-tabs',
      'rc-time-picker',
      'rc-tooltip',
      'rc-tree',
      'rc-tree-select',
      'rc-trigger',
      'rc-upload',
      'react',
      'react-dom',
      'react-lazy-load',
      'shallowequal',
      'uglifyjs-webpack-plugin',
      'warning'
  ]
  // 输出的文件名 合并以后的js会命名为bundle.js
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[chunkHash:5].js',
  },
  externals: {
    // 键：表示 导入包语法 from 后面跟着的名称
    // 值：表示 script 引入JS文件时，在全局环境中的变量名称
    'react': 'React',
    'react-dom': 'ReactDOM',
    'classnames': 'classnames'
  },
  resolve: {
    // 自动补全的拓展名
    extensions: ['.js', '.jsx', '.json', '.less'],
    // 路径别名
    alias: {
      'assets': path.resolve(__dirname, 'assets'),
      'templates': path.resolve(__dirname, 'src/templates'),
      'components': path.resolve(__dirname, 'components'),
      'dbox-ui': path.resolve(__dirname, 'components'),
    }
  },
  // devserver 配置
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true,
    hot: true,
  },
  // css 处理
  module: {
    rules: [
      // exclude 排除，不需要编译的目录
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
			{
				test: /\.(less|css)$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
				}, 'css-loader', {
          loader: 'postcss-loader',
          options: { // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: (loader) => [
                  require('autoprefixer')(), // CSS浏览器兼容
              ]
          }
        }, {
					loader: 'postcss-loader',
				}, 'less-loader']
			},
      {
        test: /\.(png|svg|jpg|gif|webp|ico)$/,
        use: [
           'file-loader'
         ],
         exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10000
          }
        }],
        include: path.resolve(__dirname, 'assets/fonts')
      },
      {
        test: /\.(jsx|js)$/,
        use: 'eslint-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  optimization: {
    runtimeChunk: {
        name: 'manifest'
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    }
},
  plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[contenthash:12].css' // use contenthash *
      }),
    ],
};
