<template>
<div>
<!--------------------------------------
HEADER
--------------------------------------->
<div class="container">
	<div class="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 position-relative">
		<div class="pl-4 pr-0 h-100 tofront">
			<div class="row justify-content-between">
				<div class="col-md-6 pt-6 pb-6 align-self-center">
					<h1 class="secondfont mb-3 font-weight-bold">BusWorld is an HTML Bootstrap Template for Professional Blogging</h1>
					<p class="mb-3">
						Beautifully crafted with the latest technologies, SASS & Bootstrap 4.1.3, Mundana is the perfect design for your professional blog. Homepage, post article and category layouts available.
					</p>
				</div>
				<div class="distortion" />
			</div>
		</div>
	</div>
</div>
<div class="container pt-4 pb-4">
      <h5 class="font-weight-bold spanborder">
        <span>Actualité</span>
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
    <div class="overlay first" />
    <div class="overlay second" />
    <div class="overlay third" />
</div>
</template>
<script>
import { gsap, TweenMax } from 'gsap'
import HoverEffect from 'hover-effect/dist/hover-effect.js'
import image from '~/assets/a.png'
import image2 from '~/assets/b.png'
import mask from '~/assets/diss.png'
import { categoryElements } from '@/apollo/query'
export default {
  layout: 'Default',
  apollo: {
    categoryElements: {
      query: categoryElements,
      fetchPolicy: 'cache-first',
      variables() {
        return { link: 'actu', nb: 4 }
      }
    },
  },
  data: () => {
    return {
      relatedArticle: []
    }
  },
  watch: {
    async categoryElements(val) {
      this.relatedArticle = val
    }
  },
  mounted () {
    HoverEffect({
      parent: document.querySelector('.distortion'),
      intensity: 0.2,
      image1: image,
      image2,
      displacementImage: mask,
      imagesRatio: 100 / 220
    })
    // DISTORTION
    gsap.from('.distortion', 1.5, {
      delay: 2,
      opacity: 0,
      y: '20',
      ease: 'Expo.easeInOut'
    })
    TweenMax.staggerFrom('.topnav', 1.5, {
      delay: 1.5,
      opacity: 0,
      y: '20',
      ease: 'Expo.easeInOut'
    }, 0.08)
    // TEXT
    gsap.from('.jumbotron .secondfont', 1.5, {
      delay: 1,
      opacity: 0,
      y: '0',
      ease: 'Expo.easeInOut'
    })
    gsap.from('.jumbotron .mb-3', 1.5, {
      delay: 1.3,
      y: '-100%',
      ease: 'Expo.easeInOut'
    })
    // OVERLAY
    gsap.to('.first', 1.5, {
      delay: 0.5,
      top: '-100%',
      ease: 'Expo.easeInOut'
    })

    gsap.to('.second', 1.5, {
      delay: 0.7,
      top: '-100%',
      ease: 'Expo.easeInOut'
    })

    gsap.to('.third', 1.5, {
      delay: 0.9,
      top: '-100%',
      ease: 'Expo.easeInOut'
    })
  }
}
</script>
<style scoped>
.distortion {
  width: 600px;
  height: 270px;
  position: absolute;
  right: 0px;
  bottom: 0;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  z-index: 1040;
}

.first {
  background: #000000;
}

.second {
  background: #000000;
  left: 33.3%;
}

.third {
  background: #000000;
  left: 66.6%;
}
</style>
