<template>
  <div class="h-screen flex items-center justify-center">
    <div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            v-model="user.email"
            :class="{'border-red-500': hasError.email}"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your email"
          >
          <p v-if="hasError.email" class="text-red-500 text-xs italic">
            {{ hasError.email }}
          </p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            id="password"
            v-model="user.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            :class="{'border-red-500': hasError.password}"
            type="password"
            placeholder="Your secret password"
          >
          <p v-if="hasError.password" class="text-red-500 text-xs italic">
            {{ hasError.password }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" :disabled="loading" @click="login">
            Login
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 TheFucker Team. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'Default',
  middleware: 'guest',
  data () {
    return {
      user: { email: '', password: '' },
      loading: false,
      hasError: { email: null, password: null }
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$store
        .dispatch('auth/login', this.user)
        .then((response) => {
          this.$router.push('/ad-admin')
          this.loading = false
        })
        .catch((err) => {
          const message = err.message.split('\n')[0].split(':')[1].trim()
          switch (message) {
            case 'No user with this email':
              this.hasError.email = message
              this.hasError.password = null
              break
            case 'Incorrect Password':
              this.hasError.password = message
              this.hasError.email = null
              break
          }
          this.loading = false
        })
    }
  }
}
</script>

<style>

</style>
