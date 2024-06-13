import Vue from 'vue'
import VueRouter from 'vue-router'

// import views里面的文件在这下面



Vue.use(VueRouter)


// 增加自己的route配置
const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
]



// 固定不变
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

