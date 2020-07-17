<template>
  <v-app-bar
    app
    clipped-left
    class="blue-grey darken-3"
  >
    <v-app-bar-nav-icon class="white--text" @click.stop="hideDrawer()" />
    <v-toolbar-title class="white--text">
      Application
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon @click="switchMode()">
      <v-icon class="white--text">
        mdi-brightness-4
      </v-icon>
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
  props: {
    drawer: {
      type: Boolean,
      required: true
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
<style scoped>

</style>
