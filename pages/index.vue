<template>
  <div>
    <v-speed-dial
      v-model="fab"
      fixed
      top
      right
      direction="bottom"
      :open-on-hover="true"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="purple"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-share-variant
          </v-icon>
        </v-btn>
      </template>
      <a target="_blank" href="https://twitter.com/Shar" style="width: 51px;; color: rgb(255, 255, 255)"><img style="width: 100%;" src="/images/twitter.png"></a>
      <a target="_blank" href="https://github.com/sharmaalab" style="width: 43px;color: rgb(255, 255, 255)"><img style="width: 43px; margin-top: 3px;" :src="'./images/github.webp'"></a>
      <a target="_blank" href="https://www.youtube.com/channel/UC4H2fZb64LXXOg5GbGstPKg" style="padding-top: 7px;width: 43px;color: rgb(255, 255, 255)"><img style="width: 43px;" :src="'./images/utube.webp'"></a>
    </v-speed-dial>
    <div data-elementor-type="wp-page" data-elementor-id="205" class="elementor elementor-205" data-elementor-settings="[]">
      <div class="elementor-inner">
        <div class="elementor-section-wrap">
          <section class="elementor-element elementor-element-97120b5 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="97120b5" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
              <div class="elementor-row">
                <div class="elementor-element elementor-element-7214dd4 elementor-column elementor-col-100 elementor-top-column" data-id="7214dd4" data-element_type="column">
                  <div class="elementor-column-wrap elementor-element-populated">
                    <div class="elementor-widget-wrap">
                      <div class="elementor-element elementor-element-7b1d353 elementor-widget elementor-widget-naxly_banner_v3" data-id="7b1d353" data-element_type="widget" data-widget_type="naxly_banner_v3.default">
                        <div class="elementor-widget-container">
                          <section class="banner-style-three">
                            <div v-lazy:background-image="{src: './images/shape18-high.webp', loading: './images/shape18-low.webp'}" class="pattern-layer" />
                            <div class="auto-container">
                              <div class="row clearfix align-items-center">
                                <div class="col-lg-5 col-md-12 col-sm-12 content-column">
                                  <div class="content-box">
                                    <h1> Sharma Lab </h1>
                                    <h2>Onco-Fetal Ecosystem</h2>
                                    <h2>From Cells to Systems  </h2>
                                    <h2>  <br>  </h2>
                                    <div class="btn-box">
                                      <NuxtLink class="theme-btn style-seven" to="/research">
                                        Research Details
                                      </NuxtLink>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="elementor-element elementor-element-1329a1d elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="1329a1d" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
              <div class="elementor-row">
                <div class="elementor-element elementor-element-3fea3a8 elementor-column elementor-col-100 elementor-top-column" data-id="3fea3a8" data-element_type="column">
                  <div class="elementor-column-wrap elementor-element-populated">
                    <div class="elementor-widget-wrap">
                      <div class="elementor-element elementor-element-a94d090 elementor-widget elementor-widget-naxly_why_choose_us_v4" data-id="a94d090" data-element_type="widget" data-widget_type="naxly_why_choose_us_v4.default">
                        <div class="elementor-widget-container">
                          <section class="chooseus-style-four">
                            <div class="auto-container">
                              <div class="row clearfix">
                                <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                  <div class="image-box">
                                    <vue-horizontal-list :items="items" :options="options">
                                      <template v-slot:default="{ item }">
                                        <div>
                                          <div class="image-container">
                                            <img v-if="!item.vid" :src="item.image">
                                            <iframe
                                              v-else
                                              style="margin-top: 40px;width: 104%;height: 336px;"
                                              frameborder="0"
                                              height="100%"
                                              width="100%"
                                              :src="item.vid"
                                            />
                                          </div>
                                        </div>
                                      </template>
                                    </vue-horizontal-list>
                                  </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                  <div id="content_block_12">
                                    <div class="content-box">
                                      <div class="sec-title text-left">
                                        <br><br>
                                        <h2>About Sharma Lab</h2>
                                        <div class="decor" style="background-image: url(https://727512.smushcdn.com/1872762/wp-content/themes/naxly/assets/images/icons/decor-1.png?lossy=1&amp;strip=1&amp;webp=1);" />
                                      </div>
                                      <div class="inner-box">
                                        <div class="single-item">
                                          <div class="box">
                                            <p>Sharma Lab focuses on the triquetra of early development, regeneration, and cancer. We are interested in understanding the developmental origin of cancer by uncovering the similarities between embryogenesis and tumor development. In close association with our clinical collaborators, we study how tumors co-evolve with their microenvironment, especially in the context of tumor initiation and drug-resistance. To address these questions, we combine single-cell genomics, spatial transcriptomics, and machine learning approaches. We are expanding our collaborations to integrate experimental, computational, and clinical knowledge to exhume the ‘seeds’ of cancer development.</p>
                                            <div class="btn-box">
                                              <NuxtLink class="theme-btn style-six" to="/presentation">
                                                Details
                                              </NuxtLink>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="elementor-element elementor-element-cd01a5e elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="cd01a5e" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
              <div class="elementor-row">
                <div class="elementor-element elementor-element-425cb90 elementor-column elementor-col-100 elementor-top-column" data-id="425cb90" data-element_type="column">
                  <div class="elementor-column-wrap elementor-element-populated">
                    <div class="elementor-widget-wrap">
                      <div class="elementor-element elementor-element-6b19ffc elementor-widget elementor-widget-naxly_why_choose_us_v2" data-id="6b19ffc" data-element_type="widget" data-widget_type="naxly_why_choose_us_v2.default">
                        <div class="elementor-widget-container">
                          <section class="chooseus-style-two bg-color-3">
                            <div class="bg-layer" style="background-image: url(https://727512.smushcdn.com/1872762/wp-content/uploads/2020/03/choose-bg.png?lossy=1&amp;strip=1&amp;webp=1);" />
                            <div class="auto-container">
                              <div class="title-inner mb-35 clearfix">
                                <div class="sec-title light text-left pull-left">
                                  <br>
                                  <h2>Subscribe to our Newsletter to get our latest blogs and articles.</h2>
                                  <div class="decor" style="background-image: url(./images/LogoValidation.png);" />
                                  <div class="subscribe-box">
                                    <div class="form-group">
                                      <input v-model="email" type="email" name="email" placeholder="Email Address..." required="">
                                    </div>
                                    <button class="theme-btn style-one" @click="subscribe">
                                      Subscribe
                                    </button>
                                    <br><br><br>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="news-section style-two style-three">
            <div class="auto-container">
              <div class="sec-title text-left pull-left">
                <h2>Latest news &amp; updates</h2>
                <div class="decor" style="background-image: url(https://727512.smushcdn.com/1872762/wp-content/themes/naxly/assets/images/icons/decor-1.png?lossy=1&amp;strip=1&amp;webp=1);" />
              </div>
              <div class="upper-box clearfix mb-40">
                <div class="btn-box pull-right mt-60" />
              </div>
              <div class="row clearfix">
                <div v-for="post in listNews" :key="post._id" class="col-lg-4 col-md-6 col-sm-12 news-block">
                  <div class="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          v-lazy="{ src: '/images/' + post.image_large.high, loading: '/images/' + post.image_large.low}"
                          :alt="post.title"
                          :title="post.title"
                          :src="'/images/' + post.image_large.low"
                          width="370"
                          height="250"
                          data-sizes="(max-width: 370px) 100vw, 370px"
                          class="attachment-naxly_370x250 size-naxly_370x250 wp-post-image lazyloaded"
                          loading="lazy"
                          sizes="(max-width: 370px) 100vw, 370px"
                        >
                      </figure>
                      <div class="lower-content">
                        <div class="title-box">
                          <div class="post-date">
                            <p>{{ post.created_at.substring(0,4) }}</p>
                            <span>{{ post.created_at.substring(5,7) }}</span>
                          </div>
                          <h4>
                            <NuxtLink :to="post.link">
                              {{ post.title }}
                            </NuxtLink>
                          </h4>
                        </div>
                        <div class="text">
                          <p>{{ post.description }} ...</p>
                        </div>
                        <div class="link">
                          <NuxtLink :to="post.link">
                            Read More
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="more-btn">
                <NuxtLink
                  to="/news"
                  title="research"
                  style="margin: auto;margin-top: 35px; display: block; width: 169px;"
                  class="btn-style-eight"
                >
                  Read More
                </NuxtLink>
              </div>
            </div>
          </section>
          <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            right
            rounded="pill"
            color="deep-purple accent-4"
            shaped
            top
          >
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueHorizontalList from '@/components/front/components/vue-horizontal-list.vue'
import page from '~/mixins/page.js'
export default {
  layout: 'Default',
  head () {
    return {
      title: 'Sharma Lab',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
      ]
    }
  },
  components: { VueHorizontalList },
  mixins: [page],
  data () {
    return {
      fab: false,
      email: '',
      text: 'Welcome to our universe you will have a mail every time we update our news',
      timeout: 3000,
      snackbar: false,
      teams: [
        {
          name: 'Ankur',
          title: 'Director',
          img: './images/ankur.png',
          email: 'sharmaalab1@gmail.com',
          description: `NMRC Young Investigator, Spatial & Single Cell Systems Domain, Genome Institute of Singapore`
        },
        {
          name: 'ahmed',
          title: 'Collaborator',
          email: 'ahmed.ibrahim@ntu.edu.sg',
          img: './images/ahmed.jpeg',
          linkedin: ' www.linkedin.com/in/ahmed-i-s-khalil',
          researchgate: 'https://www.researchgate.net/profile/Ahmed_Khalil114',
          github: 'https://github.com/AISKhalil/',
          description: `Ahmed Khalil is a Postdoctoral Research Fellow at the School of Computer Science and Engineering, Nanyang Technological University in Singapore. He received the Ph.D. degree from the same school in 2020 when he introduced methods for accurate profiling of cancer cell lines. Earlier, he got a B.Sc. degree in 2011 and an M.Sc. degree in 2015 in Electronics and Electrical Communications Engineering from Cairo University in Egypt. From early 2021, he will join Harry Perkins Institute of Medical Research to study the tumor evolution and ecosystem using single cell multi-omics data. Khalil’s research interests include a broad range of topics around computational biology, data science, and hardware acceleration.`
        },
        {
          name: 'Shivani',
          title: 'Collaborator',
          email: 'shivani1996srivastava1996@gmail.com',
          linkedin: 'https://www.linkedin.com/in/shivani-srivastava-316b91175/',
          researchgate: 'https://www.researchgate.net/profile/Shivani_Srivastava9',
          img: './images/Shivani_pic.jpg',
          description: `Shivani is a research intern at Sharmaalab. Her research interest includes applying computational approaches to understand heterogeneity of tumor tissues and cell-cell interactions, to discover the phenomenon causing togetherness of the different cells and what leads to selection of the driving mutations. She is currently tracking the pre and post treatment cell interactions in breast cancer. She completed her masters in bioinformatics from University of Allahabad, India. She recieved her Bachelor of Biotechnology degree from CSJM University, India. Apart from research, she is a zoophilist.`
        },
        {
          name: 'Rhea',
          title: 'Collaborator',
          email: 'rheakedar@gmail.com',
          linkedin: 'https://www.linkedin.com/in/rhea-pai-74aa24143/',
          img: './images/Rhea_pic.png',
          description: `Rhea is a Research Officer at Genome Institute of Singapore (GIS), A*STAR. She received her B.Sc. degree in Biotechnology from Northumbria University in 2018.  She has worked extensively over the last two years in liver and breast cancer related projects primarily focused on optimizing single cell RNA-seq experiments on patient samples. She has also ventured into spatial transcriptomics and attained expertise in the area of multicolor fluorescent in situ mRNA hybridization (FISH) images. Her research interest is in studying tumor heterogeneity and evolution using single cell genomics. Rhea will be joining Sharmaalab at Harry Perkins Institute in early 2021. `
        }
      ],
      items: [
        {
          image: './images/perkins.png'
        },
        {
          image: './images/2s_curtin.png'
        },
        {
          image: './images/1s_perth.png'
        },
        {
          vid: 'https://youtube.com/embed/O-ByPYK-2fo?autoplay=1&controls=0&showinfo=0&autohide=1'
        }
      ],
      options: {
        autoplay: { play: false, repeat: true, speed: 3000 },
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { size: 4 }
        ]
      },
      listNews: []
    }
  },
  computed: {
    posts () {
      return this.$store.state.listePost
    }
  },
  watch: {
    posts: {
      immediate: true,
      handler (newVal) {
        this.listNews = newVal.filter(el => el.category.name.toLowerCase() === 'news')
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getPosts')
  },
  methods: {
    subscribe () {
      if (this.email) { this.snackbar = true }
    }
  }
}
</script>

<style>
.purple {
background-color: var(--purple)  !important;
}
.v-speed-dial--top {
   top: 42px  !important;
}
.footer-widget .logo {
  margin-top: 0px;
}
.chooseus-style-two .title-inner .text {
  margin-top: 8px;
}
.chooseus-style-two .title-inner {
  padding: 53px 0px;
}
.sec-title input {
      position: relative;
    width: calc(100% - 165px);
    height: 55px;
    background: rgba(255,255,255,.1);
    color: rgba(255,255,255,.6);
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #1e2332;
}
.bg-layer {
  background-size: initial;
}
p {
  text-align: justify !important;
}
.main-header.style-three .right-column .social-links li a {
  border-radius: 16%;
}
.chooseus-style-two {
  padding: 0px;
}
.sec-title.pull-left {
  padding-top: 53px;
}
@media screen and (max-width: 484px) {
  .logo {
    margin-right: 0 !important;
    margin-top: 0 !important;
  }
  .logo .hvr-underline-from-left1 img{
    width: 161px !important;
    margin-top: 0 !important;
  }
}
@media screen and (max-width: 1069px) {
  .chooseus-style-two .auto-container{
    padding: 0px 32px;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #000000;
  }
}
@media only screen and (max-width: 731px) {
  .sec-title input {
    width: 100%;
  }
  #content_block_12 .content-box .inner-box .single-item .box{
    padding: 18px;
  }
  .chooseus-style-two .title-inner .sec-title {
    width: 100% !important;
  }
}
@media only screen and (max-width: 991px) {
  .chooseus-style-two .title-inner .sec-title {
    width: 70%;
  }
  .header-upper .pull-left {
    float: right;
  }
  .bm-burger-button {
      display: block !important;
  }
  .banner-style-three {
      padding: 200px 0px 100px 0px;
      background: #ffffff !important;
  }
  .banner-style-three .content-box h1, .banner-style-three .content-box p {
    color:  rgb(0, 0, 0);
  }
  .chooseus-style-four {
    padding: 0;
  }
  .chooseus-style-four .image-box {
    margin-top: 0px;
    height: 193px;
  }
  .inner-box {
    margin-bottom: 58px;
  }
}
@media screen and (max-width: 1069px) {
  .main-header.style-three .header-upper .logo {
    margin-right: 50px;
  }
}
@media screen and (max-width: 1280px) {
  .main-menu .navigation > li {
    margin: 0px 12px
  }
  .hvr-underline-from-left1 img {
        margin-left: 22px !important;
  }
}
.banner-style-three .pattern-layer {
  background-size: contain;
}
.news-section.style-three {
  margin-top: 35px;
}
</style>
