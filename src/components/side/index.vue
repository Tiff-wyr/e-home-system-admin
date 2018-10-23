<template>
    <div class="side">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router="true"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <span>管理员</span>
          </template>
            <el-menu-item index="/addUser">添加管理员</el-menu-item>
            <el-menu-item index="/userList">管理员列表</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
        <template slot="title">
          <span>新闻管理</span>
        </template>
        <el-menu-item index="1-1">富文本</el-menu-item>
        <el-menu-item index="1-2">哈哈</el-menu-item>
      </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>Table</span>
          </template>
          <el-menu-item index="1-1">拖拽Table</el-menu-item>
          <el-menu-item index="1-2">Table编辑</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
.side{
  min-height: 100vh;
  background:#545c64;
  /deep/ .el-menu{
    border-right: none;
  }
}
</style>
