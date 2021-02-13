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
        <div class="article-desc flex-wrap d-flex justify-content-start">
          <span v-for="(item, i) in listTag" :key="i" class="tag-name" @click="selected = item">
            <template>{{ item }}</template>
          </span>
          <span v-for="(item) in listDate" :key="item" class="tag-name" @click="selected = item">
            <template>{{ item }}</template>
          </span>
        </div>
      </div>

      <div v-if="!loading" class="auto-container d-flex flex-wrap justify-content-start">
        <div v-for="post in filtredPost" :key="post._id" class="col-lg-4 col-md-6 col-sm-12 news-block">
          <div class="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
            <div class="inner-box">
              <figure class="image-box">
                <img
                  v-lazy="{ src: '/images/' + post.image_large.high, loading: '/images/' + post.image_large.low}"
                  :alt="post.title"
                  :title="post.title"
                  :src="'/images/' + post.image_large.low"
                  width="370"
                  height="250"
                  data-sizes="(max-width: 370px) 100vw, 370px"
                  class="attachment-naxly_370x250 size-naxly_370x250 wp-post-image lazyloaded"
                  loading="lazy"
                  sizes="(max-width: 370px) 100vw, 370px"
                >
              </figure>
              <div class="lower-content">
                <div class="title-box">
                  <div class="post-date">
                    <p>{{ parseInt(post.published.substring(0,4)) }}</p>
                    <span>{{ post.published.substring(5,7) }}</span>
                  </div>
                  <h4>
                    <NuxtLink :to="post.link">
                      {{ post.title }}
                    </NuxtLink>
                  </h4>
                </div>
                <div class="text">
                  <p>{{ post.description }} ...</p>
                </div>
                <div class="link">
                  <NuxtLink :to="post.link">
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
      loading: true,
      selected: null,
      listTag: null,
      filtredPost: [],
      listDate: null
    }
  },
  watch: {
    selected (newVal) {
      this.filtredPost = this.listPost.filter(el => parseInt(el.published?.substring(0, 4)) === newVal || el.tagfilter === newVal)
    },
    listPost (newVal) {
      this.filtredPost = newVal
      this.listTag = [...new Set(newVal.map(el => el.tagfilter).flat())].filter(function (el) {
        return el != null
      })
      this.listDate = [...new Set(newVal.map(el => el.published).flat().map(el => parseInt(el?.substring(0, 4))))].filter(function (el) {
        return el != null
      })
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
.tag-name {
  padding: 6px 10px;
  background-color: #5a2e6c;
  color: #fff;
  border-radius: 24px;
  display: flex;
  flex: none;
  cursor: pointer;
  margin: 0px 5px;
}
.text p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
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
    left: 19px;
    bottom: 26%;
    width: 100% !important;
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
