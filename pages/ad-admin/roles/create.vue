<template>
  <fragment>
    <client-only>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto">
            <v-card-title>
              <span>Form Role:</span>
            </v-card-title>
            <v-card-text>
              <FormBase
                :form-object="formObject"
                :form-model="role"
                :data="{permissions: permissions}"
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
import { permissions } from '@/apollo/query'
import formObject from './form.json'
import FormBase from '~/components/form/base'

export default {
  name: 'RoleCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    FormBase
  },
  apollo: {
    permissions: {
      query: permissions
    }
  },
  data () {
    return {
      formObject,
      role: {
        _id: null,
        name: null,
        desc: null,
        permissions: null
      }
    }
  },
  async beforeMount () {
    const slugId = this.$route.query.role
    if (slugId) {
      const role = await this.$store.dispatch('getRole', slugId)
      this.role = role
    }
  },
  methods: {
    cancel () {
      this.$router.go(-1)
    },
    async save () {
      try {
        let mut
        if (this.role._id) {
          mut = 'updateRole'
        } else {
          mut = 'addNewRole'
        }
        // eslint-disable-next-line camelcase
        await this.$store.dispatch(`${mut}`, this.role).then(async (res) => {
          await this.$store.dispatch('getRoles')
          await this.$router.push({ name: 'ad-admin-roles' })
          this.$notify({
            title: 'Success',
            message: 'Adding New role',
            type: 'success'
          })
        })
      } catch (error) {
        console.log('error adding new role', error)
      }
    }
  }
}
</script>
