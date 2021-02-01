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
              </div>
              <div v-for="(item, i) in teams" :key="i" class="col-lg-4 col-md-6 col-sm-12 team-block">
                <div class="team-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                  <div class="inner-box">
                    <div class="image-box">
                      <NuxtLink :to="item.link">
                        <img
                          v-lazy="{ src: item.img, loading: item.img }"
                          width="140"
                          height="140"
                          alt="ankur"
                          class="wp-post-image is-lazy"
                          :src="item.img"
                          @click="descption = i"
                        >
                      </NuxtLink>
                      <ul class="contact-box clearfix">
                        <li class="email">
                          <a :href="'mailto:http://' + item.email"> <img style="width: 34px;margin: 10px 5px 13px 12px;" src="https://img.icons8.com/nolan/64/email.png"> <span>{{ item.email }}</span> </a>
                        </li>
                        <div v-if="item.linkedin || item.researchgate|| item.github" class="social-links">
                          <li>
                            <a target="_blank" :href="item.twitter" style="background-color:transparent; color: rgb(249,+50,+110)">
                              <img style="width: 35px;" :src="'./images/icotwitter.png'">
                            </a>
                          </li>
                          <li>
                            <a target="_blank" :href="item.google" style="background-color:transparent; color: rgb(249,+50,+110)">
                              <img style="width: 35px;" :src="'./images/icogooglesch.png'">
                            </a>
                          </li>
                          <li>
                            <a target="_blank" :href="item.linkedin" style="background-color:transparent; color: rgb(249,+50,+110)">
                              <img style="width: 35px;" :src="'./images/icolinkedin.png'">
                            </a>
                          </li>
                          <li>
                            <a target="_blank" :href="item.github" style="background-color:transparent; color: rgb(249,+50,+110)">
                              <img style="width: 35px;" :src="'./images/icogithub.png'">
                            </a>
                          </li>
                          <li>
                            <a target="_blank" :href="item.researchgate" style="background-color:transparent; color: rgb(249,+50,+110)">
                              <img style="width: 35px;" :src="'./images/icorgate.png'">
                            </a>
                          </li>
                        </div>
                      </ul>
                    </div>
                    <div class="lower-content">
                      <NuxtLink :to="item.link" :title="item.name" class="hvr-underline-from-left1">
                        <h4>{{ item.name }}</h4>
                      </NuxtLink>
                      <span class="designation">{{ item.title }}</span>
                      <div class="designation">
                        <img
                          width="45"
                          alt="cell"
                          style="margin: 2px;"
                          title="cell"
                          :src="'./images/tag-cell.png'"
                          class="is-lazy is-loaded"
                          data-src="./images/tag-cell.png"
                          lazy="loaded"
                        >
                        <img
                          width="45"
                          style="margin: 2px;"
                          alt="Genomics"
                          title="Genomics"
                          :src="'./images/tag-genomis.png'"
                          class="is-lazy is-loaded"
                          data-src="./images/tag-genomis.png"
                          lazy="loaded"
                        >
                        <img
                          width="45"
                          alt="oncology"
                          title="oncology"
                          :src="'./images/tag-oncology.png'"
                          class="is-lazy is-loaded"
                          data-src="./images/tag-oncology.png"
                          lazy="loaded"
                        >
                        <img
                          width="45"
                          alt="Oncofetal"
                          title="Oncofetal"
                          :src="'./images/tag-fetus.png'"
                          class="is-lazy is-loaded"
                          data-src="./images/tag-cell.png"
                          lazy="loaded"
                        >
                        <img
                          width="45"
                          alt="cancer"
                          title="cancer"
                          :src="'./images/tag-cancer.png'"
                          class="is-lazy is-loaded"
                          data-src="./images/tag-cancer.png"
                          lazy="loaded"
                        >
                        <img
                          width="45"
                          style="margin: 2px;"
                          alt="biology"
                          title="biology"
                          :src="'./images/tag-biology.png'"
                          class="is-lazy is-loaded"
                          data-src="./images/tag-biology.png"
                          lazy="loaded"
                        >
                        <img
                          width="45"
                          style="margin: 2px;"
                          alt="immunology"
                          title="immunology"
                          :src="'./images/immunology.png'"
                          class="is-lazy is-loaded"
                          data-src="./images/immunology.png"
                          lazy="loaded"
                        >
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
          title: 'Laboratory Head',
          img: '../images/ankur.png',
          link: '/team/ankur-sharma',
          twitter: 'https://twitter.com/asharmaiisc',
          github: 'https://github.com/sharmaalab',
          linkedin: 'https://www.linkedin.com/in/ankur-sharma-4141971a/',
          google: 'https://scholar.google.com/citations?user=hXhCBW4AAAAJ&hl=en&oi=ao&fbclid=IwAR0ONNvmWFV8oBkU04GVONNxn1aoovIJjERGd6_Wc7DCuxymDsI5KrWYp54',
          researchgate: 'https://www.researchgate.net/profile/Ankur_Sharma5',
          cv: 'http://oncofetal.com/pdf/ResumeAnkurSharma.pdf',
          degree: 'Harry Perkins Institute of Medical Research<br> Senior Lecturer, Curtin University <br> PhD, Indian Institute of Science, Bangalore',
          email: 'ankur.sharma@curtin.edu.au',
          description: `NMRC Young Investigator, Spatial & Single Cell Systems Domain, Genome Institute of Singapore`
        },
        /*     {
          name: 'Ahmed Khalil',
          title: 'Postdoc researcher',
          email: 'ahmedibr001@ntu.edu.sg',
          degree: 'PhD in School of Computer Science and Engineering,NTU, Singapore.',
          twitter: 'https://twitter.com/Ahmed_IS_Khalil',
          cv: 'http://oncofetal.com/pdf/ResumeAhmedKhalil.pdf',
          google: 'https://scholar.google.com/citations?user=1shSs64AAAAJ&hl=en&oi=ao',
          link: '/team/ahmed-khalil',
          img: '../images/ahmed.jpeg',
          linkedin: 'https://www.linkedin.com/in/ahmed-i-s-khalil',
          researchgate: 'https://www.researchgate.net/profile/Ahmed_Khalil114',
          github: 'https://github.com/AISKhalil/',
          description: `Ahmed Khalil is a Postdoctoral Research Fellow at the School of Computer Science and Engineering, Nanyang Technological University in Singapore. He received the Ph.D. degree from the same school in 2020 when he introduced methods for accurate profiling of cancer cell lines. Earlier, he got a B.Sc. degree in 2011 and an M.Sc. degree in 2015 in Electronics and Electrical Communications Engineering from Cairo University in Egypt. From early 2021, he will join Harry Perkins Institute of Medical Research to study the tumor evolution and ecosystem using single cell multi-omics data. Khalil’s research interests include a broad range of topics around computational biology, data science, and hardware acceleration.`
        }, */
        {
          name: 'Rhea Pai',
          link: '/team/rhea-pai',
          title: 'PhD student',
          degree: 'PhD student in Biomedical Science, Curtin University and Harry Perkins Institute of Medical Research',
          email: 'rheakedar@gmail.com',
          twitter: 'https://twitter.com/rheapai1',
          google: 'https://scholar.google.com/citations?view_op=list_works&hl=en&user=JCqhjAYAAAAJ',
          linkedin: 'https://www.linkedin.com/in/rhea-pai-74aa24143/',
          researchgate: 'https://www.researchgate.net/profile/Rhea_Pai5',
          github: '#',
          cv: 'http://oncofetal.com/pdf/ResumeRheaPai.pdf',
          img: './images/Rhea_pic.png',
          description: `Rhea is a Research Officer at Genome Institute of Singapore (GIS), A*STAR. She received her B.Sc. degree in Biotechnology from Northumbria University in 2018.  She has worked extensively over the last two years in liver and breast cancer related projects primarily focused on optimizing single cell RNA-seq experiments on patient samples. She has also ventured into spatial transcriptomics and attained expertise in the area of multicolor fluorescent in situ mRNA hybridization (FISH) images. Her research interest is in studying tumor heterogeneity and evolution using single cell genomics. Rhea will be joining Sharmaalab at Harry Perkins Institute in early 2021. `
        },
        {
          name: 'Shivani Sriva..',
          title: 'Research Intern',
          twitter: 'https://twitter.com/Shivani35672796',
          link: '/team/shivani-srivastava',
          cv: 'http://oncofetal.com/pdf/ResumeShivaniSrivastava.pdf',
          email: 'shivani1996srivastava1996@gmail.com',
          linkedin: 'https://www.linkedin.com/in/shivani-srivastava-316b91175/',
          researchgate: 'https://www.researchgate.net/profile/Shivani_Srivastava9',
          degree: 'M.Sc in Bioinformatics, University of Allahabad, India.',
          img: './images/Shivani_pic.jpg',
          description: `Shivani is a research intern at Sharmaalab. Her research interest includes applying computational approaches to understand heterogeneity of tumor tissues and cell-cell interactions, to discover the phenomenon causing togetherness of the different cells and what leads to selection of the driving mutations. She is currently tracking the pre and post treatment cell interactions in breast cancer. She completed her masters in bioinformatics from University of Allahabad, India. She recieved her Bachelor of Biotechnology degree from CSJM University, India. Apart from research, she is a zoophilist.`
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.designation {
  text-align: center;
}
.designation img, .team-block-two .inner-box .image-box {
  margin: auto;
}
.team-block-two .inner-box .image-box {
  width: 220px;
  height: 220px;
}

.team-block-two .inner-box .image-box .contact-box{
    position: absolute;
    right: -93px;
    bottom: -90px;
    width: 50px;
    margin: auto;
    height: 224px;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>
<style>
.designation {
  text-align: center;
}
.designation img {
  margin: auto;
}
.team-block-two .inner-box .image-box .contact-box{
    position: absolute;
    right: -93px;
    bottom: -90px;
    width: 50px;
    margin: auto;
    height: 224px;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.team-block-two .inner-box .image-box .contact-box .social-links {
  width: 100%;
  bottom: 5px !important;
}
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
