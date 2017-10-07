<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          
        </el-tabs>
      </el-col>
      <el-col >我是产品栏</el-col>
    </el-row>
  </div>
</template>

<script>
export default{
  name:'pos',
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    document.getElementById('order-list').style.height=orderHeight+'px';
  }
}
</script>

<style scoped>
.pos-order{
  background-color: #F9FAFC;
  border-right: 1px solid #C0CCDA;
}
</style>

