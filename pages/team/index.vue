<template>
  <div>
    <SubHeaderSample />
    <div class="elementor-element elementor-element-f79df3f elementor-widget elementor-widget-naxly_our_team_v2" data-id="f79df3f" data-element_type="widget" data-widget_type="naxly_our_team_v2.default">
      <div class="elementor-widget-container">
        <section id="team" class="team-style-two bg-color-1">
          <div class="pattern-layer" style="background-image: url();" />
          <div class="auto-container">
            <div class="row clearfix">
              <div class="col-lg-12" style="margin-bottom: 52px;">
                <h2>Meet us</h2>
                <p>
                  We select our partners on their capabilities to set up world class strategies and execute them without any compromise to quality aspects. “Zero failure” is expected during our missions.

                  Our team consists of highly renowned professionals  having all a minimum of 15 to 20 years experience in their field of expertise. Experience being also sanctioned by demonstrated  personal international achievements combined with  excellent academics records.

                  We only work with professionals committed  to our values and those of our clients.
                </p>
              </div>
              <div v-for="(item, i) in teams" :key="i" class="col-lg-3 col-md-6 col-sm-12 team-block">
                <div class="team-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                  <div class="inner-box">
                    <div class="image-box">
                      <img
                        v-lazy="{ src: item.img, loading: item.img }"
                        width="140"
                        height="140"
                        alt="ankur"
                        class="wp-post-image is-lazy"
                        :src="item.img"
                        @click="descption = i"
                      >
                      <ul class="contact-box clearfix">
                        <li class="email">
                          <a :href="'mailto:http://' + item.email"> <img style="width: 34px;margin: 10px 5px 13px 12px;" src="https://img.icons8.com/nolan/64/email.png"> <span>{{ item.email }}</span> </a>
                        </li>
                        <li v-if="item.linkedin || item.researchgate|| item.github" class="social-links">
                          <a href="javascript:void(0)" class="share"><img style="width: 25px;" src="https://img.icons8.com/ultraviolet/40/000000/share.png"></a>
                          <ul class="list clearfix">
                            <li v-if="item.linkedin">
                              <a :href="item.linkedin" style="background-color:transparent; color: rgb(249,+50,+110)"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"></a>
                            </li>
                            <li v-if="item.researchgate">
                              <a :href="item.researchgate" style="background-color:transparent; color: rgb(249,+50,+110)"><img src="https://img.icons8.com/windows/32/000000/researchgate.png"></a>
                            </li>
                            <li v-if="item.google">
                              <a :href="item.researchgate" style="background-color:transparent; color: rgb(249,+50,+110)"><img src="https://img.favpng.com/15/23/14/google-scholar-academic-journal-google-logo-education-png-favpng-0uceM1mAtbc5DfsdtKmriNSDW.jpg"></a>
                            </li>
                            <li v-if="item.github">
                              <a :href="item.github" style="background-color:transparent; color: rgb(249,+50,+110)"><img src="https://img.icons8.com/fluent/48/000000/github.png"></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div class="lower-content">
                      <NuxtLink :to="item.link" title="giving" class="hvr-underline-from-left1">
                        <h4>{{ item.name }}</h4>
                      </NuxtLink>
                      <span class="designation">{{ item.title }}</span>
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
</template>
<script>
import SubHeaderSample from '~/components/front/components/SubHeaderSample.vue'

export default {
  layout: 'Default',
  head () {
    return {
      title: 'Our Team',
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
      descption: 0,
      teams: [
        {
          name: 'Ankur Sharma',
          title: 'Head of Lab',
          img: './images/ankur.png',
          link: '/team/ankur-sharma',
          email: 'asharmatelome@gmail.com',
          linkedin: 'https://www.linkedin.com/in/ankur-sharma-4141971a/',
          google: 'https://scholar.google.com/citations?user=hXhCBW4AAAAJ&hl=en&oi=ao&fbclid=IwAR0ONNvmWFV8oBkU04GVONNxn1aoovIJjERGd6_Wc7DCuxymDsI5KrWYp54',
          description: `NMRC Young Investigator, Spatial & Single Cell Systems Domain, Genome Institute of Singapore`
        },
        {
          name: 'Ahmed Khalil',
          title: 'Postdoc researcher',
          email: 'ahmed.ibrahim@ntu.edu.sg',
          link: '/team/ahmed-khalil',
          img: './images/ahmed.jpeg',
          linkedin: ' www.linkedin.com/in/ahmed-i-s-khalil',
          researchgate: 'https://www.researchgate.net/profile/Ahmed_Khalil114',
          github: 'https://github.com/AISKhalil/',
          description: `Ahmed Khalil is a Postdoctoral Research Fellow at the School of Computer Science and Engineering, Nanyang Technological University in Singapore. He received the Ph.D. degree from the same school in 2020 when he introduced methods for accurate profiling of cancer cell lines. Earlier, he got a B.Sc. degree in 2011 and an M.Sc. degree in 2015 in Electronics and Electrical Communications Engineering from Cairo University in Egypt. From early 2021, he will join Harry Perkins Institute of Medical Research to study the tumor evolution and ecosystem using single cell multi-omics data. Khalil’s research interests include a broad range of topics around computational biology, data science, and hardware acceleration.`
        },
        {
          name: 'Rhea Pai',
          link: '/team/rhea-pai',
          title: 'Research Associate',
          email: 'rheakedar@gmail.com',
          linkedin: 'https://www.linkedin.com/in/rhea-pai-74aa24143/',
          img: './images/Rhea_pic.png',
          description: `Rhea is a Research Officer at Genome Institute of Singapore (GIS), A*STAR. She received her B.Sc. degree in Biotechnology from Northumbria University in 2018.  She has worked extensively over the last two years in liver and breast cancer related projects primarily focused on optimizing single cell RNA-seq experiments on patient samples. She has also ventured into spatial transcriptomics and attained expertise in the area of multicolor fluorescent in situ mRNA hybridization (FISH) images. Her research interest is in studying tumor heterogeneity and evolution using single cell genomics. Rhea will be joining Sharmaalab at Harry Perkins Institute in early 2021. `
        },
        {
          name: 'Shivani Sriva..',
          title: 'Research Intern',
          link: '/team/shivani-srivastava',
          email: 'shivani1996srivastava1996@gmail.com',
          linkedin: 'https://www.linkedin.com/in/shivani-srivastava-316b91175/',
          researchgate: 'https://www.researchgate.net/profile/Shivani_Srivastava9',
          img: './images/Shivani_pic.jpg',
          description: `Shivani is a research intern at Sharmaalab. Her research interest includes applying computational approaches to understand heterogeneity of tumor tissues and cell-cell interactions, to discover the phenomenon causing togetherness of the different cells and what leads to selection of the driving mutations. She is currently tracking the pre and post treatment cell interactions in breast cancer. She completed her masters in bioinformatics from University of Allahabad, India. She recieved her Bachelor of Biotechnology degree from CSJM University, India. Apart from research, she is a zoophilist.`
        }
      ]
    }
  }
}
</script>

<style>
.team-description {
    position: relative;
    display: block;
    background: #fff;
    text-align: center;
    border-radius: 10px;
    padding: 30px 50px 30px 50px;
    box-shadow: 0 0px 50px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
}
.wp-post-image,.wp-post-image:hover  {
  cursor: pointer;
}
</style>
