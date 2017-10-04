<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.count}}--{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations,mapGetters} from 'vuex'
    export default {
        data(){
            return{
                msg:'Hello Vuex'
            }
        },
        //方法一：利用computed直接使用仓库中的值
        // computed:{
        //     count(){
        //         return this.$store.state.count
        //     }
        // },
        //方法二：利用箭头函数
        // computed:mapState({
        //     count:state=>state.count        
        // }),
        computed:{...mapState(['count']),...mapGetters(['count'])},
        methods:mapMutations(['add','reduce']),
        store
    }
</script>