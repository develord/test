<template>
  <section class="page-title text-center style-two">
    <div v-if="image_large.high" v-lazy:background-image="{src: '/images/'+image_large.high, loading: '/images/'+image_large.low}" class="image-couverture">
      <div class="wallpaper-overlay" />
    </div>
    <div v-lazy:background-image="{src: '/img/shape-62.webp', loading: '/img/shape-62.webp'}" class="pattern-layer" /><div class="auto-container">
      <div class="content-box">
        <h1>
          {{ h1 || $route.path.replace('/','').charAt(0).toUpperCase() +$route.path.slice(2) }}
        </h1>
      </div>
    </div>
  </section>
</template>
<script>
import page from '~/mixins/page.js'
export default {
  mixins: [page]
}
</script>
<style scoped>
h1 {
    text-align: center !important;
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
</style>
