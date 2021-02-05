<template>
  <fragment>
    <client-only>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto">
            <v-card-title>
              <span>Form Tags:</span>
            </v-card-title>
            <v-card-text>
              <FormBase
                :form-object="formObject"
                :form-model="tag"
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
  name: 'TagCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    FormBase
  },
  data () {
    return {
      formObject,
      tag: {
        _id: null,
        slug: null,
        name: null,
        image: null
      }
    }
  },
  async beforeMount () {
    const slugId = this.$route.query.tag
    if (slugId) {
      const tags = await this.$store.dispatch('getTag', slugId)
      this.tag = tags
    }
  },
  methods: {
    cancel () {
      this.$router.go(-1)
    },
    async save () {
      try {
        let mut
        if (this.tag._id) {
          mut = 'updateTag'
        } else {
          mut = 'addNewTag'
        }
        const { image, ...y } = this.tag
        if (typeof this.tag.image === 'object' && this.tag.image._id) { y.image = this.tag.image._id } else { y.image = this.tag.image }
        // eslint-disable-next-line camelcase
        await this.$store.dispatch(`${mut}`, y).then(async (res) => {
          await this.$store.dispatch('getTags')
          await this.$router.push({ name: 'ad-admin-tags' })
          this.$notify({
            title: 'Success',
            message: 'Adding New Tag',
            type: 'success'
          })
        })
      } catch (error) {
        console.log('error adding new tag', error)
      }
    }
  }
}
</script>
