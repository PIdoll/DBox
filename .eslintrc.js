// http://eslint.org/docs/user-guide/configuring
// http://www.jianshu.com/p/0c7f1764d753
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
  },
  extends: [
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    'standard',
    // https://github.com/feross/eslint-config-standard-react
    'standard-react'
  ],
  // https://github.com/yannickcr/eslint-plugin-react
  plugins: [
    'react',
    'babel',
    'promise'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 允许分号
    'semi': [0],
    // 忽略缩进配置
    'indent': 0,
    'no-tabs': 0,
    'no-unused-vars': [2, {
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none"
    }],
    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, {
      "max": 100
    }],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    'space-before-function-paren': [0],
    //"eol-last": 0, //文件以单一的换行符结束
    "handle-callback-err": 0,
    "keyword-spacing": ["error", { "before": true }],
    'react/prop-types': 0,
    'comma-dangle':0,

    'no-callback-literal':0
  }
}
