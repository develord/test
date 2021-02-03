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
                      <NuxtLink :to="'team/' + item.link">
                        <img
                          v-lazy="{ src: 'images/' + item.image_large.high, loading: 'images/' + item.image_large.low }"
                          width="140"
                          height="140"
                          alt="ankur"
                          class="wp-post-image is-lazy"
                          :src="'images/' + item.image_large.high"
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
                      <NuxtLink :to=" 'team/' +item.link" :title="item.name" class="hvr-underline-from-left1">
                        <h4>{{ item.name }}</h4>
                      </NuxtLink>
                      <span class="designation">{{ item.title }}</span>
                      <div class="designation">
                        {{ teams.tags }}
                        <img
                          v-for="(tag, j) in item.tags"
                          :key="j"
                          width="45"
                          alt="cell"
                          style="margin: 2px;"
                          title="cell"
                          :src="'./images/' + tag.slug "
                          class="is-lazy is-loaded"
                          data-src="./images/tag-cell.png"
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
      ]
    }
  },
  async beforeMount () {
    const ListTeam = await this.$store.dispatch('getTeams')
    ListTeam.forEach((el) => {
      const { content, ...data } = el
      data.content = JSON.parse(content)
      this.teams.push(data)
    })
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
