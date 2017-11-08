<template>
  <el-container class="containerbox">
    <el-header>Element 表格练习汇总</el-header>
    <el-container>
      <el-aside width="200px" style="height:100%">
        <el-col style="height:100%">
          <el-menu class="el-menu-vertical-demo" router :default-active="$route.path" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/table1" >
              <i class="el-icon-menu"></i>
              <span slot="title">表格一</span>
            </el-menu-item>
            <el-menu-item index="/table2">
              <i class="el-icon-menu"></i>
              <span slot="title">表格二</span>
            </el-menu-item>
            <el-menu-item index="/table3">
              <i class="el-icon-setting"></i>
              <span slot="title">表格三</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
  ul,li{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  .el-header {
    height: 60px;
    line-height: 60px;
  }
  .el-menu {
    height: 100%;
  }
  .el-menu-item {
    text-align: left;
  }
  .containerbox {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 100%;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
