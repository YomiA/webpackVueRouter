在 webpack 中使用 Vue Router:
1. 在 main.js 中导入 vue ，然后引出一个 vue 实例 (import Vue from 'vue')
2. 然后再写一个组件，再在 main.js 中导入这个组件 (import app from './App.vue')
   导入vue组件的时候，记得路径要给对，不然会出错
3. 就是安装 vue-router 插件使用 cnpm i vue-router -S
4. 安装完成之后，那就要拿来用了，在 main.js 文件中，在导入 vue 的下方，我们也要导入 vue-router 包
   import VueRouter from 'vue-router',导入之后，那么就要手动安装 VueRouter 使用 use
   Vue.use(VueRouter)
5. 创建路由对象，var routerObj = new VueRouter({routes:[{path:'路径'，component:对应的导入的组件}]})
6. 把一些 路由 组件 弄到 路由对象里面去，最后再把 路由对象 给挂载到 vm 中去，也就是页面中
7. 挂载到 vm 中去 的时候，因为 render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把路由的
   router-view 和 router-link 直接写到 el 所控制的元素中去