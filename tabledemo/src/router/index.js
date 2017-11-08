import Vue from 'vue'
import Router from 'vue-router'
// 组件引入
import Home from '@/components/Home'
import Table1 from  '@/components/item/Table1' 
import Table2 from  '@/components/item/Table2' 
import Table3 from  '@/components/item/Table3' 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/table1',
      children:[
        { path: '/table1', component: Table1, name: '表1',},
        { path: '/table2', component: Table2, name: '表2',},
        { path: '/table3', component: Table3, name: '表3',},
      ]
    },
  ]
})
