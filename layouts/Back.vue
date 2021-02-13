<template>
  <v-app id="inspire">
    <!-- navBar Component -->
    <side-bar :drawer="collapsed" />
    <nav-bar :drawer="collapsed" @update:drawer="collapsed = $event" />
    <!-- router Component -->
    <v-main>
      <v-container
        class="py-8 px-6"
      >
        <nuxt style="padding-bottom: 50px !important;" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import SideBar from '~/components/SideBar.vue'
import NavBar from '~/components/NavBar.vue'
import 'element-ui/lib/theme-chalk/index.css'
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
    roles () {
      return this.$store.state.listeRole
    },
    newSnackbar () {
      return this.$store.state.snackbar
    },
    pageTitle () {
      return this.$route.name
    }
  },
  watch: {
    roles (newVal) {
      const permission = newVal.filter(el => el.name === this.$store.state.auth.role.name)
      this.$store.dispatch('auth/setPermissions', permission[0].permissions.map(el => el.name))
    },
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
  mounted () {
    this.$store.dispatch('getRoles')
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

<style >
body {
  margin: 0;
}
</style>
