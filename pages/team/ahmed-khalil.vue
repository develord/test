<template>
  <div>
    <section class="page-title text-center style-two">
      <div v-lazy:background-image="{src: '/img/shape-62.webp', loading: '/img/shape-62.webp'}" class="pattern-layer" /><div class="auto-container">
        <div class="content-box">
          <div class="row">
            <div class="col-md-2">
              <div class="profile-img">
                <img style="width: 132px;" :src="'../../images/ahmed.jpeg'" alt="">
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head text-left">
                <h2 style="    margin-top: 60px;">
                  Ahmed Ibrahim Samir Khalil
                </h2>
                <h6>
                  Postdoc researcher
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
                Address: SCSE NTU, 639798, Singapore.
                Phone: (+65) 9358-9415
                Email: ahmed.ibrahim@ntu.edu.sg
                Github: https://github.com/AISKhalil/
              </p>
              <p>SKILLS</p>

              <a href=""><b>Languages: </b>Arabic and English</a><br>
              <a href=""><b>CAD Tools : </b>ModelSim, ISE, Vivado.</a><br>
              <a href=""><b>Programming : </b>VHDL/Verilog, C++, TCL scripting, R, Python,
                MATLAB.</a>
              <a href=""><b>Machine learning:</b> Scikit-learn, TensorFlow, PyTorch.</a><br>
              <a href=""><b>Bioinformatics:</b> Seurat, Scanpy.</a><br>
            </div>
          </div>
          <div class="col-md-8">
            <div id="myTabContent" class="tab-content profile-tab">
              <div id="home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab">
                <div class="row">
                  <div class="row">
                    <div class="col-md-8">
                      <label>Research Interests</label>
                      <ul>
                        <li>
                          <p>
                            <b>•  Computational biology:</b> Single-cell multi-omics data
                            integration and annotation, Copy number variations, data
                            Genome structure modeling, Discovery of functional regulatory
                            elements.
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>•  Data science:</b> Data integration, Data visualization, Statistics,
                            Machine learning, Unsupervised clustering, Deep learning.
                          </p>
                        </li>

                        <li>
                          <p>
                            <b>•  Hardware acceleration:</b> FPGA, GPU, Heterogeneous-
                            hardware acceleration.
                          </p>
                        </li>
                      </ul>
                      <label style="margin-top: 15px;">Academic
                        Records</label>
                      <ul>
                        <li>
                          <p>
                            <b>•  PhD in School of Computer Science and Engineering,
                              NTU, Singapore.
                            </b>
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>•  M.Sc. in Electronics and Electrical Communications,
                              Engineering Department, Cairo University, Egypt.
                            </b>
                          </p>
                        </li>

                        <li>
                          <p>
                            <b>• Distinction with honor Bachelor in Electronics and
                              Electrical Communications, Engineering Department,
                              Cairo University, Egypt.
                            </b>
                          </p>
                        </li>
                      </ul>
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
