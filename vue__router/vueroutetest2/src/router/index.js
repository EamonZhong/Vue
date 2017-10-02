import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '../components/Hi1'
import Hi2 from '../components/Hi2'
import Params from '../components/params'
import Error from '../components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component:Hello,
      alias:'/home1'
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/Hi1',
      component:Hi1,
      alias:'/eamonzz'
    },
    {
      path:'*',
      component:Error
    }
  ]
})
