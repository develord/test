<template>
  <fragment v-if="contents">
    <template v-for="(item, i) in contents">
      <component
        :is="loadItem(item)"
        v-if="item"
        :key="i"
        v-bind="item"
      />
    </template>
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
    contents () {
      const doc = JSON.parse(this.content)
      return doc.json.content
    }
  },
  methods: {
    loadItem (item) {
      const cmp = () => import(`~/components/front/components/${_.startCase(_.camelCase(item.type)).replace(/ /g, '')}.vue`)
      return cmp
    }
  }
}
</script>
