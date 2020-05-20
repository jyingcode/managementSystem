<template>
<div class="silder-bar">
<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      >
      <el-menu-item index="2" @click="jump('/index')">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="3" @click="jump('/list')">
        <span slot="title">订单列表</span>
      </el-menu-item>
      <el-menu-item index="4" @click="jump('/add')">
        <span slot="title">添加订单</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</div>
  

</template>

<script>
export default {
methods: {
      jump(path) {
        this.$router.push(path)
      },
    }
 }
</script>

<style scope>
.silder-bar{
    float: left;
    width: 200px;
    height: 100%;
    
}
 .el-menu-item {
    font-size: 20px !important;
 }
</style>