<template>
  <div>
    <section class="page-title text-center style-two">
      <div v-lazy:background-image="{src: '/img/shape-62.webp', loading: '/img/shape-62.webp'}" class="pattern-layer" /><div class="auto-container">
        <div class="content-box">
          <div class="row">
            <div class="col-md-2">
              <div class="profile-img">
                <img style="width: 132px;" :src="'../../images/Shivani_pic.jpg'" alt="">
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head text-left">
                <h2 style="    margin-top: 60px;">
                  Shivani Srivastava
                </h2>
                <h6>
                  Research Intern
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container emp-profile">
      <form method="post">
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p style="margin-top: 0;">
                <b>Email: </b>shivani1996srivastava1996@gmail.com <br>
                <b>Contact: </b>91-8887525280 <br>
                <b>DOB:</b> 03/09/1996<br>
                <b>Nationality:</b> Indian <br>
                <b>LAB: </b>Sharmaalab
              </p>
            </div>
          </div>
          <div class="col-md-8">
            <div id="myTabContent" class="tab-content profile-tab">
              <div id="home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab">
                <div class="row">
                  <div class="row">
                    <div class="col-md-8">
                      <label>RESEARCH EXPERIENCES AND INTERESTS</label>

                      <p>
                        Single cell Data analysis
                        Population Genomics
                        Biomolecular Structure modelling and Simulation
                        Metagenome Profiling
                        NGS Data Analysis.
                      </p>

                      <label style="margin-top: 15px;">PUBLICATIONS</label>
                      <p>
                        Srivastava S, Katara P. Distribution of Indian population-specific transporter SNPs
                        among Asians and their physiological consequences. Meta Gene Volume
                        26, December 2020, 100764, <a href="https://doi.org/10.1016/j.mgene.2020.100764">https://doi.org/10.1016/j.mgene.2020.100764.</a>
                      </p>
                      <label style="margin-top: 15px;">AWARDS</label>
                      <p>
                        Poster presentation: 3

                        rd prize on “Metagenomic approach to reveal abundance

                        profile of gut metagenome” among 110 posters in an International Conference on
                        Recent Trends in Biotechnology and Bioinformatics(ICBAB-2019) organized by the
                        Department of Biotechnology and Bioinformatics, JUIT, August 01-03, 2019.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  layout: 'Default',
  components: {
  }
}
</script>
<style scoped>
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
