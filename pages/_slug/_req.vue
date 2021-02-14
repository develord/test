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
          <div class="sticky-top sticky-sidebar-offset">
            <div class="share text-center">
              <div class="sidebarapplause">
                  <div id="pt-claps-applause-161" class="pt-claps-applause">
                    <a class="claps-button" href="https://www.themepush.com/demo-mundana/a-paris-street-set-design-for-act-ii-of-la-boheme/" data-id="161"></a>
                    <span id="claps-count-161" class="claps-count">136</span><input type="hidden" id="_wpnonce" name="_wpnonce" value="e688d36211"><input type="hidden" name="_wp_http_referer" value="/demo-mundana/a-paris-street-set-design-for-act-ii-of-la-boheme/">
                  </div>
              </div>
              <p class="sharecolour">
                  Share                            
              </p>
              <ul class="shareitnow" v-if="page">
                  <li>
                    <a target="_blank" :href="'https://twitter.com/intent/tweet?text='+ this.page.h1 + '&amp;url=' + 'https://bus-world.fr' + this.$route.fullPath ">
                    <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=' + 'https://bus-world.fr' + this.$route.fullPath">        
                    <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" :href="'https://www.linkedin.com/shareArticle?mini=true&amp;url=' + 'https://bus-world.fr' + this.$route.fullPath + '&amp;title=' + this.page.h1 ">
                    <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
              </ul>
              <div class="sep"></div>
              <div class="d-none d-md-block">
                  <p>
                    Comments                                
                  </p>
                  <ul>
                    <li>
                        <a class="smoothscroll" href="#comments">
                          0<br>
                          <svg class="svgIcon-use" width="29" height="29" viewBox="0 0 29 29">
                              <path d="M21.27 20.058c1.89-1.826 2.754-4.17 2.754-6.674C24.024 8.21 19.67 4 14.1 4 8.53 4 4 8.21 4 13.384c0 5.175 4.53 9.385 10.1 9.385 1.007 0 2-.14 2.95-.41.285.25.592.49.918.7 1.306.87 2.716 1.31 4.19 1.31.276-.01.494-.14.6-.36a.625.625 0 0 0-.052-.65c-.61-.84-1.042-1.71-1.282-2.58a5.417 5.417 0 0 1-.154-.75zm-3.85 1.324l-.083-.28-.388.12a9.72 9.72 0 0 1-2.85.424c-4.96 0-8.99-3.706-8.99-8.262 0-4.556 4.03-8.263 8.99-8.263 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32c0 .07 0 .19.02.37.03.29.1.6.19.92.19.7.49 1.4.89 2.08-.93-.14-1.83-.49-2.67-1.06-.34-.22-.88-.48-1.16-.74z">
                              </path>
                          </svg>
                        </a>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <article class="article-post" v-html="content">
          </article>
        </div>
      </div>
    </div>
    <div class="container pb-1" v-for="(typeBus, i) in groupedBus" :key="i">
      <h5 class="font-weight-bold spanborder">
        <span>{{ i }}</span>
      </h5>
      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex flex-row mb-4 box-shadow">
            <div class="mb-1 pr-2 d-flex align-items-center" v-for="(bus, j) in typeBus" :key="j">
              <img
                v-lazy="{ src: './images/' + bus.image_small.high, loading: './images/' + bus.image_small.low}"
                height="90"
                width="125"
                class="is-lazy"
                :alt="bus.title"
                :title="bus.title"
                :src="'../images/' + bus.image_small.low"
              >
              <div class="pl-3">
                <h2 class="mb-2 h6 font-weight-bold">
                  <NuxtLink class="text-dark" :to="bus.link">{{bus.h1}}</NuxtLink>
                </h2>
                <div class="card-text text-muted small">
                   {{ bus.category.name }} 
                </div>
                <small class="text-muted">{{ new Date(bus.created_at).getFullYear() }} &middot; 5 min. lire </small>
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
import { page, categoryElements } from '@/apollo/query'
import Lightbox from '@/components/Lightbox.vue'

export default {
  layout: 'Default',
  components: {
    Lightbox
  },
  apollo: {
    categoryElements: {
      query: categoryElements,
      fetchPolicy: 'cache-first',
      variables() {
        return { link: this.$route.params.slug }
      }
    },
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
      content: null,
      groupedBus: []
    }
  },
  watch: {
    categoryElements(val) {
     if (!val) window.location.href = "/404"
     this.groupedBus =  val.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue.tags[0].name] = result[currentValue.tags[0].name] || []).push(
          currentValue
        )
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result
      }, {})
    },
    page(val) {
      if (!val) window.location.href = "/404"
      if (val.content && val.content != "null") {
         this.content = JSON.parse(val.content).html
      }
    }
  }
}
</script>
<style>
.claps-button:before {
    content: url(../../assets/applaud.svg);
}
.fa-twitter {
  content: url(../../assets/twitter.svg);
  width: 22px;
}
.fa-facebook {
  content: url(../../assets/facebook.svg);
  width: 22px;
}
.fa-linkedin {
  content: url(../../assets/linkedin.svg);
  width: 20px;
}
.fa-angle-right:before {
    content: "\f105";
}
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