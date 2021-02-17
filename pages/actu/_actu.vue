<template>
<div>
<div class="container" v-if="isPage">
   <div class="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
      <div class="h-100 tofront">
         <div class="row justify-content-between">
            <div class="col-md-12 pt-6 pb-6 align-self-center">
               <p class="text-uppercase font-weight-bold">
                  <a class="text-danger" href="#" v-if="page">{{ page.tags[0].name }}</a>
               </p>
               <h1 v-if="page" class="display-4 secondfont mb-3 font-weight-bold">
                  {{page.h1}}
               </h1>
               <nav aria-label="breadcrumb">
                  <ol class="breadcrumb" v-if="page">
                     <li class="breadcrumb-item">
                        <NuxtLink class="breadcrumb-item" to="/">Acceuil</NuxtLink>
                     </li>
                     <li class="breadcrumb-item">
                        <NuxtLink class="breadcrumb-item" :to="'../'+page.category.link">{{ page.category.name }}</NuxtLink>
                     </li>
                     <li class="breadcrumb-item active" aria-current="page">{{ page.title }}</li>
                  </ol>
               </nav>
               <p class="mb-3" v-if="page">
                  {{page.description}}
               </p>
               <div class="d-flex align-items-center">
                  <img class="rounded-circle" :src="'../../img/avatar2.jpg'" width="70">
                  <small class="ml-2">Jane Seymour <span class="text-muted d-block" v-if="page">{{ new Date(page.created_at).getFullYear() }} &middot; 5 min. lire</span>
                  </small>
               </div>
            </div>
            <div class="col-md-12 pr-0">
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
<div class="container pt-1 pb-1" v-if="isPage">
   <div class="row">
      <div class="col-lg-2 pr-4 mb-4 col-md-12">
         <div class="sticky-top sticky-sidebar-offset">
            <div class="share text-center">
               <div class="sidebarapplause">
                  <div id="pt-claps-applause-161" class="pt-claps-applause">
                     <a class="claps-button" href="https://www.themepush.com/demo-mundana/a-paris-street-set-design-for-act-ii-of-la-boheme/" data-id="161"></a>
                     <span id="claps-count-161" class="claps-count">136</span>
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
         <article class="article-post" v-if="page" v-html="content">
         </article>
         <h2>Gallery images</h2>
         <client-only>
            <lightbox  v-if="page" class="pb-4" :items="page.gallery.map(el => '/images/' + el.high)" :cells="3"></lightbox>
         </client-only>
         <div v-if="page" v-html="ficheTechnique" />
            <div class="border p-5 bg-lightblue">
               <div class="row justify-content-between">
                  <div class="col-md-5 mb-2 mb-md-0">
                     <h5 class="font-weight-bold secondfont">
                        Become a member
                     </h5>
                     Get the latest news right in your inbox. We never spam!
                  </div>
                  <div class="col-md-7">
                     <div class="row">
                        <div class="col-md-12">
                           <input type="text" class="form-control" placeholder="Enter your e-mail address">
                        </div>
                        <div class="col-md-12 mt-2">
                           <button type="submit" class="btn btn-success btn-block">
                           Subscribe
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="container pt-4 pb-4" v-if="isPage">
      <h5 class="font-weight-bold spanborder">
         <span>Articles Similaires</span>
      </h5>
      <div class="row" v-if="relatedArticle.length">
         <div class="col-lg-6">
            <div class="card border-0 mb-4 box-shadow h-xl-300">
               <div v-lazy:background-image="{ src: '../images/' + relatedArticle[0].image_large.high, loading: '../images/' + relatedArticle[0].image_large.low}" style="height: 150px; background-size: cover; background-repeat: no-repeat;" />
                  <div class="card-body px-0 pb-0 d-flex flex-column align-items-start">
                     <h2 class="h4 font-weight-bold">
                        <NuxtLink class="text-dark" :to="'../' + relatedArticle[0].link">{{relatedArticle[0].h1}}</NuxtLink>
                     </h2>
                     <p class="card-text">
                        {{ relatedArticle[0].description.substring(0,125) }}...
                     </p>
                     <div>
                        <small class="d-block"><a class="text-muted" href="#">{{relatedArticle[0].tags[0].name}}</a></small>
                        <small class="text-muted">{{ new Date(relatedArticle[0].created_at).getFullYear() }} &middot; 5 min. lire </small>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="flex-md-row mb-4 box-shadow h-xl-300">
                  <div class="mb-3 d-flex align-items-center" v-for="item in relatedArticle.slice(1)" :key="item._id">
                     <img
                        v-lazy="{ src: '../images/' + item.image_small.high, loading: '../images/' + item.image_small.low}"
                        height="90"
                        width="125"
                        class="is-lazy"
                        :alt="item.title"
                        :title="item.title"
                        :src="'../images/' + item.image_small.low"
                        >
                     <div class="pl-3">
                        <h2 class="mb-2 h6 font-weight-bold">
                           <NuxtLink class="text-dark" :to="'../'+item.link">{{item.h1}}</NuxtLink>
                        </h2>
                        <div class="card-text text-muted small">
                           {{item.category.name}} - {{item.tags[0].name}}
                        </div>
                        <small class="text-muted">{{ new Date(item.created_at).getFullYear() }} &middot; 5 min. lire </small>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   <!-- End Header -->
   <!--------------------------------------
      MAIN
      --------------------------------------->
   <div class="container mt-5 mb-5" v-if="!isPage">
      <div class="row">
         <div class="col-md-8">
            <h5 class="font-weight-bold spanborder"><span>Nos dernière actualité</span></h5>
            <div class="mb-3 d-flex justify-content-between" v-for="item in listArticle" :key="item._id">
               <div class="pr-3">
                  <h2 class="mb-1 h4 font-weight-bold">
                     <NuxtLink class="text-dark" :to="'../'+item.link">{{item.h1}}</NuxtLink>
                  </h2>
                  <p>
                     {{item.description}}
                  </p>
                  <div class="card-text text-muted small">
                     {{item.tags[0].name}}
                  </div>
                  <small class="text-muted">{{ new Date(item.created_at).getFullYear() }} · 5 min read</small>
               </div>
               <img
                  v-lazy="{ src: './images/' + item.image_small.high, loading: './images/' + item.image_small.low}"
                  height="120"
                  width="125"
                  class="is-lazy"
                  :alt="item.title"
                  :title="item.title"
                  :src="'../images/' + item.image_small.low"
                  >
            </div>
            <div class="row justify-content-between">
               <div class="col-auto me-auto">
                  <NuxtLink v-if="parseInt(this.$route.params.actu) > 0" class="text-dark" :to="'' + (parseInt(this.$route.params.actu) - 1 )">page président</NuxtLink>
               </div>
               <div class="col-auto">
                  <NuxtLink v-if="listArticle.length === 4" class="text-dark" :to="'' + (parseInt(this.$route.params.actu) + 1 )">page suivante</NuxtLink>
               </div>
            </div>
         </div>
         <div class="col-md-4 pl-4">
            <div class="sticky-top">
               <h5 class="font-weight-bold spanborder"><span>Les plus visités</span></h5>
               <ol class="list-featured">
                  <li>
                     <span>
                        <h6 class="font-weight-bold">
                           <a href="./article.html" class="text-dark">Did Supernovae Kill Off Large Ocean Animals?</a>
                        </h6>
                        <p class="text-muted">
                           Jake Bittle in SCIENCE
                        </p>
                     </span>
                  </li>
                  <li>
                     <span>
                        <h6 class="font-weight-bold">
                           <a href="./article.html" class="text-dark">Humans Reversing Climate Clock: 50 Million Years</a>
                        </h6>
                        <p class="text-muted">
                           Jake Bittle in SCIENCE
                        </p>
                     </span>
                  </li>
                  <li>
                     <span>
                        <h6 class="font-weight-bold">
                           <a href="./article.html" class="text-dark">Unprecedented Views of the Birth of Planets</a>
                        </h6>
                        <p class="text-muted">
                           Jake Bittle in SCIENCE
                        </p>
                     </span>
                  </li>
                  <li>
                     <span>
                        <h6 class="font-weight-bold">
                           <a href="./article.html" class="text-dark">Effective New Target for Mood-Boosting Brain Stimulation Found</a>
                        </h6>
                        <p class="text-muted">
                           Jake Bittle in SCIENCE
                        </p>
                     </span>
                  </li>
               </ol>
            </div>
         </div>
      </div>
   </div>
</div>
</template>
<script>
import { categoryElements, page } from '@/apollo/query'
import Lightbox from '@/components/Lightbox.vue'

export default {
  layout: 'Default',
  components: {Lightbox},
  apollo: {
    page: {
      query: page,
      fetchPolicy: 'cache-first',
      variables() {
        return { link: this.$route.path }
      }
    },
    categoryElements: {
      query: categoryElements,
      fetchPolicy: 'cache-first',
      variables() {
        return { link: this.$route.name.split('-')[0], page: parseInt(this.$route.params.actu) }
      }
    },
  },
  data: () => {
    return {
      content: null,
      listArticle: [],
      isPage: false,
      content: null,
      ficheTechnique: null,
      relatedArticle: []
    }
  },
  watch: {
    async page(val) {
      if (!val && isNaN(this.$route.params.actu)) window.location.href = "/404"
      if(!isNaN(this.$route.params.actu)) {
        this.isPage = false
      } else{
        this.isPage = true
        this.content = val.content && JSON.parse(val.content) ? JSON.parse(val.content).html : ''
        this.ficheTechnique = val.fiche && JSON.parse(val.fiche) ? JSON.parse(val.fiche).html : ''
        this.relatedArticle = await this.$store.dispatch('getCategoryElement', val.category.link)
      }
    },
	  categoryElements(val) {
		  this.listArticle =  val
	  },
    '$route.params.actu': {
      immediate: true,
      handler(val) {
        if(parseInt(val) === 0) {
          this.$router.push('/actu')
          this.isPage = false
        } else if(!isNaN(val)) {
          this.isPage = true
        }
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
.logo-brand-constructor {
    border-radius: 12px;
}
.bus-name {
  margin: auto;
  display: block;
}
.bloc-title:before {
    content: '';
    position: absolute;
    border-bottom: 1px solid #d1d1d1;
    height: 1px;
    width: 180px;
    bottom: 2px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
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