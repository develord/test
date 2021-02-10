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
          <div class="artice-box">
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
            <p class="article-desc" style="margin-top: 9px;flex-wrap: wrap;flex-direction: column;">
              <template v-for="(item, i) in post.authors">
                <span v-if="i < 3" :key="i" class="tag-name">{{ item }}</span>
              </template>
            </p>
            <p class="article-desc">
              {{ post.journal }} ,
              <template v-if=" post.published">
                {{ parseInt(post.published.substring(0,4)) + 1 }}
              </template>
            </p>
            <div class="tags-box">
              <div v-for="(tag, i) in post.tags" :key="i" class="tag-avatar">
                <img
                  v-lazy="{ src: '/images/' + getImages(tag), loading: '/images/' +getImages(tag)}"
                  class="is-lazy"
                  width="50"
                  :alt="tag.name"
                  :title="tag.name"
                  :src="'/images/' + getImages(tag)"
                >
              </div>
            </div>
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
  name: 'ListPageFullWidth',
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
    },
    images () {
      return this.$store.state.images
    }
  },
  watch: {
    '$route.fullPath': {
      immediate: true,
      deep: true,
      handler (newVal) {
        newVal = this.$route.query.req
        newVal = parseInt(newVal) - 1
        if (newVal === 'all' || !newVal) {
          this.listPost = this.listPublication
        } else {
          this.listPost = this.listPublication.filter(el => el.tags.filter(tag =>
            (this.$route.query.req === el.published.substring(0, 4) ? el.published.substring(0, 4) : tag.name) === newVal
          ).length > 0)
        }
      }
    },
    listPublication (newval) {
      if (this.$route.query.req && this.$route.query.req !== 'all') {
        this.listPost = this.listPublication.filter(el => el.tags.filter(tag => (tag.name) === this.$route.query.req).length > 0)
      } else {
        this.listPost = this.listPublication
      }
    }
  },
  beforeMount () {
    const url = this.$route.path.replace('/', '')
    this.$store.dispatch('getCategoryElement', url)
    this.$store.dispatch('getImages')
    this.loading = false
  },
  methods: {
    getImages (tag) {
      return this.images.filter(el => el._id === tag.image._id)[0].high
    }
  }
}
</script>
<style lang="scss">
.article-content {
  padding-right: 0 !important;
}
a {
  text-align: justify !important;
}
.tag-name {
  background-color: #5a2e6c;
  color: #ffffff;
  padding: 2px 5px;
  display: block;
  width: max-content;
  flex: 1;
  display: inline-block;
  border-radius: 24px;
  margin: 0px 6px;
}
.article a {
  font-size: 21px;
}
.article-title {
 line-height: 24px;
}
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
 flex: 3 1 3ch;
 height: calc(167px + 5vw);
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
  grid-template-columns: repeat(auto-fill,minmax(50px, 1fr));
}

.article {
 border: 2px solid #F2F2F2;
 border-radius: 16px;
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
