<template>
  <fragment v-if="contents">
    <section class="project-details">
      <div class="upper-box">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-11 col-md-12 col-sm-12 content-side">
              <div class="project-details-content">
                <div v-html="contents">
                </div>
                <a v-if="exterlink" class="journal-website" target="_blank" :href="exterlink">journal Website</a>
                <a v-if="pdf" class="journal-website" target="_blank" :href="'../pdf/' + pdf">PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </fragment>
</template>
<script>
import page from '~/mixins/page.js'
import {_} from 'lodash'

export default {
  name: 'CententsSample',
  mixins: [page],
  data: () => {
    return {
    }
  },
  computed: {
    doc () {
      const doc = JSON.parse(this.content)
      return doc
    },
    contents () {
      if (this.doc.html && this.doc.html.length > 20) {
        return this.doc.html
      const componentList = []
      this.doc.json.content.forEach(item => {
        const cmp = () => import(`~/components/front/components/${_.startCase(_.camelCase(item.type)).replace(/ /g, '')}.vue`)
        componentList.push(cmp)
      })
      return componentList
      }else {
        return null
      }
    }
  }
}
</script>
<style scoped>
.project-details-content li {
  list-style: circle !important;
}
</style>
<style >
.journal-website {
  margin-top: 18px;
  text-align: center;
  width: 166px;
  display: block;
  background-image: linear-gradient(to right, #582ead 0%, #952ed0 50%, #582ead 100%);
  border-radius: 30px;
  padding: 11px 26px;
  color: #fff;
}
</style>
