<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul class="todos">
      <li v-for="(todo, index) in todos" :key="index" :id="index"> 
        <label>{{todo.value}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     title: 'vue-todos',
     todos:  [
       {value: '阅读一本关于前端开发的书', done: false},
       {value: '补充示例代码', done: true},
       {value: '写心得' , done: false}
     ],

    }
  }
}
</script>

<style scoped lang="less">
@import './assets/site.less';
@import './assets/todo.less';

</style>
