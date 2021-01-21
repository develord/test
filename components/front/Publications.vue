<template>
  <fragment>
    <template v-for="(customComponents, i) in componentsDef">
      <div
        :is="customComponents"
        :key="i"
        v-bind="$props"
      />
    </template>
  </fragment>
</template>
<script>
import startCase from 'lodash/startCase'
import camelCase from 'lodash/camelCase'
import page from '~/mixins/page.js'

export default {
  name: 'Publications',
  mixins: [page],
  computed: {
    componentsDef () {
      if (this.configComponent) {
        const componentList = []
        Object.keys(this.configComponent.components).forEach((key) => {
          const cmp = startCase(camelCase(this.configComponent.components[key])).replace(/ /g, '')
          componentList.push(cmp)
        })
        return componentList
      } else { return [] }
    }
  }
}
</script>
