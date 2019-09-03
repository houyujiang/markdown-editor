import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  // 路由配置项
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
