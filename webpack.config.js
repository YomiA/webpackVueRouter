// Node语法 path 模块
const path = require('path');

// 导入刚刚安装的包"html-webpack-plugin"，也就是在内存中生成的 html 页面的插件
// 只要是插件，都要放到 plugin 节点中去
// 这个插件的俩个作用：
// 1.自动在内存中根据指定页面生成一个内存的页面
// 2.自动把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');

// Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用,而这个插件就是 vue-loader/lib/plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 这个配置文件，其实就是一个 JS 文件，通过 node 中的 模块操作，向外暴露了一个 配置对象
module.exports = {
// 在配置文件中，需要手动指定 入口(要打包的文件) 和 出口(存放打包好的文件的目录)
    entry: path.join(__dirname, './src/main.js'),// 入口，表示要使用 webpack 打包哪个文件
    output: { //输出文件(出口)相关的配置
        path: path.join(__dirname, './dist'),//指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' // 这是指定的输出的文件名称
    },
    devServer: {// 这是第二种方法设置 webpack-dev-server 配置方法，第一种方法见 package.json 文件的 dev2
        open: true,// 默认直接打开浏览器
        port: "3500",// 设置端口号
        contentBase: "src",// 设置默认打开的根路径
        hot: true// 设置热更新
    },
    plugins: [
        new htmlWebpackPlugin({// 创建一个在 内存中 生成 HTML 页面的插件
            //根据指定的 模板 页面生成一个内存中的 HTML 页面
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"// 指定生成的页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: {// 这个节点，用于配置所有 第三方模块 加载器
        rules: [// 所有第三方模块的 匹配规则
            //test:表示匹配到的 .css 后缀名的文件 ，use表示用什么加载器处理
            {test: /\.css$/, use: ['style-loader', 'css-loader']},// 配置处理 .css 文件的第三方 loader 规则
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},// 配置处理 .less 文件
        //    第三方的 loader 规则
            {test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},// 配置处理 .scss 文件的第三方 loader 规则
            { test:/\.vue$/,use:'vue-loader'}, //处理 .vue 文件的loader
        ]
    },
    resolve: {
        alias: { //修改 vue 被导入的包的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}

// 当我们在 控制台 直接输入 webpack 命令执行的时候，webpack 做了以下几步：
// 1.首先，webpack 发现，我们并没有通过命令的形式，给它指定 入口 和 出口；
// 2.webpack 就会去 项目的根目录 中，查找一个叫做 ‘webpack.config.js’ 的配置文件
// 3.当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中导出的 配置对象
// 4.当webpack拿到配置对象后，就拿到了配置对象中指定的 入口 和 出口，然后进行打包构建