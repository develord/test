<template>
  <section class="page-title text-center style-two">
    <div v-lazy:background-image="{src: '/img/shape-62.webp', loading: '/img/shape-62.webp'}" class="pattern-layer" /><div class="auto-container">
      <div class="content-box">
        <h1 v-if="h1">
          {{ h1 }}
        </h1>
        <h1 v-else>
          {{ $route.fullPath.replace('/','').charAt(0).toUpperCase() +$route.fullPath.slice(2) }}
        </h1>
      </div>
    </div>
  </section>
</template>
<script>
import page from '~/mixins/page.js'
export default {
  mixins: [page],
  data () {
    return {
    }
  }
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
