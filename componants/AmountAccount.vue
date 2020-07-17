<template>
  <client-only>
    <template v-if="amount !== 0">
      <div class="amount">
        <h1>{{ amount }} € </h1>
      </div>
    </template>
    <template v-else>
      <v-skeleton-loader
        width="250"
        height="50"
        type="card-heading"
      />
    </template>
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
        const sum = await this.sumAccountAmount()
        this.amount = sum
      }
    },
    instruments: {
      async handler (newVal) {
        const sum = await this.sumAccountAmount()
        this.amount = sum
      }
    }
  },
  methods: {
    async sumAccountAmount () {
      if (this.instruments.length) {
        let sum = 0
        for (const data of this.accounts) {
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
        return sum.toFixed(2)
      }
    },
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
}
 </style>
