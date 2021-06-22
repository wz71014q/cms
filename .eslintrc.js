module.exports = {
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    },
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'jest'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    mocha: true
  },
  // globals: {
  //   React: true
  // },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types']
  },
  rules: {
    // 0代表忽略，1代表警告，2代表错误
    'camelcase': [2, {allow: ['\w*_\w*']}],
    'no-var': 0, // 禁止使用var
    'prefer-const': 2, // 优先使用const，有重新赋值的需求用let
    'object-shorthand': 2, // 对象内部属性尽量使用简写
    'quote-props': [2, 'as-needed'], // 只用引号引无效标识符的属性
    'array-callback-return': 2, // 数组的方法应该明确标注返回值
    'prefer-destructuring': 0, // 尽量使用解构赋值 , 待讨论, 如this.myArray = tempArr[0]
    'max-len': [2, 100, { ignoreUrls: true }], // 每行内容不能超过100个字符，忽略检查URL
    'prefer-template': 2, // 字符串的拼接尽量使用ES6模板字符串
    'template-curly-spacing': 2, // 模板字符串字符串与大括号之间加空格
    'prefer-rest-params': 2, // 方法内的参数优先使用...而不是arguments
    'no-param-reassign': 1, // 尽量不要去修改原参数，防止更改原始引用类型的值
    'prefer-spread': 2, // 优先使用...来调用可变参数
    'object-property-newline': 2, // 对象内的元素单独拆分一行
    'prefer-arrow-callback': 2, // 回调函数优先使用箭头函数
    'no-confusing-arrow': [2, { allowParens: true }], // 避免将比较运算符于箭头函数混淆
    'dot-notation': 2, // 引用对象内非变量属性应尽量使用.
    'no-multi-assign': 2, // 禁止链式赋值
    'no-nested-ternary': 2, // 禁止嵌套三元表达式
    'no-mixed-operators': 2, // 避免多个运算符混乱，多个运算符时适当加()区分
    'nonblock-statement-body-position': 2, //多行的代码块需要用大括号括起来
    'newline-per-chained-call': 2, // 两个以上的链式调用要分多行
    'func-names': [2, 'as-needed'], // 方法需要名称时必须命名
    'semi': 2,
    'arrow-body-style': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  }
};
