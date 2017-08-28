import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
// import './common/stylus/index.styl'
Vue.use(VueRouter);
/* eslint-disable no-new */
const routes = [
    {
        path: '/goods',
        component:goods
    },
    {
        path:'/ratings',
        component: ratings
    },
    {
        path:'/seller',
        component: seller
    }
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
});

new Vue({
    router,
    template: '<App/>',
    components: {
      App
    }
}).$mount('#app');

router.push('goods')