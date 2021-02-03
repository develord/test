<template>
  <div>
    <section class="page-title text-center style-two">
      <div v-lazy:background-image="{src: '/img/shape-62.webp', loading: '/img/shape-62.webp'}" class="pattern-layer" /><div class="auto-container" />
    </section>
    <div class="container">
      <div v-if="teams" class="row clearfix" style="    padding-bottom: 37px;">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="content-box" style="margin-top: 56px">
            <div class="col-lg-12 col-md-12 col-sm-12 team-block">
              <div class="team-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                <div class="inner-box" style="padding: 24px 0px;">
                  <div class="image-box" style="    border-radius: 25px;margin: auto;width: 233px;height: 233px;">
                    <img
                      v-lazy="{ src: '/images/' + teams.image_large.high, loading: '/images/' + teams.image_large.high }"
                      width="140"
                      height="140"
                      style="    border-radius: 25px;"
                      alt="ankur"
                      class="wp-post-image is-lazy"
                      :src=" '/images/' + teams.image_large.high"
                      @click="descption = i"
                    >
                    <ul class="contact-box clearfix" style="right: -60px;">
                      <li class="email">
                        <a :href="'mailto:http://' + teams.email"> <img style="width: 34px;margin: 10px 5px 13px 12px;" src="https://img.icons8.com/nolan/64/email.png"> <span>{{ teams.email }}</span> </a>
                      </li>
                      <div v-if="teams.linkedin || teams.researchgate|| teams.github" class="social-links">
                        <li>
                          <a target="_blank" :href="teams.twitter" style="background-color:transparent; color: rgb(249,+50,+110)">
                            <img style="width: 35px;" :src="'../images/icotwitter.png'">
                          </a>
                        </li>
                        <li>
                          <a target="_blank" :href="teams.google" style="background-color:transparent; color: rgb(249,+50,+110)">
                            <img style="width: 35px;" :src="'../images/icogooglesch.png'">
                          </a>
                        </li>
                        <li>
                          <a target="_blank" :href="teams.linkedin" style="background-color:transparent; color: rgb(249,+50,+110)">
                            <img style="width: 35px;" :src="'../images/icolinkedin.png'">
                          </a>
                        </li>
                        <li>
                          <a target="_blank" :href="teams.github" style="background-color:transparent; color: rgb(249,+50,+110)">
                            <img style="width: 35px;" :src="'../images/icogithub.png'">
                          </a>
                        </li>
                        <li>
                          <a target="_blank" :href="teams.researchgate" style="background-color:transparent; color: rgb(249,+50,+110)">
                            <img style="width: 35px;" :src="'../images/icorgate.png'">
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div class="lower-content">
                    <NuxtLink :to="teams.link" title="giving" class="hvr-underline-from-left1">
                      <h4 style="text-align: center;">
                        {{ teams.name }}
                      </h4>
                    </NuxtLink>
                    <span class="designation">{{ teams.title }}</span>
                    <div class="designation">
                      <a target="_blank" :href="teams.cv" style="width: 44px;background-color:transparent; color: rgb(249,+50,+110)">
                        <img style="width: 44px" alt="CV" title="CV" src="https://image.flaticon.com/icons/png/512/957/957342.png">
                      </a>
                    </div>
                    <div style="padding: 18px 34px;">
                      <p class="designation" style="text-align: center !important;">
                        <b>Degrees & Affiliations</b>
                      </p>
                      <template v-for="(item, i) in teams.degree">
                        <span :key="i" class="designation" style="">
                          {{ item }}
                        </span><br>
                      </template>
                    </div>
                    <div class="designation" style="padding: 26px;">
                      <img
                        v-for="(item, i) in teams.tags"
                        :key="i"
                        width="80"
                        alt="cell"
                        title="cell"
                        :src="'../images/' + item.slug "
                        style="margin: 2px;"
                        class="is-lazy is-loaded"
                        :data-src="'../images/' + item.slug "
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
          <div class="biography" v-html="teams.content.html" />
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
      teams: null
    }
  },
  async beforeMount () {
    const aa = await this.$store.dispatch('getTeams')
    const { content, ...data } = aa.filter(el => el.link === this.$route.path.replace('/team/', ''))[0]
    data.content = JSON.parse(content)
    this.teams = data
  }
}
</script>
<style scoped>
.biography {
  padding: 24px;
  margin-top: 56px;
}
@media only screen and (max-width: 1200px){
  .team-block-two .inner-box .image-box .contact-box{
    right: -60px !important;
  }
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
