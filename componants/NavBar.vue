<template>
  <el-header style="width: 100%;text-align: right; font-size: 12px">
    <el-dropdown>
      <el-avatar size="medium" shape="square" style="vertical-align: middle;" src="https://media.istockphoto.com/vectors/people-user-with-setting-vector-icon-vector-id991051928" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click="logout()">
          Logout
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>

export default {
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    hideDrawer () {
      this.$emit('update:drawer', !this.drawer)
    },
    logout () {
      this.$store.commit('auth/LOGOUT_USER')
      this.$router.push({ name: 'index' })
    },
    switchMode () {
      this.$store.dispatch('switchMode')
    }
  }
}
</script>
<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #fff;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
