<template>
  <fragment>
    <template v-for="(customComponents, i) in componentsDef" >
        <div
            :key="i"
            :is="customComponents"
            v-if="customComponents"
            v-bind="$props"
        />
    </template>
    <section class="sidebar-page-container blog-details">
        <div class="auto-container">
            <div class="row clearfix">
                <div class="content-side col-md-12 col-sm-12" :class="{'col-lg-8': componentsRigthDef}">
                    <template v-for="(customComponents, i) in componentsMainDef" >
                        <div
                            :key="i"
                            :is="customComponents"
                            v-if="customComponents"
                            v-bind="$props"
                        />
                    </template>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side" v-if="componentsRigthDef">
                    <template v-for="(customComponents, i) in componentsRigthDef" >
                        <div
                            :key="i"
                            :is="customComponents"
                            v-if="customComponents"
                            v-bind="$props"
                        />
                    </template>
                </div>
            </div>
        </div>
    </section>
  </fragment>
</template>
<script>
import {_} from 'lodash'
import page from '~/mixins/page.js'

export default {
  name: 'Research',
  mixins: [page],
  computed: {
    componentsDef() {
      if (this.configComponent) {
        const componentList = []
        Object.keys(this.configComponent.components).forEach(key => {
            if (typeof this.configComponent.components[key] === 'string') {
                const cmp = () => import(`~/components/front/components/${_.startCase(_.camelCase(this.configComponent.components[key])).replace(/ /g, '')}.vue`)
                componentList.push(cmp)
            }
        })
        return componentList
      }
    },
    componentsMainDef() {
      if (this.configComponent && this.configComponent.components.main) {
        const componentList = []
        this.configComponent.components.main.forEach(el => {
                const cmp = () => import(`~/components/front/components/${_.startCase(_.camelCase(el)).replace(/ /g, '')}.vue`)
                componentList.push(cmp)
        })
        return componentList
      }
    },
    componentsRigthDef() {
      if (this.configComponent && this.configComponent.components.rigthSide) {
        const componentList = []
        this.configComponent.components.rigthSide.forEach(el => {
                const cmp = () => import(`~/components/front/components/${_.startCase(_.camelCase(el)).replace(/ /g, '')}.vue`)
                componentList.push(cmp)
        })
        return componentList
      }
    } 
  }
}
</script>
