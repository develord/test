<template>
  <client-only>
    <div class="amount">
      <h1>{{ Math.round(amount) }} EUR</h1>
    </div>
  </client-only>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {
    accounts () {
      return this.$store.state.accounts
    },
    instruments () {
      return this.$store.state.instruments
    },
    amount () {
      if (this.accounts) {
        const occurrences = this.accounts.reduce((obj, item) => {
          console.log(Number(item.amount))
          const ff = Number(obj) + this.cenvertAmount(item)
          return ff
        }, 0)
        return occurrences
      } else {
        return 0
      }
    }
  },
  watch: {

  },
  methods: {
    cenvertAmount (data) {
      if (this.instruments) {
        const currency = data.currency
        const instrument = this.instruments.find(el => el.instrument.includes(currency))
        if (instrument) {
          if (instrument.instrument.startsWith(currency)) {
            return Number(data.amount) * 0.99565
          } else {
            return Number(data.amount) / 0.99565
          }
        }
      }

      return Number(data.amount)
    }
  }
}
</script>
 <style scoped>
.amount {
    padding: 20px;
    background: white;
    border-radius: 7px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
 </style>
