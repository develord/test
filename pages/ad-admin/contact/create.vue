<template>
  <fragment>
    <client-only>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto">
            <v-card-title>
              <span>Form Contact:</span>
            </v-card-title>
            <v-card-text>
              <FormBase
                :form-object="formObject"
                :form-model="contact"
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
  name: 'ContactCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    FormBase
  },
  data () {
    return {
      formObject,
      contact: {
        _id: null,
        location: null,
        mail: null,
        tel: null,
        content: null
      }
    }
  },
  async beforeMount () {
    const slugId = this.$route.query.contact
    if (slugId) {
      const contact = await this.$store.dispatch('getContact')
      const { content, ...data } = contact[0]
      data.content = JSON.parse(content)
      this.contact = data
    }
  },
  methods: {
    cancel () {
      this.$router.go(-1)
    },
    async save () {
      try {
        let mut
        if (this.contact._id) {
          mut = 'updateContact'
        } else {
          mut = 'addNewContact'
        }
        // eslint-disable-next-line camelcase
        await this.$store.dispatch(`${mut}`, this.contact).then(async (res) => {
          await this.$store.dispatch('getContact')
          await this.$router.push({ name: 'ad-admin-contact' })
          this.$notify({
            title: 'Success',
            message: 'Adding New Contact',
            type: 'success'
          })
        })
      } catch (error) {
        console.log('error adding new Contact', error)
      }
    }
  }
}
</script>
