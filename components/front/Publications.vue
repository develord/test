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
  </fragment>
</template>
<script>
import {_} from 'lodash'
import page from '~/mixins/page.js'

export default {
  name: 'Publications',
  mixins: [page],
  computed: {
    componentsDef() {
      if (this.configComponent) {
        const componentList = []
        Object.keys(this.configComponent.components).forEach(key => {
          const cmp = () => import(`~/components/front/components/${_.startCase(_.camelCase(this.configComponent.components[key])).replace(/ /g, '')}.vue`)
          componentList.push(cmp)
        })
        return componentList
      }
    } 
  }
}
</script>
