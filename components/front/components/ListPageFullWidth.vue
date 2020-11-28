<template>
  <div class="elementor-widget-container">
    <section class="news-section sec-pad-2">
      <div class="auto-container d-flex flex-wrap justify-content-start" v-if="loading">
        <div style="width: 351px;height: 350px;" v-for="(n,index) in 12" :key="index">
          <vueContentLoading :width="70" :height="101" style="viewBox='32 1 1 117';width: 300px;height: 400px;">
            <rect x="0" y="13" rx="4" ry="4" width="70" height="50" />
            <rect x="0" y="65" rx="4" ry="4" width="70" height="10" />
            <rect x="0" y="78" rx="4" ry="4" width="70" height="10" />
           </vueContentLoading>
        </div>
      </div>

      <div class="auto-container dflex flex-wrap justify-content-start">
        <div v-for="post in listPost" :key="post._id" class="owl-item cloned" style="width: 30%; margin-right: 30px;">
          <div class="news-block-one wow fadeInUp animated" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
            <div class="inner-box">
              <figure class="image-box">
                <img
                  width="370"
                  height="250"
                  v-lazy="{ src: require('~/assets/images/' + post.image_small.high), loading: require('~/assets/images/' + post.image_small.low) }"
                  class="is-lazy"
                  :alt="post.title"
                  :title="post.title"
                  :src="require('~/assets/images/' + post.image_small.low)"
                >
              </figure>
              <div class="lower-content">
                <div class="title-box">
                  <div class="post-date">
                    <p>13</p>
                    <span>Mar</span>
                  </div>
                  <h4>
                    <NuxtLink class="btn-style-four" :to="post.link">
                      {{ post.title }}
                    </NuxtLink>
                  </h4>
                </div>
                <div class="text">
                  <p>{{ post.description }}</p>
                </div>
                <div class="link">
                  <NuxtLink class="btn-style-four" :to="post.link">
                    Read More
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import page from '~/mixins/page.js'
import vueContentLoading from 'vue-content-loading'

export default {
  mixins: [page],
  components: {
    vueContentLoading
  },
  data () {
    return {
      listPost: null,
      loading: true
    }
  },
  async beforeMount () {
    const url = this.$route.fullPath.replace('/', '')
    this.listPost = await this.$store.dispatch('getCategoryElement', url)
    this.loading = false
  },
  methods: {
    loadImage(img) {
      return () => import(`~/assets/images/${img}`)
    }
  }
}
</script>
<style scoped>

</style>
