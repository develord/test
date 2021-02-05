<template>
  <div>
    <client-only>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Users List</span>
          <el-button style="float: right;" type="success">
            Add new user
          </el-button>
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
