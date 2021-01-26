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
                        <h4>
                          If you would like to support our collaborative efforts in the Sharma Lab research community and beyond, please consider making a contribution.
                        </h4><div class="decor" style="background-image: url(https://727512.smushcdn.com/1872762/wp-content/themes/naxly/assets/images/icons/decor-1.png?lossy=1&amp;strip=1&amp;webp=1);" />
                      </div><div class="text text-center">
                        <p style="text-align: center !important;">
                          Gifts can be made by check (payable to Perkins Institute) and mailed to:<br>
                          Harry Perkins Institute of Medical Research:<br>
                          6 Verdun St, Nedlands WA 6009, Australia<br>
                          Attn: Ankur sharma<br>
                          Please indicate the gift designation (Sharma Lab) on the memo line or with an attached note.
                        </p>
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
    }
  }
}
</script>
<style scoped>
.chooseus-style-four .image-box {
    margin-top: 0;
}
</style>
