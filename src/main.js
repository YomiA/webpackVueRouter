// 这是js入口文件

// 如何在 webpack 构建的项目中，使用 Vue 进行开发
//1. 也要先导入 vue 的包  使用命令 npm i vue -S 来导入 vue  包
//2. 注意：在 webpack 中，使用 import Vue from 'vue' 导入的 vue 构造函数，功能不完整，只提供了 runtime-only
//        的方式，并没有提供像网页中那样的使用方式

// 如果想要有提供网页中的那样使用方式，那么我们必须要导入 vue.js 这个完整的包 有三种方法：

// 1. 修改 ../node_modules/vue 这里面的 package.json 配置文件里面的 main 属性

// 2. 就是把导入的包修改成你要的那个 vue.js 的 路径

// 3. 就是去我们自己的配置文件里面修改 webpack.config.js 这边还是 import Vue from 'vue'

// 4. 在 webpack.config.js 里面添加一个 resolve 属性 跟 plugins 同级别

import Vue from 'vue'

// import Vue from '../node_modules/vue/dist/vue.js'

// var login ={
//     template:'<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }

// 想要将 login.vue 组件渲染到页面中去
// 1. 导入 login 组件
import login from './login.vue'
// 2. 默认 webpack 无法打包 .vue 文件，需要安装 相关的 第三方 loader
// cnpm i vue-loader vue-template-compiler -D
// 然后再去配置文件中，新增 loader 配置项 { test:/\.vue$/,use:'vue-loader'}
// 这时候还是会报那个 runtime-only 错误 所以这时候，我们不能用 components 注册组件，我们应该改成 render 来渲染


var vm = new Vue({
    el:"#app",
    data:{
        msg:123
    },
    // components:{
    //     login:login
    // }
    // 在 webpack 中，如果想要通过 vue ，把一个组件放到页面中去展示，vm 实例中的 render函数 可以实现，而components 却不行
    // render:function (createElement) {
    //     return createElement(login)
    // }
    // 简写如下：
    render: c => c(login)

})