<template>
  <p>
    <template v-for="(item, i) in test">
      <template v-if="item.type === 'text'">
        {{ item.text }}
      </template>
      <template v-if="item.type === 'image'">
        <lasy-image
          :key="i"
          :lazy-src="item.attrs.src"
          :lazy-srcset="`${item.attrs.src} 2x`"
        />
      </template>
    </template>
  </p>
</template>
<script>

export default {
  name: 'Paragraph',
  components: {
    'lasy-image': () => import('./LasyImage.vue')
  },
  props: {
    content: {
      type: [Object, Array],
      default: null
    }
  },
  computed: {
    test () {
      return this.content
    }
  }
}
</script>
