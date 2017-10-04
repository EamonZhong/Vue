import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//state是一种状态对象
const state = {
    count:1
}
const mutations = {
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}
const getters = {
    count:function(state){
        return state.count+=100
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})