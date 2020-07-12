<template>
  <Nuxt />
</template>
<script>
export default {
  name: 'Default',
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:500,600,700,900&display=swap' }
      ]
    }
  }
}
</script>
<style lang="scss">
  html, body, #__layout, #__nuxt {
    height: 100% !important;
  }

</style>
