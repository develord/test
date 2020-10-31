<template>
  <div>
    <client-only>
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
    }
  }
}
</script>
