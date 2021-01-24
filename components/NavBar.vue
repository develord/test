<template>
  <v-system-bar
    app
    height="60"
    color="blue darken-4"
  >
    <v-app-bar-nav-icon @click="hideDrawer" />

    <v-toolbar-title>Dashbord</v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          @click="logout()"
        >
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-system-bar>
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
      this.$router.push({ name: 'auth' })
    },
    switchMode () {
      this.$store.dispatch('switchMode')
    }
  }
}
</script>
