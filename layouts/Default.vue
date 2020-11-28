<template>
  <div class="page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-205 menu-layer elementor-default elementor-kit-16 elementor-page elementor-page-205">
    <div class="boxed_wrapper">
      <Header />
      <!-- router Component -->
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '~/components/front/Header'
import Footer from '~/components/front/Footer'
export default {
  name: 'Default',
  components: {
    Header,
    Footer
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
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>

<style lang="scss" scoped>
  $animation-speed-default: 0.25s !default;
  img[lazy=loading] {
    width: 100%;
    height: auto;
    filter: blur(4);
  }
  img[lazy=error] {
    width: 100%;
    height: auto;
    filter: blur(4);
  }
  img[lazy=loaded] {
    width: 100%;
    height: auto;
    filter: blur(0);
  }
  /*
  or background-image
  */
  .is-lasy[lazy=loading] {
    width: 100%;
    height: auto;
    filter: blur(4);
    transition: filter ease-out $animation-speed-default;
  }
 .is-lasy[lazy=error] {
    filter: blur(0);
  }
 .is-lasy[lazy=loaded] {
    filter: blur(0);
  }

</style>
