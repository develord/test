<template>
  <div id="layout-container">
    <!-- navBar Component -->
    <el-container>
      <nav-bar :drawer="collapsed" @update:drawer="collapsed = $event" />
    </el-container>
    <el-container class="main-container">
      <!-- sideBar Component -->
      <side-bar :drawer="collapsed" />
      <el-main>
        <!-- router Component -->
        <el-page-header :content="pageTitle" class="header-action" @back="goBack" />
        <transition name="fade" mode="out-in">
          <nuxt style="padding-bottom: 50px !important;" />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar.vue'
import NavBar from '~/components/NavBar.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '~/assets/css/main.scss'
import elementUi from '~/plugins/element-ui'

export default {
  name: 'Back',
  components: {
    SideBar,
    NavBar
  },
  data: () => {
    return {
      snackbar: {},
      collapsed: true,
      sysUserName: 'Amine',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  computed: {
    isDark () {
      return this.$store.state.dark
    },
    newSnackbar () {
      return this.$store.state.snackbar
    },
    pageTitle () {
      return this.$route.name
    }
  },
  watch: {
    newSnackbar (newVal) {
      this.snackbar = newVal
    },
    isDark (newVal) {
      this.$vuetify.theme.dark = newVal
    }
  },
  beforeCreate () {
    elementUi()
  },
  methods: {
    handleSelect (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    },

    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
  #layout-container {
    padding-bottom: 50px;
  }
  .main-container {
    padding-bottom: 50px;
  }
</style>
