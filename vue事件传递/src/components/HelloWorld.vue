<template>
  <div class="hello" style="width:300px;height:300px;border:1px solid #000">
    <card1 @abc="changess"></card1>
    {{msg}}
  </div>
</template>

<script>
import card1 from './card1'
export default {
  name: 'HelloWorld',
  components: {
    card1
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods :{
    changess(item) {
      this.msg = item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
