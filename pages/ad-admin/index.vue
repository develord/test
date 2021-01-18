<template>
  <div>
    <client-only>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Welcome Dashbord</span>
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
