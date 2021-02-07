<template>
  <client-only>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-title>
            <span>Posts List</span>
            <v-btn
              fab
              absolute
              top
              right
              color="blue lighten-4"
              @click="goto('ad-admin-posts-create')"
            >
              <v-icon color="white">
                mdi-plus
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="listePost"
              :items-per-page="10"
              class="elevation-1"
            >
              <template v-slot:[`item.created`]="{ item }">
                {{ extractText(item.created, 0, 10) }}
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <div class="text-center">
                  <client-only>
                    <v-btn
                      class="ma-2"
                      fab
                      small
                      color="light-green"
                      @click="openlink(item.link)"
                    >
                      <v-icon color="white">
                        mdi-eye
                      </v-icon>
                    </v-btn>
                  </client-only>
                  <v-btn
                    class="ma-2"
                    fab
                    small
                    color="light-blue"
                    @click="prepareUpdate(item)"
                  >
                    <v-icon color="white">
                      mdi-circle-edit-outline
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="ma-2"
                    fab
                    small
                    color="red accent-3"
                    @click="deletePost(item)"
                  >
                    <v-icon color="white">
                      mdi-trash-can-outline
                    </v-icon>
                  </v-btn>
                </div>
              </template>
              <template v-slot:no-data>
                No Data
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </client-only>
</template>
<script>

export default {
  name: 'PostIndex',
  layout: 'Back',
  middleware: 'auth',
  data: () => {
    return {
      search: null,
      drawer: null,
      listePost: [],
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Category', value: 'category' },
        { text: 'Status', value: 'status' },
        { text: 'User', value: 'user' },
        { text: 'Created', value: 'created' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      selectedPost: {}
    }
  },
  computed: {
    posts () {
      return this.$store.state.listePost
    }
  },
  watch: {
    posts: {
      immediate: true,
      handler (newVal) {
        this.listePost = Object.freeze(
          newVal.map((post, index) => {
            return {
              nb: index,
              id: post._id,
              title: post.title,
              description: post.description,
              link: post.link,
              category: post.category ? post.category.name : 'none',
              status: post.status ? post.status.name : 'none',
              user: post.user ? post.user.name : 'none',
              created: post.created_at,
              updated: post.updated_at
            }
          })
        )
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getPosts')
  },
  methods: {
    openlink (link) {
      window.open('http://bus-world.fr/' + link, '_blank')
    },
    gotoLink (url) {
      this.$router.push(url)
    },
    goto (url) {
      this.$router.push({ name: url })
    },
    extractText (str, from, to) {
      return str ? str.slice(from, to) : 'None'
    },
    prepareUpdate (post) {
      this.$router.push({ name: 'ad-admin-posts-create', query: { post: post.id } })
    },
    deletePost (post) {
      this.$store.dispatch('deletePost', post.id).then((res) => {
        this.$store.dispatch('getPosts')
        this.$notify({
          title: 'Success',
          message: 'Post Removed',
          type: 'success'
        })
      })
    }
  }
}
</script>
