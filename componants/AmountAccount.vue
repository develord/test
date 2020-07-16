<template>
  <client-only>
    <div class="amount">
      <h1>{{ amount }} € </h1>
    </div>
  </client-only>
</template>

<script>

export default {
  data () {
    return {
      loading: true,
      amount: 0
    }
  },
  computed: {
    accounts () {
      return this.$store.state.accounts.accounts
    },
    instruments () {
      return this.$store.state.accounts.instruments
    }
  },
  watch: {
    accounts: {
      async handler (newVal) {
        let sum = 0
        for (const data of newVal) {
          if (String(data.currency) === 'EUR') {
            sum += parseFloat(data.amount)
          } else {
            const response = await this.cenvertAmount(data)
            if (response.data.getRate.instrument.startsWith(String(data.currency))) {
              sum += (parseFloat(response.data.getRate.rate) * parseFloat(data.amount))
            } else {
              sum += (parseFloat(data.amount) / parseFloat(response.data.getRate.rate))
            }
          }
        }
        this.amount = sum.toFixed(2)
      }
    }
  },
  methods: {
    cenvertAmount (x) {
      return new Promise((resolve, reject) => {
        const instrument = this.instruments.find(el => el.instrument.includes(x.currency) && el.instrument.includes('EUR'))
        if (!instrument) {
          this.$store.dispatch('pushNotif', {
            left: false,
            position: 'bottom',
            right: true,
            show: true,
            color: 'red',
            text: '403 Forbiden API limit reached',
            timeout: 8000
          })
          reject(Error('403 Forbiden'))
        }
        this.$store.dispatch('accounts/getRate', { instrument: instrument.instrument })
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
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
