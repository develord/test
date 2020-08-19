<template>
  <div>
    <client-only>
      <el-page-header content="General" @back="goBack" />
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Overview</span>
        </div>
        <div class="text item" />
      </el-card>
    </client-only>
  </div>
</template>
<script>

export default {
  layout: 'Back',
  middleware: 'auth',
  data: () => {
    return {
    }
  },
  methods: {
    goto (url) {
      this.$router.push({ name: url })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-top: 25px;
    width: 100%;
  }
</style>
