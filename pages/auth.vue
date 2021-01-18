<template>
  <div>
    <client-only>
      <div class="elementor-container elementor-column-gap-default">
        <div class="d-flex justify-content-center">
          <el-form ref="ruleForm" :loading="loading" status-icon label-width="120px">
            <el-form-item label="Login" prop="login">
              <el-input
                v-model="user.email"
                type="text"
                autocomplete="off"
                :show-message="hasError.email"
                :error="hasError.email"
              />
            </el-form-item>
            <el-form-item label="Password" prop="Password">
              <el-input
                v-model="user.password"
                type="password"
                autocomplete="off"
                :show-message="hasError.password"
                :error="hasError.password"
                @keyup.enter="login()"
              />
            </el-form-item>
            <el-form-item size="large">
              <el-button type="primary" :loading="loading" @click="login()">
                Login
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import elementUi from '~/plugins/element-ui'

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
  beforeMount () {
    elementUi()
  },
  methods: {
    login () {
      this.loading = true
      this.$store.dispatch('auth/login', this.user)
        .then((response) => {
          this.$router.push('/ad-admin/posts')
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
