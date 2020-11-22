<template>
  <fragment>
    <template v-for="(item, i) in test">
      <template v-if="item.type === 'text'">
        <h2 :key="i">
          {{ item.text }}
        </h2>
      </template>
    </template>
  </fragment>
</template>
<script>

export default {
  name: 'Heading',
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
