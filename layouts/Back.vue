<template>
  <v-app id="inspire">
    <client-only>
      <nav-bar id="#v-step-0" :drawer="drawer" @update:drawer="drawer = $event" />
      <side-bar :drawer="drawer" />
      <nuxt />
      <v-snackbar
        :value="snackbar.show"
        :bottom="snackbar.position"
        :right="snackbar.right"
        :left="snackbar.left"
        :timeout="snackbar.timeout"
        :color="snackbar.color"
      >
        <span v-html="snackbar.text" />
        <v-btn
          v-if="snackbar.action"
          color="pink"
          flat
          @click="snackbar.action()"
        >
          Refresh
        </v-btn>
      </v-snackbar>
    </client-only>
  </v-app>
</template>

<script>
import SideBar from '~/componants/Sidebar.vue'
import NavBar from '~/componants/Navbar.vue'

export default {
  name: 'Back',
  components: {
    SideBar,
    NavBar
  },
  data: () => {
    return {
      snackbar: {},
      drawer: true
    }
  },
  computed: {
    isDark () {
      return this.$store.state.dark
    },
    newSnackbar () {
      return this.$store.state.snackbar
    }
  },
  watch: {
    newSnackbar (newVal) {
      this.snackbar = newVal
    },
    isDark (newVal) {
      this.$vuetify.theme.dark = newVal
    }
  }
}
</script>
