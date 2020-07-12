<template>
  <v-app id="inspire">
    <nav-bar />
    <side-bar />
    <nuxt />
  </v-app>
</template>

<script>
import SideBar from '~/componants/sidebar.vue'
import NavBar from '~/componants/Navbar'

export default {
  name: 'Back',
  components: {
    SideBar,
    NavBar
  },
  data: () => {
    return {
      snackbar: {}
    }
  },
  computed: {
    newSnackbar () {
      return this.$store.state.snackbar
    }
  },
  watch: {
    newSnackbar (val) {
      // create snackbar
    }
  },
  methods: {
    pushNotif () {
      this.$store.dispatch('pushNotif', {
        message: 'test message'
      })
    }
  }
}
</script>
