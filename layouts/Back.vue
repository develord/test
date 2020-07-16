<template>
  <v-app id="inspire" :dark="isDark">
    <nav-bar />
    <side-bar />
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
  </v-app>
</template>

<script>
import colors from 'vuetify/lib/util/colors'
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
      snackbar: {}
    }
  },
  computed: {
    isDark () {
      return this.$store.state.dark
    },
    newSnackbar () {
      return this.$store.state.snackbar
    },
    themeMap () {
      return this.$store.state.themeMap
    }
  },
  watch: {
    newSnackbar (newVal) {
      this.snackbar = newVal
    },
    themeMap (newVal) {
      this.$vuetify.theme = {
        light: {
          primary: colors.blue.lighten2,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3
        },
        dark: {
          primary: colors.red.accent1,
          secondary: colors.grey.darken4,
          accent: colors.shades.black4,
          error: colors.red.accent1
        }
      }
    }
  }
}
</script>
