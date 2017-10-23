import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Home from '@/components/page/Home/Home'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path: '/pos',
      name: 'Pos',
      component: Pos
    },
  ]
})
