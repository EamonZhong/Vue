<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goAhead">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link>|
    <router-link to="/params/198/eamon website is very good">params</router-link>|
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/goParams/918/I like vue.js">goParams</router-link>|
    <router-link to="/Hi1">Hi1</router-link>|
    <router-link to="/eamonzz">eamonzz</router-link>|
    <router-link to="/home1">home1</router-link>
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>   
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goBack:function(){
      this.$router.go(-1);
    },
    goAhead:function(){
      this.$router.go(1);
    },
    goHome:function(){
      this.$router.push('/hi1');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0px;
}
.fade-enter-active{
  transition: all 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: all 0.5s;
}
</style>
