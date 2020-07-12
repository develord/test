<template>
  <v-footer app>
    <span>{{ footerLabel() }}</span>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  methods: {
    footerLabel () {
      return `Test Application By Amine Fredj @ ${new Date().getFullYear()}`
    }
  }
}
</script>
