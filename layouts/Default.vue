<template>
  <div class="page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-205 menu-layer elementor-default elementor-kit-16 elementor-page elementor-page-205">
    <div class="boxed_wrapper">
      <!-- router Component -->
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Default',
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Josefin%20Sans%3A300%2C400%2C600%2C700%7CMuli%3A300%2C400%2C500%2C600%2C700%2C800%2C900%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%20Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;subset=latin%2Clatin-ext&amp;display=swap'
      }
    ]
  }
}
</script>
<style>
@import '~/assets/scss/css-bootstrap.css';
@import '~/assets/scss/css-global.css';
@import '~/assets/scss/css-color.css';
@import '~/assets/scss/css-responsive.css';
@import '~/assets/scss/css-style.css';
@import '~/assets/scss/css-styles.css';
@import '~/assets/scss/css-header.css'
</style>
