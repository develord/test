<template>
  <fragment v-if="contents">
    <section class="project-details">
      <div class="upper-box">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-11 col-md-12 col-sm-12 content-side">
              <div class="project-details-content">
                <template v-for="(item, i) in contents">
                  <component
                    v-if="item"
                    :is="item"
                    :key="i"
                    v-bind="doc.json.content[i]"
                  />
                </template>
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
      if (this.doc && this.doc.json && this.doc.json.content && this.doc.html && this.doc.html.length > 20) {
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
