<template>
  <div>
    <SubHeaderSample />
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
                            <div class="image-box" style="margin-top: 166px;">
                              <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/Ev3Q3O-3tpo"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              />
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div id="content_block_12">
                              <div class="content-box">
                                <div class="sec-title text-left">
                                  <p>Why Choose Us</p>
                                  <h2>About Sharma Lab</h2>
                                  <div class="decor" style="background-image: url(https://727512.smushcdn.com/1872762/wp-content/themes/naxly/assets/images/icons/decor-1.png?lossy=1&amp;strip=1&amp;webp=1);" />
                                </div>
                                <div class="inner-box">
                                  <div class="single-item">
                                    <div class="box">
                                      <br><br><br><br><br><br><br><br>
                                      <p>- Single-cell analysis of ~200,000 cells in HCC and fetal liver leads to the discovery of a shared onco-fetal ecosystem that drives immunosuppressive macrophages (Sharma et. al., 2020)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div id="content_block_12">
                              <div class="content-box">
                                <div class="inner-box">
                                  <div class="single-item">
                                    <div class="box">
                                      <br><br><br><br><br><br>
                                      <p> - Ever wondered why chemotherapy works for some patients but not for others? Well, we did, and discovered that tumors evolve differently under the selection pressure of same drug and ‘fate’ lies in the ‘fidelity of stem-cell hierarchy’.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div class="image-box" style="margin-top: 78px;">
                              <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/rgG7wvDHuCs"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              />
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
  </div>
</template>
<script>
import SubHeaderSample from '~/components/front/components/SubHeaderSample.vue'
export default {
  layout: 'Default',
  head () {
    return {
      title: 'About Us',
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
<style lang="css" scoped>
@media only screen and (max-width: 376px) {
  iframe {
      margin-top: 0px;
      width: 101%;
      height: 205px ;
  }
}
@media  (max-width: 768px) and (min-width: 376px) {
  .chooseus-style-four .image-box {
      margin-top: 0px;
      height: auto;
  }
  iframe {
      margin-top: 0px;
      width: 101%;
      height: 393px !important;
  }
}

@media only screen and (max-width: 991px) {
  iframe {
      margin-top: 0px;
      width: 101%;
      height: 192px;
  }
}
</style>
