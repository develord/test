<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12" mt-4>
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="user.email"
                    :error="hasError.email"
                    :hide-details="hasError.email"
                    label="Login"
                    :persistent-hint="hasError.email"
                    name="login"
                    prepend-icon="mdi-account"
                    :loading="loading"
                    type="text"
                  />
                  <p v-if="hasError.email" ml-3>
                    {{ hasError.email }}
                  </p>

                  <v-text-field
                    id="password"
                    v-model="user.password"
                    :loading="loading"
                    :error="hasError.password"
                    :hide-details="hasError.password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    @keyup.enter="login()"
                  />
                  <p v-if="hasError.password" class="text-red-500 text-xs italic">
                    {{ hasError.password }}
                  </p>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" :loading="loading" @click="login()">
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  layout: 'Default',
  middleware: 'guest',
  data () {
    return {
      user: { email: 'test', password: 'test' },
      loading: false,
      hasError: { email: null, password: null }
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$store.dispatch('auth/login', this.user)
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
