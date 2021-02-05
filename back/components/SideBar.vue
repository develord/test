<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
  >
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="https://www.w3schools.com/howto/img_avatar.png">
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Jane Smith</v-list-item-title>
        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list>
      <v-list-item
        v-for="(m,i) in menuList"
        :key="i"
        link
        @click="goTo(m.href)"
      >
        <v-list-item-icon>
          <v-icon>{{ m.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ m.title }}</v-list-item-title>
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
  },
  data () {
    return {
      isCollapse: false,
      menuList: require('~/assets/menu.json')
    }
  },
  methods: {
    goTo (link) {
      this.$router.push({ path: link })
    },
    handleOpen (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    }
  }
}
</script>
