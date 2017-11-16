<template>
  <div  style="width:100px;height:100px;border:1px solid #000" @click="gogo">
  </div>
</template>

<script>
export default {
  methods: {
    gogo() {
      this.$parent.$emit('abc',12)
    }
  }
}
</script>

<style>

</style>
