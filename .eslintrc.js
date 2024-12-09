module.exports = {
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // 添加 TypeScript 推荐规则
    'plugin:prettier/recommended'
  ],
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint' // 添加 TypeScript 插件
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020, // 支持最新的 ECMAScript 版本
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect' // 自动检测所安装的 React 版本
    }
  },
  rules: {
    // 可以在这里自定义规则
    'prettier/prettier': 'error',
    '@typescript-eslint/ no-unused-vars': false
  }
}
