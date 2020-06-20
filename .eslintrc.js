module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 4],
        // 禁用函数名和括号之间必须有空格
        'space-before-function-paren': 0,
        // 控制vue文件script标签缩进
        'vue/script-indent': ['error', 4, {'baseIndent': 1}]
    },
    // 对vue文件的script标签关闭indent缩进规则
    overrides: [{
        'files': ['*.vue'],
        'rules': {
            'indent': 'off'
        }
    }]
}
