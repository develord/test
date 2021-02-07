<template>
  <fragment>
    <client-only>
      <!-- <form-add-post :post="post" /> -->
      <FormBase
        :form-object="formObject"
        :form-model="team"
        :data="{tags: listTags}"
        @cancelForm="cancel"
        @submitForm="save"
      />
    </client-only>
  </fragment>
</template>
<script>
import { images, tags } from '@/apollo/query'
import formObject from './form.json'
import FormBase from '~/components/form/base'

export default {
  name: 'TeamCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    FormBase
  },
  apollo: {
    images: {
      query: images
    },
    tags: {
      query: tags
    }
  },
  data () {
    return {
      formObject,
      team: {
        _id: null,
        title: null,
        name: null,
        degree: null,
        tags: null,
        image_large: null,
        content: null,
        email: null,
        twitter: null,
        cv: null,
        google: null,
        linkedin: null,
        researchgate: null,
        github: null
      },
      listTags: []
    }
  },
  watch: {
    tags (newVal) {
      this.listTags = newVal
    }
  },
  async beforeMount () {
    const postId = this.$route.query.post
    if (postId) {
      this.team = await this.$store.dispatch('getTeam', postId)
    }
  },
  methods: {
    slugify (text) {
      const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
      const to = 'aaaaaeeeeeiiiiooooouuuunc------'
      const newText = text.split('').map(
        (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))
      return newText
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-y-') // Replace & with 'and'
        .replace(/[^\w\\-]+/g, '') // Remove all non-word chars
        .replace(/\\-\\-+/g, '-') // Replace multiple - with single -
    },
    cancel () {
      this.$router.go(-1)
    },
    async save () {
      try {
        let mut
        if (this.team._id) {
          mut = 'updateTeam'
        } else {
          mut = 'addNewTeam'
        }
        // eslint-disable-next-line camelcase
        const { image_large, tags, ...y } = this.team
        if (this.team.image_large && typeof this.team.image_large === 'object' && this.team.image_large._id) { y.image_large = this.team.image_large._id } else { y.image_large = this.team.image_large }
        if (typeof this.team.tags === 'object' && this.team.tags && typeof this.team.tags[0] === 'object') {
          y.tags = this.team.tags.map(el => el._id)
        } else {
          y.tags = this.team.tags
        }
        await this.$store.dispatch(`${mut}`, y).then(async (res) => {
          await this.$store.dispatch('getTeams')
          await this.$router.push({ name: 'ad-admin-teams' })
          this.$notify({
            title: 'Success',
            message: 'Adding New Page Group',
            type: 'success'
          })
        })
      } catch (error) {
        console.log('error adding new page', error)
      }
    }
  }
}
</script>
