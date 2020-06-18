复习：在普通网页中如何使用Vue
1. 使用 script 标签，引入 Vue 的包
2. 在 index 页面中，创建一个id为 app 的 div 容器
3. 通过 new Vue 得到一个 vm 的实例

回顾：包的查找规则
1. 找项目根目录中有没有 node_modules 的文件夹
2. 在 node_modules 中根据包名，找到对应的 Vue 文件夹
3. 在 vue 文件夹中，找一个叫做 package.json 的包配置文件
4. 在 package.json 文件中，查找一个 main 属性[main 属性指定了这个包被加载的时候的入口文件]

总结梳理：webpack 中如何使用 vue：
1. 安装 vue 的包：cnpm i vue -S
2. 由于在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件(另外的xxx.vue文件),所以需要安装能解析这种文件的 loader
   cnpm i vue-loader vue-template-compiler -D
3. 安装完之后，还要去配置文件 webpack.config.js 中配置下{ test:/\.vue$/,use:'vue-loader'},但是在配置的时候
   从Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用,而这个插件就是 vue-loader/lib/plugin,所以要先
   在上面定义 const VueLoaderPlugin = require('vue-loader/lib/plugin');
4. 在 main.js 中导入 vue 模块 import Vue from 'vue' 这个 Vue 是构造函数，最好是大写
5. 定义一个以 .vue 结尾的组件,其中,这个组件由三部分组成：template  script  style
6. 使用 import login from './login.vue' 导入这个以 .vue 结尾的组件
7. 创建 vm 实例,渲染组件要用 render 函数
   var vm = new Vue({el:'#app',data:{},render:c => c(login)})
8. 在 index.html 中创建一个 id 为 app 的 div 元素,作为我们 vm 实例要控制的区域

在 Node 中向外暴露成员(导出) 和 导入文件
1. modules.exports 和 exports 来向外暴露成员
2. 使用 var 名称 = require('模块标识符')

在 ES6 中 导入 和 导出 模块
1. 使用 import 模块名称 from '模块标识符' 或者 导入 样式 的时候 使用 import '表示样式的路径' 来导入模块
2. 使用 export default 和 export 向外暴露成员(导出文件)

export default 注意事项
1. 注意：export default 向外暴露成员时，可以使用任意的变量来接收，跟你源文件的变量无关
2. 注意：在一个模块中，export default 只允许 向外 暴露一次
3. 注意：在一个模块中，可以同时使用 export default 和 export 向外暴露成员

export 的注意事项
1. 注意：使用 export 向外暴露成员，只能使用 {} 的形式来接收，叫做[按需导出]
2. 注意：export 可以向外暴露多个成员，同时，如果某些成员，我们在 import 的时候，不需要，则可以不在{}中定义
3. 注意：使用 export 导出的成员，必须严格按照 导出 时候的名称，来使用 {} 按需接收
4. 注意：使用 export 导出的成员，如果就想换个 名称 来接收，可以使用 as 来起别名；