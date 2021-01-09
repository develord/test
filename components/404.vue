<template>
  <fragment>
    <SubHeaderSample />
    <div class="auto-container">
      <div class="inner-box centred">
        <br>
        <figure class="image-box">
          <img
            v-lazy="{ src: '/images/error-404.PNG', loading: '/images/error-404.PNG' }"
            :src="'/images/error-404.PNG'"
            :alt="'404 not found'"
            :title="'404 not found'"
            class="is-lazy"
          >
        </figure><h2>Page is not found</h2>
        <p>We're not being able to find the page you're looking for</p>
        <NuxtLink to="/" title="home" class="theme-btn style-one">
          Back To Home<span>+</span>
        </NuxtLink>
        <br><br>
      </div>
    </div>
  </fragment>
</template>
<script>
import SubHeaderSample from '~/components/front/components/SubHeaderSample.vue'
export default {
  layout: 'Default',
  components: {
    SubHeaderSample
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
