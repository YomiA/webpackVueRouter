import Vue from 'vue'

// 1. 导入vue-router包
import VueRouter from 'vue-loader'

// 2. 手动安装 VueRouter
Vue.use(VueRouter)

// 导入 app 组件，这里要注意路径的问题
import app from './App.vue'
// 导入 account 组件
import account from './main/account.vue'
// 导入 goodslist 组件
import goodsList from './main/goodslist.vue'

// 3. 创建一个路由对象
var routerObj = new VueRouter({
    routes:[
        { path:'/account',component:account },
        { path:'/goodslist',component:goodsList}
    ]
})

var vm = new Vue({
    el:'#app',
    render:function (createElment) {
        return createElment(app)
    },
    // 4. 将路由对象 挂载 到 vm 上
    router: routerObj
})