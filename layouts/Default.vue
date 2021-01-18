<template>
  <div class="page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-205 menu-layer elementor-default elementor-kit-16 elementor-page elementor-page-205">
    <div class="boxed_wrapper">
      <!-- router Component -->
      <nuxt style="background: #fff;" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Default'

}
</script>
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
