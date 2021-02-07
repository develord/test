<template>
  <fragment>
    <client-only>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto">
            <v-card-title>
              <span>Form Permission:</span>
            </v-card-title>
            <v-card-text>
              <FormBase
                :form-object="formObject"
                :form-model="permission"
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
import formObject from './form.json'
import FormBase from '~/components/form/base'

export default {
  name: 'PermissionCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    FormBase
  },
  data () {
    return {
      formObject,
      permission: {
        _id: null,
        name: null,
        desc: null,
        image: null
      }
    }
  },
  async beforeMount () {
    const slugId = this.$route.query.permission
    if (slugId) {
      const perm = await this.$store.dispatch('getPermission', slugId)
      this.permission = perm
    }
  },
  methods: {
    cancel () {
      this.$router.go(-1)
    },
    async save () {
      try {
        let mut
        if (this.permission._id) {
          mut = 'updatePermission'
        } else {
          mut = 'addNewPermission'
        }
        // eslint-disable-next-line camelcase
        await this.$store.dispatch(`${mut}`, this.permission).then(async (res) => {
          await this.$store.dispatch('getPermissions')
          await this.$router.push({ name: 'ad-admin-permission' })
          this.$notify({
            title: 'Success',
            message: 'Adding New permission',
            type: 'success'
          })
        })
      } catch (error) {
        console.log('error adding new permission', error)
      }
    }
  }
}
</script>
