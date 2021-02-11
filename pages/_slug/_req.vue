<template>
<div>
    <!--------------------------------------
    HEADER
    --------------------------------------->
    <div class="container">
      <div class="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
        <div class="h-100 tofront">
          <div class="row justify-content-between">
            <div class="col-md-12 pt-6 pb-6 pr-6 align-self-center">
              <h1 v-if="page" class="display-4 secondfont mb-3 text-center font-weight-bold">
                {{page.h1}}
              </h1>
              <p v-if="page" class="mb-3">
                {{page.description}}
              </p>
            </div>
            <div class="col-md-12 pr-0 text-center">
              <img
                v-if="page"
                v-lazy="{ src: '/images/' + page.image_large.high, loading: '/images/' + page.image_large.low}"
                class="is-lazy"
                :alt="page.title"
                :title="page.title"
                :src="'/images/' + page.image_large.low"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->
 <!--------------------------------------
    MAIN
    --------------------------------------->
    <div class="container pt-4 pb-4">
      <div class="row justify-content-center">
        <div class="col-lg-2 pr-4 mb-4 col-md-12">
          <div class="sticky-top text-center">
            <div class="text-muted">
              Partager ce article
            </div>
            <div class="share d-inline-block">
              <!-- AddToAny BEGIN -->
              <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
                <a class="a2a_button_facebook" />
                <a class="a2a_button_twitter" />
              </div>
              <!-- AddToAny END -->
            </div>
          </div>
        </div>
        <div class="col-lg-10 col-md-12">
          <article class="article-post" v-html="content">
          </article>
        </div>
      </div>
    </div>
    <div class="container pb-1">
      <h5 class="font-weight-bold spanborder">
        <span>Autobus</span>
      </h5>
      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex flex-row mb-4 box-shadow">
            <div class="mb-1 pr-2 d-flex align-items-center">
              <img height="80" :src="'./img/demo/blog4.jpg'">
              <div class="pl-3">
                <h2 class="mb-2 h6 font-weight-bold">
                  <a class="text-dark" href="#">Nasa's IceSat space laser makes height maps of Earth</a>
                </h2>
                <div class="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small class="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
            <div class="mb-3 d-flex align-items-center">
              <img height="80" :src="'./img/demo/blog5.jpg'">
              <div class="pl-3">
                <h2 class="mb-2 h6 font-weight-bold">
                  <a class="text-dark" href="#">Underwater museum brings hope to Lake Titicaca</a>
                </h2>
                <div class="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small class="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
            <div class="mb-3 d-flex align-items-center">
              <img height="80" :src="'./img/demo/blog6.jpg'">
              <div class="pl-3">
                <h2 class="mb-2 h6 font-weight-bold">
                  <a class="text-dark" href="#">Sun-skimming probe starts calling home</a>
                </h2>
                <div class="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small class="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pb-1">
      <h5 class="font-weight-bold spanborder">
        <span>Autocar</span>
      </h5>
      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex flex-row mb-4 box-shadow">
            <div class="mb-1 pr-2 d-flex align-items-center">
              <img height="80" :src="'./img/demo/blog4.jpg'">
              <div class="pl-3">
                <h2 class="mb-2 h6 font-weight-bold">
                  <a class="text-dark" href="#">Nasa's IceSat space laser makes height maps of Earth</a>
                </h2>
                <div class="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small class="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
            <div class="mb-3 d-flex align-items-center">
              <img height="80" :src="'./img/demo/blog5.jpg'">
              <div class="pl-3">
                <h2 class="mb-2 h6 font-weight-bold">
                  <a class="text-dark" href="#">Underwater museum brings hope to Lake Titicaca</a>
                </h2>
                <div class="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small class="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
            <div class="mb-3 d-flex align-items-center">
              <img height="80" :src="'./img/demo/blog6.jpg'">
              <div class="pl-3">
                <h2 class="mb-2 h6 font-weight-bold">
                  <a class="text-dark" href="#">Sun-skimming probe starts calling home</a>
                </h2>
                <div class="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small class="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Main -->
</div>
</template>
<script>
import { page } from '@/apollo/query'
import Lightbox from '@/components/Lightbox.vue'

export default {
  layout: 'Default',
  components: {
    Lightbox
  },
  apollo: {
    page: {
      query: page,
      fetchPolicy: 'cache-first',
      variables() {
        return { link: this.$route.path }
      }
    }
  },
   data: () => {
    return {
      content: null
    }
  },
  watch: {
    page(val) {
      if (val.content && val.content != "null") {
         this.content = JSON.parse(val.content).html
      }
    }
  }
}
</script>
<style>
.fa-angle-right:before {
    content: "\f105";
}
article td p {
  padding: 0 !important;
  margin: 0 !important;
}
table td {
  padding: 12px;
  border: solid 1px #dadadaaa;
}


table {
  width: 100%;
  margin-bottom: 28px;
}

tr:nth-child(odd) {
  background-color: #eee;
}

th {
  background-color: #eee;
}

th,
td {
  text-align: left;
  padding: 0.5em 1em;
}
</style>