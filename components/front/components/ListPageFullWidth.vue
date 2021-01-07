<template>
  <fragment>
    <div v-if="loading" class="auto-container d-flex flex-wrap justify-content-start">
      <div v-for="(n,index) in 12" :key="index" style="width: 100%;height: 350px;">
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
      <div v-for="post in listPost" :key="post._id" class="big">
        <article class="article">
          <div class=" artice-box">
            <img
              v-lazy="{ src: '/images/' + post.image_small.high, loading: '/images/' + post.image_small.low}"
              class="is-lazy"
              :alt="post.title"
              :title="post.title"
              :src="'/images/' + post.image_small.low"
            >
          </div>
          <div class="article-content">
            <h2 class="article-title">
              <NuxtLink :to="post.link">
                {{ post.title }}
              </NuxtLink>
            </h2>
            <p class="article-desc">
              {{ post.description }}
            </p>
            <div class="tags-box">
              <div v-for="(tag, i) in post.tags" :key="i" class="tag-avatar">
                <img
                  v-lazy="{ src: '/images/' + tag.slug, loading: '/images/' + tag.slug }"
                  class="is-lazy"
                  width="50"
                  :src="'/images/' + tag.slug"
                >
              </div>
            </div>
            <NuxtLink class="artice-save" :to="post.link">
              Read More
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </fragment>
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
      loading: true,
      listPost: []
    }
  },
  computed: {
    listPublication () {
      return this.$store.state.listPublication
    }
  },
  watch: {
    '$route.hash': {
      immediate: true,
      handler (newVal) {
        this.listPost = this.listPublication
      }
    },
    listPublication (newval) {
      this.listPost = this.listPublication
    }
  },
  beforeMount () {
    const url = this.$route.path.replace('/', '')
    this.$store.dispatch('getCategoryElement', url)
    this.loading = false
  }
}
</script>
<style lang="scss">
.article,
.artice-box {
 display: flex;
 flex-wrap: wrap;
 align-items: center;
}
.artice-save {
  position: absolute;
  color: #3b2042;
  right: 55px;
  bottom: 10%;
  padding: 10px 20px;
  border: 1px solid #fff;
}
.tag-avatar{
  width: 60px;
}
.artice-box {
 flex: 3 1 30ch;
 height: calc(196px + 5vw);
 overflow: hidden;

 img {
  max-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  object-position: 50% 50%;
 }
}
.tags-box {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(40px, 1fr));
}

.article {
 border: 2px solid #F2F2F2;
 border-radius: 8px;
 overflow: hidden;

 &-content {
  padding: 16px 32px;
  flex: 4 1 40ch;
 }

 &-tags {
  margin: 0 -8px;
 }

 &-tag {
  display: inline-block;
  margin: 8px;
  font-size: .875em;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .02em;
  color: var(--primary);
 }

 &-title {
  margin: 0;
  font-size: clamp(1.4em, 2.1vw, 2.1em);
  font-family: "Roboto Slab", Helvetica, Arial, sans-serif;

  a {
   text-decoration: none;
   color: inherit;
  }
 }

 &-metadata {
  margin: 0;
 }

 &-rating {
  font-size: 1.2em;
  letter-spacing: 0.05em;
  color: var(--primary);

  span {
   color: var(--grey);
  }
 }

 &-votes {
  font-size: .825em;
  font-style: italic;
  color: var(--lightgrey);
 }

 &-save {
  display: flex;
  align-items: center;
  padding: 6px 14px 6px 12px;
  border-radius: 4px;
  border: 2px solid currentColor;
  color: var(--primary);
  background: none;
  cursor: pointer;
  font-weight: bold;

  svg {
      margin-right: 6px;
    }
  }
}

.big {
  width: clamp(100%, 65%, 65%);
  padding: 24px;
}
.small {
  width: clamp(320px, 35%, 480px);
  padding: 24px;
}
</style>
