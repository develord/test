<template>
  <client-only>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-title>
            <span>Teams List</span>
            <v-btn
              fab
              absolute
              top
              right
              color="blue lighten-4"
              @click="goto('ad-admin-teams-create')"
            >
              <v-icon color="white">
                mdi-plus
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="listeTeams"
              :items-per-page="10"
              class="elevation-1"
            >
              <template v-slot:[`item.created`]="{ item }">
                {{ extractText(item.created, 0, 10) }}
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <div class="text-center">
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
                    @click="deleteTeam(item)"
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
      listeTeams: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Title', value: 'title' },
        { text: 'Created', value: 'created' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      selectedTeam: {}
    }
  },
  computed: {
    teams () {
      return this.$store.state.teams
    }
  },
  watch: {
    teams: {
      immediate: true,
      handler (newVal) {
        this.listeTeams = Object.freeze(
          newVal.map((post, index) => {
            return {
              nb: index,
              id: post._id,
              title: post.title,
              name: post.name,
              created: post.created_at,
              updated: post.updated_at
            }
          })
        )
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getTeams')
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
    prepareUpdate (team) {
      this.$router.push({ name: 'ad-admin-teams-create', query: { post: team.id } })
    },
    deleteTeam (post) {
      this.$store.dispatch('deleteTeam', post.id).then((res) => {
        this.$store.dispatch('getTeams')
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
