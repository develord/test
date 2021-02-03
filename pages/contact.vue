<template>
  <div>
    <SubHeaderSample />
    <section class="elementor-element elementor-element-1329a1d elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="1329a1d" data-element_type="section">
      <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-row">
          <div class="elementor-element elementor-element-bdab63d elementor-widget elementor-widget-naxly_contact_info_v2" data-id="bdab63d" data-element_type="widget" data-widget_type="naxly_contact_info_v2.default">
            <div class="elementor-widget-container">
              <section class="info-section alternate-2">
                <div class="auto-container">
                  <div class="inner-container">
                    <div class="top-inner mb-55">
                      <div class="sec-title text-center">
                        <p>Contact Information</p><h2>We’d love to hear from you anytime</h2><div class="decor" style="background-image: url(https://727512.smushcdn.com/1872762/wp-content/themes/naxly/assets/images/icons/decor-1.png?lossy=1&amp;strip=1&amp;webp=1);" />
                        <div v-if="contact" v-html="JSON.parse(contact[0].content).html" />
                      </div>
                    </div><div class="info-inner">
                      <div class="row clearfix">
                        <div class="col-lg-4 col-md-6 col-sm-12 info-column">
                          <div class="info-box">
                            <div class="hidden-icon">
                              <img
                                v-lazy="{ src: './images/contact-white.png', loading: './images/contact-white.png' }"
                                :src="'./images/contact-white.png'"
                                class="is-lazy"
                                style="width: 68px;margin-top: -10px;"
                              >
                            </div><div class="box">
                              <div class="icon-box">
                                <img
                                  v-lazy="{ src: './images/contact.png', loading: './images/contact.png' }"
                                  :src="'./images/contact.png'"
                                  class="is-lazy"
                                  style="width: 68px;margin-top: -10px;"
                                >
                              </div><h4>Location</h4>
                            </div><div class="text">
                              <p v-if="contact">
                                {{ contact[0].location }}
                              </p>
                            </div>
                          </div>
                        </div><div class="col-lg-4 col-md-6 col-sm-12 info-column">
                          <div class="info-box">
                            <div class="hidden-icon">
                              <img
                                v-lazy="{ src: './images/casque-white.PNG', loading: './images/casque-white.PNG' }"
                                :src="'./images/casque-white.PNG'"
                                class="is-lazy"
                                style="width: 68px;margin-top: -10px;"
                              >
                            </div><div class="box">
                              <div class="icon-box">
                                <img
                                  v-lazy="{ src: './images/casque.PNG', loading: './images/casque.PNG' }"
                                  :src="'./images/casque.PNG'"
                                  class="is-lazy"
                                  style="width: 68px;margin-top: -10px;"
                                >
                              </div><h4>Make a Call</h4>
                            </div><div class="text">
                              <p><a v-if="contact" href="tel:+44%20555%2067%20890">{{ contact[0].tel }}</a></p>
                            </div>
                          </div>
                        </div><div class="col-lg-4 col-md-6 col-sm-12 info-column">
                          <div class="info-box">
                            <div class="hidden-icon">
                              <img
                                v-lazy="{ src: './images/mail-white.PNG', loading: './images/mail-white.PNG' }"
                                :src="'./images/mail-white.PNG'"
                                class="is-lazy"
                                style="width: 68px;margin-top: -10px;"
                              >
                            </div><div class="box">
                              <div class="icon-box">
                                <img
                                  v-lazy="{ src: './images/mail.PNG', loading: './images/mail.PNG' }"
                                  :src="'./images/mail.PNG'"
                                  class="is-lazy"
                                  style="width: 68px;margin-top: -10px;"
                                >
                              </div><h4>Send a Mail</h4>
                            </div><div class="text">
                              <p v-if="contact">
                                <a :href="'mailto:' + contact[0].location ">{{ contact[0].mail }}</a>
                              </p>
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
    </section>
  </div>
</template>
<script>
import SubHeaderSample from '~/components/front/components/SubHeaderSample.vue'
export default {
  layout: 'Default',
  head () {
    return {
      title: 'Contact Us',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
      ]
    }
  },
  components: {
    SubHeaderSample
  },
  data () {
    return {
      contact: null
    }
  },
  async beforeMount () {
    this.contact = await this.$store.dispatch('getContact')
  }
}
</script>
<style scoped>
.chooseus-style-four .image-box {
    margin-top: 0;
}
</style>
