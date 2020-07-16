<template>
  <v-app-bar
    app
    clipped-left
    color="secondary"
    :dark="isDark"
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer />
    <v-btn icon @click="switchMode()">
      <v-icon>mdi-brightness-4</v-icon>
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          slot="activator"
          icon
          large
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-avatar :size="40" color="grey lighten-4">
            <img src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg" alt="Admin">
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="logout()">
          <v-list-item-title pl-3 pr-3>
            Logout
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Navbar',
  data: () => {
    return {
      drawer: null
    }
  },
  computed: {
    isDark () {
      return this.$store.state.dark
    }
  },
  methods: {
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
<style scoped>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: var(--v-primary-base) !important;
}
</style>
