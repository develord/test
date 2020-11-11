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
import content from '~/mixins/mixin'
export default {
  mixins: [content]
}
</script>
