<template>
  <footer class="footer-style-three">
    <div class="footer-top">
      <div class="pattern-layer">
        <div v-lazy:background-image="'/img/shape-60.png'" class="pattern-1" />
        <div v-lazy:background-image="'/img/shape-61.png'" class="pattern-2 wow slideInDown" data-wow-delay="00ms" data-wow-duration="3500ms" />
      </div>
      <div class="auto-container">
        <div class="widget-section">
          <div class="row clearfix">
            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div class="footer-widget widget_naxly_about_company_two">
                <div class="about-widget">
                  <div class="widget-title">
                    <h3>About Sharma Lab</h3>
                  </div>
                  <div class="widget-content">
                    <div class="text">
                      <p>In close association with our clinical collaborators, we study how tumors co-evolve with their microenvironment in the context of tumor initiation and drug-resistance.</p>
                    </div>
                    <figure class="footer-logo">
                      <a href="#">
                        <img alt="Awesome Image" data-src="LogoValidation.png" class="lazyload" src="/images/LogoValidation.png">
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div class="footer-widget widget_naxly_footer_services">
                <div class="links-widget">
                  <div class="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <div class="widget-content">
                    <ul class="clearfix">
                      <li><a target="_blank" href="https://perkins.org.au/">Perkins Institute</a></li>
                      <li><a target="_blank" href="https://www.curtin.edu.au/">Curtin University</a></li>
                      <li><a target="_blank" href="#">Collaborators</a></li>
                      <li><a target="_blank" href="https://www.humancellatlas.org/">HCA</a></li>
                      <li><a target="_blank" href="https://www.ncbi.nlm.nih.gov/">NCBI</a></li>
                      <li>
                        <NuxtLink to="/contact" title="contact" class="hvr-underline-from-left1">
                          Join us
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div class="footer-widget widget_naxly_contact_us_two">
                <div class="contact-widget">
                  <div class="widget-title">
                    <h3>Contact</h3>
                  </div>
                  <div class="widget-content">
                    <ul class="clearfix">
                      <li> <span>Phone:</span> <a href="#">+65 8670 1153</a></li>
                      <li> <span>Email:</span> <a href="mailto:sharmaalab1@gmail.com">sharmaalab1@gmail.com</a></li>
                      <li> <span>Address:</span> 6 Verdun St, Nedlands WA 6009, Australia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div class="footer-widget widget_naxly_contact_us_two">
                <div class="contact-widget">
                  <div class="widget-title">
                    <h3>Social</h3>
                  </div>
                  <div class="widget-content">
                    <ul class="clearfix">
                      <li> <a target="_blank" href="https://twitter.com/SharmaaLab"><span>Twitter</span> </a></li>
                      <li> <a target="_blank" href="https://github.com/sharmaalab"><span>GitHub</span> </a></li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.youtube.com/channel/UC4H2fZb64LXXOg5GbGstPKg"
                        ><span>Youtube</span> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="auto-container clearfix">
        <div class="copyright">
          <p style="text-align: center !important;">
            &copy; SharmaLab 2021, All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>

export default {
  name: 'Footer'
}
</script>
