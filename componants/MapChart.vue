<template>
  <client-only>
    <template v-if="mapOptions">
      <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map" />
    </template>
    <template v-else>
      <v-skeleton-loader
        width="750"
        height="500"
        type="card-heading, image, image"
      />
    </template>
  </client-only>
</template>

<script>
import chartMapOption from '~/plugins/chartMapOption'
import { EventBus } from '~/plugins/event-bus'

export default {
  name: 'Mapchart',
  data () {
    return {
      mapOptions: null
    }
  },
  computed: {
    accounts () {
      return this.$store.state.accounts.accounts
    }
  },
  watch: {
    accounts: {
      immediate: true,
      handler (newVal) {
        if (newVal && newVal.length) { this.mapOptions = chartMapOption(newVal) }
      }
    }
  },
  mounted () {
    EventBus.$on('select-country', (props) => {
      this.$store.dispatch('accounts/setCountrySelected', props)
    })
  }
}
</script>
 <style>
.map {
  min-height: 500px;
  margin: auto;
}
 </style>
