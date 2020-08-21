<template>
  <el-container style="height: 662px;">
    <!-- sideBar Component -->
    <el-main>
      <!-- router Component -->
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'Default'
}
</script>
<style lang="scss">
  html, body, #__layout, #__nuxt {
    height: 100% !important;
  }

</style>
