<template>
  <fragment>
    <div
      :is="pageComponent"
      v-if="pageComponent"
      v-bind="page"
    />
  </fragment>
</template>

<script>
import content from '~/mixins/cententsLoader.js'
export default {
  layout: 'Default',
  mixins: [content]
}
</script>
