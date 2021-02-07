<template>
  <client-only>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-title>
            <span>Tags List</span>
            <v-btn
              v-if="permissions.includes('canWrite')"
              fab
              absolute
              top
              right
              color="blue lighten-4"
              @click="goto('ad-admin-tags-create')"
            >
              <v-icon color="white">
                mdi-plus
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="listeTag"
              :items-per-page="10"
              class="elevation-1"
            >
              <template v-slot:[`item.created`]="{ item }">
                {{ extractText(item.created, 0, 10) }}
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <div class="text-center">
                  <v-btn
                    v-if="permissions.includes('canWrite')"
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
                    v-if="permissions.includes('canDelete')"
                    class="ma-2"
                    fab
                    small
                    color="red accent-3"
                    @click="deleteTag(item)"
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
  name: 'TagIndex',
  layout: 'Back',
  middleware: 'auth',
  data: () => {
    return {
      search: null,
      drawer: null,
      listeTag: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Slug', value: 'slug' },
        { text: 'Created', value: 'created' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      selectedTag: {}
    }
  },
  computed: {
    permissions () {
      return this.$store.state.auth.permission
    },
    tags () {
      return this.$store.state.listeTag
    }
  },
  watch: {
    tags: {
      immediate: true,
      handler (newVal) {
        this.listeTag = Object.freeze(
          newVal.map((tag, index) => {
            return {
              nb: index,
              id: tag._id,
              name: tag.name,
              slug: tag.slug,
              created: tag.created_at,
              updated: tag.updated_at
            }
          })
        )
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getTags')
  },
  methods: {
    gotoLink (url) {
      this.$router.push(url)
    },
    goto (url) {
      this.$router.push({ name: url })
    },
    extractText (str, from, to) {
      return str ? str.slice(from, to) : 'None'
    },
    prepareUpdate (tag) {
      this.$router.push({ name: 'ad-admin-tags-create', query: { tag: tag.id } })
    },
    deleteTag (tag) {
      this.$store.dispatch('deleteTag', tag.id).then((res) => {
        this.$store.dispatch('getTags')
        this.$notify({
          title: 'Success',
          message: 'Tag Removed',
          type: 'success'
        })
      })
    }
  }
}
</script>
