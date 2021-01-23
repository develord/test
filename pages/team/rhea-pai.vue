<template>
  <div>
    <section class="page-title text-center style-two">
      <div v-lazy:background-image="{src: '/img/shape-62.webp', loading: '/img/shape-62.webp'}" class="pattern-layer" /><div class="auto-container" />
    </section>
    <div class="container">
      <div class="row clearfix" style="    padding-bottom: 37px;">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="content-box" style="margin-top: 56px">
            <div class="col-lg-12 col-md-12 col-sm-12 team-block">
              <div class="team-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                <div class="inner-box" style="padding: 24px 0px;">
                  <div class="image-box" style="    border-radius: 25px;margin: auto;width: 233px;height: 233px;">
                    <img
                      v-lazy="{ src: teams[2].img, loading: teams[2].img }"
                      width="140"
                      height="140"
                      style=" border-radius: 25px;"
                      alt="ankur"
                      class="wp-post-image is-lazy"
                      :src="teams[2].img"
                      @click="descption = i"
                    >
                    <ul class="contact-box clearfix" style="right: -60px;">
                      <li class="email">
                        <a :href="'mailto:http://' + teams[2].email"> <img style="width: 34px;margin: 10px 5px 13px 12px;" src="https://img.icons8.com/nolan/64/email.png"> <span>{{ teams[2].email }}</span> </a>
                      </li>
                      <li v-if="teams[2].linkedin || teams[2].researchgate|| teams[2].github" class="social-links">
                        <a href="javascript:void(0)" class="share"><img style="width: 25px;" src="https://img.icons8.com/ultraviolet/40/000000/share.png"></a>
                        <ul class="list clearfix">
                          <li v-if="teams[2].linkedin">
                            <a :href="teams[2].linkedin" style="background-color:transparent; color: rgb(249,+50,+110)"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"></a>
                          </li>
                          <li v-if="teams[2].researchgate">
                            <a :href="teams[2].researchgate" style="background-color:transparent; color: rgb(249,+50,+110)"><img src="https://img.icons8.com/windows/32/000000/researchgate.png"></a>
                          </li>
                          <li v-if="teams[2].google">
                            <a :href="teams[2].researchgate" style="background-color:transparent; color: rgb(249,+50,+110)"><img src="https://img.favpng.com/15/23/14/google-scholar-academic-journal-google-logo-education-png-favpng-0uceM1mAtbc5DfsdtKmriNSDW.jpg"></a>
                          </li>
                          <li v-if="teams[2].github">
                            <a :href="teams[2].github" style="background-color:transparent; color: rgb(249,+50,+110)"><img src="https://img.icons8.com/fluent/48/000000/github.png"></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="lower-content">
                    <NuxtLink :to="teams[2].link" title="giving" class="hvr-underline-from-left1">
                      <h4 style="text-align: center;">
                        {{ teams[2].name }}
                      </h4>
                    </NuxtLink>
                    <span class="designation">{{ teams[2].title }}</span>
                    <div class="designation">
                      <a target="_blank" :href="teams[2].cv" style="width: 44px;background-color:transparent; color: rgb(249,+50,+110)">
                        <img style="width: 44px" alt="CV" title="CV" src="https://image.flaticon.com/icons/png/512/957/957342.png">
                      </a>
                    </div>
                    <div style="padding: 18px 34px;">
                      <p class="designation" style="text-align: center !important;">
                        <b>Degrees & Affiliations</b>
                      </p>
                      <span class="designation">{{ teams[2].degree }}</span>
                    </div>
                    <div class="designation">
                      <img
                        width="65"
                        alt="cell"
                        title="cell"
                        :src="'../images/tag-cell.png'"
                        class="is-lazy is-loaded"
                        data-src="../images/tag-cell.png"
                        lazy="loaded"
                      >
                      <img
                        width="65"
                        alt="genomis"
                        title="genomis"
                        :src="'../images/tag-genomis.png'"
                        class="is-lazy is-loaded"
                        data-src="../images/tag-genomis.png"
                        lazy="loaded"
                      >
                      <img
                        width="65"
                        alt="oncology"
                        title="oncology"
                        :src="'../images/tag-oncology.png'"
                        class="is-lazy is-loaded"
                        data-src="../images/tag-oncology.png"
                        lazy="loaded"
                      >
                      <img
                        width="65"
                        alt="fetus"
                        title="fetus"
                        :src="'../images/tag-fetus.png'"
                        class="is-lazy is-loaded"
                        data-src="../images/tag-cell.png"
                        lazy="loaded"
                      >
                      <img
                        width="65"
                        alt="cancer"
                        title="cancer"
                        :src="'../images/tag-cancer.png'"
                        class="is-lazy is-loaded"
                        data-src="../images/tag-cancer.png"
                        lazy="loaded"
                      >
                      <img
                        width="65"
                        alt="biology"
                        title="biology"
                        :src="'../images/tag-biology.png'"
                        class="is-lazy is-loaded"
                        data-src="../images/tag-biology.png"
                        lazy="loaded"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12">
          <div class="biography">
            <h1>Biography</h1>
            <p>
              Rhea is a member of Sharmaalab pursuing her PhD from Curtin University and Harry Perkins
              Institute of Medical Research. She received her undergraduate degree in Biotechnology from
              Northumbria University in 2018. She brings with her two years of research experience at
              Genome Institute of Singapore (GIS), A*STAR. She was involved in liver and breast cancer
              related projects, where her objective was primarily on optimizing single cell RNA-seq
              experiments on patient samples. She ventured into spatial transcriptomics and is gaining
              expertise in the area of multicolor fluorescent in situ mRNA hybridization (FISH) images.
              She is interested in studying tumor heterogeneity and evolution using single cell genomics
              and spatial transcriptomics. Her other interests include photography, exploring new cuisines
              and leisure travel.
            </p>
            <h2>Publications</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'Default',
  data () {
    return {
      descption: 0,
      teams: [
        {
          name: 'Ankur Sharma',
          title: 'Head of Lab',
          img: './images/ankur.png',
          link: '/team/ahmed-khalil',
          email: 'asharmatelome@gmail.com',
          linkedin: 'https://www.linkedin.com/in/ankur-sharma-4141971a/',
          google: 'https://scholar.google.com/citations?user=hXhCBW4AAAAJ&hl=en&oi=ao&fbclid=IwAR0ONNvmWFV8oBkU04GVONNxn1aoovIJjERGd6_Wc7DCuxymDsI5KrWYp54',
          description: `NMRC Young Investigator, Spatial & Single Cell Systems Domain, Genome Institute of Singapore`
        },
        {
          name: 'Ahmed Khalil',
          title: 'Postdoc researcher',
          email: 'ahmed.ibrahim@ntu.edu.sg',
          degree: 'PhD in School of Computer Science and Engineering,NTU, Singapore.',
          cv: 'http://oncofetal.com/pdf/ResumeAhmedKhalil.pdf',
          link: '/team/ahmed-khalil',
          img: '../images/ahmed.jpeg',
          linkedin: ' www.linkedin.com/in/ahmed-i-s-khalil',
          researchgate: 'https://www.researchgate.net/profile/Ahmed_Khalil114',
          github: 'https://github.com/AISKhalil/',
          description: `Ahmed Khalil is a Postdoctoral Research Fellow at the School of Computer Science and Engineering, Nanyang Technological University in Singapore. He received the Ph.D. degree from the same school in 2020 when he introduced methods for accurate profiling of cancer cell lines. Earlier, he got a B.Sc. degree in 2011 and an M.Sc. degree in 2015 in Electronics and Electrical Communications Engineering from Cairo University in Egypt. From early 2021, he will join Harry Perkins Institute of Medical Research to study the tumor evolution and ecosystem using single cell multi-omics data. Khalil’s research interests include a broad range of topics around computational biology, data science, and hardware acceleration.`
        },
        {
          name: 'Rhea Pai',
          link: '/team/rhea-pai',
          title: 'Research Associate',
          degree: 'PhD in Biomedical Science',
          email: 'rheakedar@gmail.com',
          cv: 'http://oncofetal.com/pdf/ResumeRheaPai.pdf',
          linkedin: 'https://www.linkedin.com/in/rhea-pai-74aa24143/',
          img: '../images/Rhea_pic.png',
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
<style scoped>
@media only screen and (max-width: 1200px){
  .team-block-two .inner-box .image-box .contact-box{
    right: -60px !important;
  }
}
.biography {
  padding: 24px;
  margin-top: 56px;
}
.emp-profile{
    padding: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #a0a0a0;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}
.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    color: #000000;
}
</style>
