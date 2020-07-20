<template>
  <client-only>
    <template v-if="mapOptions">
      <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map" />
    </template>
    <template v-else>
      <v-skeleton-loader
        width="350"
        height="500"
        type="card-heading, image, image"
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
      return this.$store.state.accounts.accounts
    },
    selectedCountry () {
      return this.$store.state.accounts.selectedCountry
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
