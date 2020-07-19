<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    class="blue-grey darken-4"
  >
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon class="white--text">
            mdi-view-dashboard
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text">
            Dashboard
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  }

}
</script>
