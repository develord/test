<template>
  <div>
    <section class="page-title text-center style-two">
      <div v-lazy:background-image="{src: '/img/shape-62.webp', loading: '/img/shape-62.webp'}" class="pattern-layer" /><div class="auto-container">
        <div class="content-box">
          <h1 />
        </div>
      </div>
    </section>
    <div class="elementor-widget-container">
      <section class="news-section sec-pad-2">
        <div v-if="loading" class="auto-container d-flex flex-wrap justify-content-start">
          <div v-for="(n,index) in 12" :key="index" style="width: 351px;height: 350px;">
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
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Basic'
}
</script>
