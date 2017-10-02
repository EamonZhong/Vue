<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>newsId:{{$route.params.newsId}}</p>
    <p>newstitle:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'params page'
    }
  },
    beforeRouteEnter: (to, from, next) => {
      console.log("准备进入params路由模板");
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("准备离开params路由模板");
      next();
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
