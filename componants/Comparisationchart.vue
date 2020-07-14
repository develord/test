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
import chartPieOptions from '~/plugins/chartPieOptions'

export default {
  data () {
    return {
      mapOptions: null
    }
  },
  computed: {
    accounts () {
      return this.$store.state.accounts
    },
    selectedCountry () {
      return this.$store.state.selectedCountry
    }
  },
  watch: {
    accounts: {
      immediate: true,
      handler (newVal) {
        this.mapOptions = chartPieOptions(newVal)
      }
    },
    selectedCountry: {
      handler (newVal) {
        this.mapOptions = chartPieOptions(this.accounts, newVal)
      }
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
