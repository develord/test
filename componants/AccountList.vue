<template>
  <client-only>
    <v-data-table
      :headers="headers"
      :items="accountList"
      :items-per-page="5"
      class="elevation-1"
    />
  </client-only>
</template>

<script>

export default {
  data () {
    return {
      accountList: [],
      headers: [
        {
          text: 'Account Number',
          align: 'start',
          value: 'accountNumber'
        },
        { text: 'Currency', value: 'currency' },
        { text: 'tag', value: 'tag' },
        { text: 'amount', value: 'amount' },
        { text: 'address', value: 'holderBank.address.country' },
        { text: 'Action', value: 'iron' }
      ]
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
        this.accountList = newVal
      }
    },
    selectedCountry: {
      immediate: true,
      handler (newVal) {
        this.accountList = this.accounts.filter(el => el.holderBank.address.country.toLowerCase() === (newVal || el.holderBank.address.country.toLowerCase()))
      }
    }
  }
}
</script>
 <style scoped>

 </style>
