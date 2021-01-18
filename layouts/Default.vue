<template>
  <div class="page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-205 menu-layer elementor-default elementor-kit-16 elementor-page elementor-page-205">
    <div class="boxed_wrapper">
      <client-only>
        <SlideMenu width="300" :no-overlay="false" :burger-icon="true" left :is-open="isOpen">
          <NuxtLink to="/" title="home" class="hvr-underline-from-left1" @click="isOpen = false">
            <span>Home</span>
          </NuxtLink>
          <NuxtLink to="/team" title="team" class="hvr-underline-from-left1" @click="isOpen = false">
            <span>Team</span>
          </NuxtLink>
          <NuxtLink to="/publication" title="news" class="hvr-underline-from-left1" @click="isOpen = false">
            <span>Publications</span>
          </NuxtLink>
          <NuxtLink to="/research" title="research" class="hvr-underline-from-left1" @click="isOpen = false">
            <span>Research</span>
          </NuxtLink>
          <NuxtLink to="/news" title="research" class="hvr-underline-from-left1" @click="isOpen = false">
            <span>News</span>
          </NuxtLink>
          <NuxtLink to="/giving" title="giving" class="hvr-underline-from-left1" @click="isOpen = false">
            <span>Giving</span>
          </NuxtLink>
          <NuxtLink to="/about" title="about" class="hvr-underline-from-left1" @click="isOpen = false">
            <span>About</span>
          </NuxtLink>
          <NuxtLink to="/contact" title="contact" class="hvr-underline-from-left1" @click="isOpen = false">
            <span>Contact </span>
          </NuxtLink>
        </SlideMenu>
      </client-only>
      <Header />
      <!-- router Component -->
      <nuxt style="background: #fff;" />
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '~/components/front/Header'
import Footer from '~/components/front/Footer'

export default {
  name: 'Default',
  head () {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  components: {
    Header,
    Footer
  },
  data: () => {
    return {
      isOpen: false
    }
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
<style>

@media screen and (max-width: 768px) {
  .bm-burger-button {
    display:block !important;
    /* your any other css styles */
  }
}

.bm-menu {
   background-color: black !important;
}
.bm-menu a {
  color: #ffffff !important;
}
.bm-burger-button {
  display: none;
  z-index: 1000;
  cursor: pointer;
    height: 27px !important;
    left: 12px !important;
    position: absolute;
    top: 13px !important;
    width: 30px !important;
}
.bm-burger-bars {
  background-color: #ffffff !important;
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
