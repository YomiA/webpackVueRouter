<template>
<!--这是组件模板-->
    <div>
        <h1>这是登陆组件，使用 .vue 文件定义出来的 ---- {{ msg }}</h1>
    </div>
</template>

<script>
// 这是业务逻辑
    export default { // 利用export default导出一个对象
        data(){ // 组件中的 data 必须是一个 function 函数
            return{
                msg:110920120020
            }
        },
        methods:{
            show(){
                console.log(" 调用了 login.vue 中的 show 方法")
            }
        }
    }
</script>

<style>
/*样式*/
</style>