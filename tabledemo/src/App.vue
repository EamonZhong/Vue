<template>
  <div id="app">
  <keep-alive>
    <router-view>

    </router-view>
  </keep-alive>   
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,html{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width:100%;
}
</style>
