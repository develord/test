<template>
  <ul class="bullet-list">
    <template v-for="(item, i) in test">
      <li :key="i">
        {{ item.content[0].content[0].text }}
      </li>
    </template>
  </ul>
</template>
<script>

export default {
  name: 'BulletList',
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
<style>
.bullet-list ul,.bullet-list li  {
  list-style: disc !important;
  margin-left: 24px;
}

.bullet-list li::before {
  content: "\200B" !important;
}
</style>
