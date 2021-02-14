import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

if (process.browser || process.static) {
  Vue.use(VueLazyload, {
    error: '/img/placeholder.jpg',
    observer: false,
    adapter: {
      loaded ({ el, Init }) {
        setTimeout(() => {
          el.classList.add('is-loaded')
        }, 200)
      }
    },
    listenEvents: ['scroll', 'transitionend', 'animationend', 'touchmove'],
    lazyComponent: true,
    preLoad: 1.3,
    throttleWait: 500
  })
}
