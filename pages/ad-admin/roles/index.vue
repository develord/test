<template>
  <client-only>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-title>
            <span>Roles List</span>
            <v-btn
              v-if="permissions.includes('canDelete')"
              fab
              absolute
              top
              right
              color="blue lighten-4"
              @click="goto('ad-admin-roles-create')"
            >
              <v-icon color="white">
                mdi-plus
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="listeRole"
              :items-per-page="10"
              class="elevation-1"
            >
              <template v-slot:[`item.created`]="{ item }">
                {{ extractText(item.created, 0, 10) }}
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <div class="text-center">
                  <v-btn
                    v-if="permissions.includes('canDelete')"
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
                    @click="deleteRole(item)"
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
  name: 'UsersIndex',
  layout: 'Back',
  middleware: 'auth',
  data: () => {
    return {
      search: null,
      drawer: null,
      listeRole: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Desc', value: 'desc' },
        { text: 'Created', value: 'created' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  computed: {
    roles () {
      return this.$store.state.listeRole
    },
    permissions () {
      return this.$store.state.auth.permission
    }
  },
  watch: {
    roles: {
      immediate: true,
      handler (newVal) {
        this.listeRole = Object.freeze(
          newVal.map((tag, index) => {
            return {
              nb: index,
              id: tag._id,
              name: tag.name,
              desc: tag.slug,
              created: tag.created_at,
              updated: tag.updated_at
            }
          })
        )
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getRoles')
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
    prepareUpdate (role) {
      this.$router.push({ name: 'ad-admin-roles-create', query: { role: role.id } })
    },
    deleteRole (tag) {
      this.$store.dispatch('deleteRole', tag.id).then((res) => {
        this.$store.dispatch('getRoles')
        this.$notify({
          title: 'Success',
          message: 'Role Removed',
          type: 'success'
        })
      })
    }
  }
}
</script>
