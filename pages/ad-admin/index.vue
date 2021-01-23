<template>
  <div>
    <client-only>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Welcome to SharmaLab Admin</span>
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
  }
}
</script>
