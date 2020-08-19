<template>
  <el-menu
    default-active="1"
    router
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="overview">
      <i class="el-icon-pie-chart" />
      <span slot="title">Overview</span>
    </el-menu-item>
    <el-menu-item index="posts">
      <i class="el-icon-document" />
      <span slot="title">Menage Posts</span>
    </el-menu-item>
    <el-menu-item index="category">
      <i class="el-icon-setting" />
      <span slot="title">Menage Group Page</span>
    </el-menu-item>
    <el-menu-item index="users">
      <i class="el-icon-user" />
      <span slot="title">Menage Users</span>
    </el-menu-item>
    <el-menu-item index="mailing">
      <i class="el-icon-message" />
      <span slot="title">Mailing</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
