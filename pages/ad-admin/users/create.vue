<template>
  <fragment>
    <client-only>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto">
            <v-card-title>
              <span>Form User:</span>
            </v-card-title>
            <v-card-text>
              <FormBase
                :form-object="formObject"
                :form-model="user"
                :data="{roles: roles}"
                @cancelForm="cancel"
                @submitForm="save"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </client-only>
  </fragment>
</template>
<script>
import { roles } from '@/apollo/query'
import formObject from './form.json'
import FormBase from '~/components/form/base'

export default {
  name: 'UserCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    FormBase
  },
  apollo: {
    roles: {
      query: roles
    }
  },
  data () {
    return {
      formObject,
      user: {
        _id: null,
        name: null,
        email: null,
        password: null,
        role: null
      }
    }
  },
  async beforeMount () {
    const userId = this.$route.query.user
    if (userId) {
      const user = await this.$store.dispatch('getUser', userId)
      this.user = user
      this.user.password = null
    }
  },
  methods: {
    cancel () {
      this.$router.go(-1)
    },
    async save () {
      try {
        let mut
        if (this.user._id) {
          mut = 'updateUser'
        } else {
          mut = 'addNewUser'
        }
        const { role, ...y } = this.user
        if (typeof this.user.role === 'object' && this.user.role._id) { y.roleId = this.user.role._id } else { y.roleId = this.user.role }
        // eslint-disable-next-line camelcase
        console.log(y)
        await this.$store.dispatch(`${mut}`, y).then(async (res) => {
          await this.$store.dispatch('getRoles')
          await this.$router.push({ name: 'ad-admin-users' })
          this.$notify({
            title: 'Success',
            message: 'Adding New user',
            type: 'success'
          })
        })
      } catch (error) {
        console.log('error adding new user', error)
      }
    }
  }
}
</script>
