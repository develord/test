<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    :dark="isDark"
    primary
  >
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: 'Sidebar',
  data: () => ({
    drawer: null
  }),
  computed: {
    isDark () {
      return this.$store.state.dark
    }
  }
}
</script>
