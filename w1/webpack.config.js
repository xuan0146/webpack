module.exports = {
    // 入口文件指定
    entry: './src/index.js',
    // 输出资源配置
    output: {
        filename: 'bundle.js'
    },
    // 打包模式：develop-开发，production-生产
    mode: 'development',

    // dev-server配置
    devServer: {
        publicPath: '/dist'
    }
}