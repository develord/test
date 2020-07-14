<template>
  <v-main>
    <v-layout column>
      <v-container grid-list-lg text-xs-center>
        <v-layout row wrap>
          <v-flex xs6 sm8 md8>
            <v-card>
              <v-card-title>
                <h4>Map World</h4>
              </v-card-title>
              <v-card-text>
                <Mapchart />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 sm4 md4>
            <v-card>
              <v-card-title>
                <h4>County comparisation</h4>
              </v-card-title>
              <v-card-text>
                <comparisationchart />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card>
              <v-card-title>
                <v-toolbar-title>Accounts</v-toolbar-title>
                <v-spacer />
                <v-divider
                  class="mx-4"
                  vertical
                />
                <AmountAccount />
              </v-card-title>
              <v-card-text>
                <AccountList />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-main>
</template>
<script>
import Mapchart from '~/componants/MapChart.vue'
import Comparisationchart from '~/componants/Comparisationchart.vue'
import AccountList from '~/componants/AccountList.vue'
import AmountAccount from '~/componants/AmountAccount.vue'

export default {
  name: 'BackIndex',
  layout: 'Back',
  middleware: 'auth',
  components: {
    Mapchart,
    AmountAccount,
    Comparisationchart,
    AccountList
  },
  data: () => {
    return {
      drawer: null,
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      geolocPosition: undefined
    }
  },
  computed: {
    selectedCountry () {
      return this.$store.state.selectedCountry
    }
  },
  beforeMount () {
    this.$store.dispatch('getAccount')
    this.$store.dispatch('getCross')
  }
}
</script>
