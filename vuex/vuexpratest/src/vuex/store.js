import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//state是一种状态对象
const state = {
    count:1
}
const mutations = {
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}

export default new Vuex.Store({
    state,
    mutations
})