<template>
  <client-only>
    <template v-if="mapOptions">
      <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map" />
    </template>
    <template v-else>
      <v-skeleton-loader
        width="950"
        type="card"
      />
    </template>
  </client-only>
</template>

<script>
import chartMapOption from '~/plugins/chartMapOption'

export default {
  data () {
    return {
      mapOptions: null
    }
  },
  computed: {
    accounts () {
      return this.$store.state.accounts
    }
  },
  watch: {
    accounts: {
      immediate: true,
      handler (newVal) {
        this.mapOptions = chartMapOption(newVal)
      }
    }
  },
  methods: {
    async gettest () {
      const dd = await this.$axios.$get('hhttps://api.ibanfirst.com/PublicAPI/Cross/')
      return dd
    }
  }
}
</script>
 <style scoped>
.map {
  min-height: 500px;
  margin: auto;
}
 </style>
