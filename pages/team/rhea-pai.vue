<template>
  <div>
    <section class="page-title text-center style-two">
      <div v-lazy:background-image="{src: '/img/shape-62.webp', loading: '/img/shape-62.webp'}" class="pattern-layer" /><div class="auto-container">
        <div class="content-box">
          <div class="row">
            <div class="col-md-2">
              <div class="profile-img">
                <img style="width: 132px;" :src="'../../images/Rhea_pic.png'" alt="">
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head text-left">
                <h2 style="    margin-top: 60px;">
                  RHEA PAI
                </h2>
                <h6>
                  Research Associate
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
                CONTACT DETAILS <br>
                Block 23, Tampines Street 34,
                #03-12, The Eden @ Tampines,
                Singapore 529233 <br>
                @linkedin.com/in/rhea-pai-
                74aa24143 <br>
                rheakedar@gmail.com <br>
                +65 86079307 <br>
                rhea_pai@gis.a-star.edu.sg <br>
                4th July 1996
              </p>
              <p>SKILLS</p>

              <a href="">Handling patient samples</a><br>
              <a href="">Performing single-cell RNA
                sequencing experiments</a><br>
              <a href="">Performing spatial
                transcriptomics experiments such
                as RNA Scope</a><br>
              <a href="">Imaging slides and quantify
                images</a><br>
              <a href="">Complex in vitro co-culture
                experiments</a><br>
              <a href="">Execute flow cytometry
                experiments</a><br>
            </div>
          </div>
          <div class="col-md-8">
            <div id="myTabContent" class="tab-content profile-tab">
              <div id="home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab">
                <div class="row">
                  <div class="row">
                    <div class="col-md-8">
                      <label>PERSONAL PROFILE</label>

                      <p>
                        Experienced Research Officer with a demonstrated history of working
                        in the research industry. Skilled in Wet Lab, Team Leadership, Event
                        Planning and Event Management. Strong research professional with a
                        Bachelor's degree focused in Biotechnology from Northumbria
                        University.
                      </p>

                      <label style="margin-top: 15px;">EDUCATION</label>
                      <p>
                        Bachelor of Science (Hons) in Biotechnology <br>
                        <b>2018</b> <br>

                        Diploma in Biomedical Sciences <br>
                        <b>2015</b> <br>

                        Delhi Public School International Singapore (DPSIS)
                        Passed with Distinction
                        Management Development Institute of Singapore (MDIS)
                        Cambridge A levels <br>
                        <b>2014 </b> <br>

                        Delhi Public School International Singapore (DPSIS)
                        Cambridge O levels
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
