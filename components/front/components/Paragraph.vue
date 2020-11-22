<template>
  <fragment>
    <template v-for="(item, i) in test">
      <template v-if="item.type === 'text'">
        <p :key="i">
          {{ item.text }}
        </p>
      </template>
    </template>
  </fragment>
</template>
<script>

export default {
  name: 'Paragraph',
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
