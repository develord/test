<template>
  <div class="page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-205 menu-layer elementor-default elementor-kit-16 elementor-page elementor-page-205">
    <div class="boxed_wrapper">
      <Header />
      <!-- router Component -->
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>
  </div>
</template>
<script>
import Header from '~/components/front/Header'
export default {
  name: 'Default',
  components: {
    Header
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
@import '~/assets/scss/css-header.css';
</style>
