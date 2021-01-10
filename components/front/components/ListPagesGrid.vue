<template>
  <div class="elementor-widget-container">
    <section class="news-section sec-pad-2">
      <div v-if="loading" class="auto-container d-flex flex-wrap justify-content-start">
        <div v-for="(n,index) in 12" :key="index" style="width: 351px;height: 350px;">
          <vueContentLoading :width="70" :height="101" style="viewBox='32 1 1 117';width: 300px;height: 400px;">
            <rect
              x="0"
              y="13"
              rx="4"
              ry="4"
              width="70"
              height="50"
            />
            <rect
              x="0"
              y="65"
              rx="4"
              ry="4"
              width="70"
              height="10"
            />
            <rect
              x="0"
              y="78"
              rx="4"
              ry="4"
              width="70"
              height="10"
            />
          </vueContentLoading>
        </div>
      </div>

      <div v-else class="auto-container d-flex flex-wrap justify-content-start">
        <div v-for="post in listPost" :key="post._id" class="first hero">
          <img
            v-lazy="{ src: '/images/' + post.image_large.high, loading: '/images/' + post.image_large.low}"
            class="is-lazy hero-profile-img"
            :alt="post.title"
            :title="post.title"
            :src="'/images/' + post.image_large.low"
          >
          <div class="hero-description-bk" />
          <div class="hero-logo">
            <img
              v-lazy="{ src: '/images/' + post.image_small.high, loading: '/images/' + post.image_small.low}"
              class="is-lazy"
              :alt="post.title"
              :title="post.title"
              style="background:black"
              :src="'/images/' + post.image_small.low"
            >
          </div>
          <div class="hero-description">
            <h5>
              {{ post.title }}
            </h5>
          </div>
          <div class="hero-date">
            <p>20.02.2019</p>
          </div>
          <div class="hero-btn">
            <NuxtLink class="btn-style-four" :to="post.link">
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import vueContentLoading from 'vue-content-loading'
import page from '~/mixins/page.js'

export default {
  components: {
    vueContentLoading
  },
  mixins: [page],
  data () {
    return {
      listPost: null,
      loading: true
    }
  },
  async beforeMount () {
    const url = this.$route.path.replace('/', '')
    this.listPost = await this.$store.dispatch('getCategoryElement', url)
    this.loading = false
  }
}
</script>
<style scoped>
/* BEGIN CARD DESIGN */
h5 {
  color: #eee;
}
.hero-date p {
  color: #eee;
}
.hero {
  display: inline-block;
  position: relative;
  width: 280px;
  min-width: 28%;
  height: 400px;
  border-radius: 30px;
  overflow:hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  margin: 30px;
}

.hero-profile-img {
  height: 70%;
}

.hero-description-bk {
  background-image: linear-gradient(0deg , #3f5efb, #fc466b);
  border-radius: 30px;
  position: absolute;
  top: 55%;
  left: -5px;
  height: 65%;
  width: 108%;
  transform: skew(19deg, -9deg);
}

.second .hero-description-bk {
  background-image: linear-gradient(-20deg , #bb7413, #e7d25c)
}

.hero-logo {
  height: 222px;
  width: 85px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  bottom: 30%;
  left: 30px;
  overflow:hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);
}

.hero-logo img {
  height: 100%;
}

.hero-description {
  position: absolute;
  color: #fff;
  font-weight: 900;
  left: 150px;
  bottom: 26%;
}

.hero-btn {
  position: absolute;
  color: #fff;
  right: 30px;
  bottom: 10%;
  padding: 10px 20px;
  border: 1px solid #fff;
}

.hero-btn a {
  color: #fff;
}

.hero-date {
  position: absolute;
  color: #fff;
  left: 30px;
  bottom: 10%;
}
/* END CARD DESIGN */

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  background-color: #eee;
  min-height: 100vh;
}
.btn i:before {
  width: 14px;
  height: 14px;
  position: fixed;
  color: #fff;
  background: #0077B5;
  padding: 10px;
  border-radius: 50%;
  top:5px;
  right:5px;
}
</style>
