<template>
  <section class="page-title text-center style-two">
    <div v-lazy:background-image="{src: '/images/'+image_large.high, loading: '/images/'+image_large.low}" class="image-couverture">
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
        <div class="bread-crumb text-left clearfix">
          <p v-if="journal">
            {{ journal }}
          </p>
        </div>
        <div class="article-content-meta">
          <div class="author-name-area">
            <div class="author-name-prefix">
              Published
            </div>
            <a v-if="published" class="author-name" href="#">
              {{ published.substring(0,4) }} </a>
          </div>
          <div class="date">
            <div class="date-prefix">
              Author
            </div>
            <div class="article-desc flex-wrap d-flex justify-content-start">
              <span v-for="(item, i) in authors" :key="i" class="tag-name">
                <template>{{ item }}</template>
              </span>
            </div>
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
.article-desc {
  width: 1035px;
}
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
  padding: 0px 5px 45px 0px;
}
.date time {
    color: #fff;
}
.author-name-prefix, .comments-prefix, .date-prefix, .shared-by-prefix, .type-of-guide {
    font-style: normal;
    text-align: left;
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
    grid-template-columns: 0px -webkit-min-content -webkit-min-content;
    grid-template-columns: 0px min-content min-content;
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
.breadcrumb-item {
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 381px;
}
.tag-name {
    background-color: #a7a2a2;
    color: #fff;
    padding: 1px 7px;
    display: block;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    flex: 1;
    display: inline-block;
    border-radius: 24px;
    margin: 4px;
}
</style>
