<template>
  <section class="page-title text-center style-two">
    <div v-lazy:background-image="{src: '/images/'+image_small.high, loading: '/images/'+image_small.low}" class="image-couverture">
      <div class="wallpaper-overlay" />
    </div>
    <div v-lazy:background-image="{src: '/img/shape-62.webp', loading: '/img/shape-62.webp'}" class="pattern-layer" /><div class="auto-container">
      <div class="content-box">
        <h1>{{ h1 }}</h1>
        <!-- block auther -->
        <ul class="bread-crumb text-left clearfix">
          <li class="breadcrumb-item">
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li><li class="breadcrumb-item">
            <NuxtLink :to="`../${link.split('/')[0]}`">
              {{ reverseLink(link.split('/')[0]) }}
            </NuxtLink>
          </li>
          <li class="breadcrumb-item">
            {{ reverseLink(link.split('/')[1]) }}
          </li>
        </ul>

        <div class="article-content-meta">
          <div class="author-avatar">
            <a href="#">
              <img
                v-lazy="{ src: 'https://secure.gravatar.com/avatar/d7a76198094edbb412cf4d525b16d545?s=80&amp;d=retro&amp;r=pg', loading: 'https://secure.gravatar.com/avatar/d7a76198094edbb412cf4d525b16d545?s=160&amp;d=retro&amp;r=pg' }"
                class="is-lazy"
                :src="'https://secure.gravatar.com/avatar/d7a76198094edbb412cf4d525b16d545?s=80&amp;d=retro&amp;r=pg'"
              >
            </a>
            <div class="half-circle" width="80px" height="80px" />
          </div>
          <div class="author-name-area">
            <div class="author-name-prefix">
              Author
            </div>
            <a class="author-name" href="#">
              {{ user.name }} </a>
          </div>
          <div class="date">
            <div class="date-prefix">
              Published
            </div>
            <time v-if="published">
              {{ published.substring(0,4) }} </time>
          </div>
        </div>
        <div class="article-tags">
          <div v-for="(tag, i) in tags" :key="i" class="tag-avatar">
            <img
              v-lazy="{ src: '/images/' + tag.slug, loading: '/images/' + tag.slug }"
              class="is-lazy"
              width="50"
              :src="'/images/' + tag.slug"
            >
          </div>
        </div>
      <!-- ending -->
      </div>
    </div>
  </section>
</template>
<script>
import page from '~/mixins/page.js'
export default {
  mixins: [page],
  methods: {
    reverseLink (link) {
      return link.replace(/-/g, ' ')
    }
  }
}
</script>
<style scoped>
.wallpaper-overlay {
  background-image: radial-gradient(ellipse closest-side, rgba(15, 14, 22, 0.5), #110b44);
  background-size: cover;
  width: 100%;
  height: 100%;
}
.image-couverture {
    z-index: 0;
    width: 75%;
    height: 439px;
    position: absolute;
    right: 0;
    top: 46px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.article-tags {
  display: flex;
  align-items: stretch;
}
.article-content-meta, .article-publication-meta {
    white-space: nowrap;
}
a {
    color: #fff;
}
a {
    text-decoration: none;
}
.date {
    grid-area: date;
}
.author-name-area {
  grid-area: author;
  text-align: left;
}
.date time {
    color: #fff;
}
.author-name-prefix, .comments-prefix, .date-prefix, .shared-by-prefix, .type-of-guide {
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
}
.author-name, .comments-link, time {
  text-transform: capitalize;
    font-weight: 700;
}
.author-avatar img {
    width: 60px;
    height: 60px!important;
    display: block;
    overflow: hidden;
    margin: 16px 10px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
iframe, img, video {
    max-width: 100%;
}
img, video {
    height: auto!important;
}
img {
    border: 0;
    -ms-interpolation-mode: bicubic;
}
.article-content-meta {
    font-size: .7rem;
    display: grid;
    grid-template-columns: 80px -webkit-min-content -webkit-min-content;
    grid-template-columns: 80px min-content min-content;
    grid-template-areas: "avatar author date comments";
    grid-gap: .25rem 1rem;
    align-items: center;
    margin: 0 0 1.5rem;
}
.author-avatar {
    grid-area: avatar;
    align-self: start;
    position: relative;
}
*, :after, :before {
    box-sizing: border-box;
}
.article-content-meta, .article-publication-meta {
    white-space: nowrap;
}
.half-circle {
    width: 78px;
    height: 39px;
    background-color: none;
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 110px;
    border: 10px solid;
    border-image-source: linear-gradient(45deg, rgb(190 2 255), rgb(250,224,66));
  border-image-slice: 1;
    border-top: 0;
    position: absolute;
    bottom: 6px;
}
*, :after, :before {
    box-sizing: border-box;
}
svg:not(:root) {
    overflow: hidden;
}
</style>
