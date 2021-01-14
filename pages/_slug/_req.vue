<template>
  <div>
    <div
      :is="pageComponent"
      v-if="pageComponent"
      v-bind="page"
    />
  </div>
</template>

<script>
import content from '~/mixins/cententsLoader.js'
export default {
  layout: 'Default',
  mixins: [content]
}
</script>
