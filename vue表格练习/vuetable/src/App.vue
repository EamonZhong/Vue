<template>
  <div id="app">
    <Tablede></Tablede>
  </div>
</template>

<script>
import Tablede from './components/Table'

export default {
  name: 'app',
  components: {
    Tablede
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px auto;
  width: 80%;
  padding: 20px;
  height: 650px;
  border: 1px solid #000;
}
</style>
