<template>
  <el-menu
    default-active="1"
    router
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item v-for="m in menuList" :key="m.href" :index="m.href">
      <i :class="m.icon" />
      <span slot="title">{{ m.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      menuList: require('~/assets/menu.json')
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
