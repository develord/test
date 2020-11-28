<template>
  <p>
    <template v-for="(item, i) in test">
      <template v-if="item.type === 'text'">
        {{ item.text }}
      </template>
      <template v-if="item.type === 'image'">
        <img
          :key="i"
          v-lazy="{ src: item.attrs.src, loading: item.attrs.src.replace('high','low') }"
          :src="item.attrs.src.replace('high','low')"
          :alt="item.attrs.alt"
          :title="item.attrs.title"
          class="is-lazy"
        >
      </template>
    </template>
  </p>
</template>
<script>

export default {
  name: 'Paragraph',
  components: {
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
