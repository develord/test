<template>
  <client-only>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-title>
            <span>Users List</span>
            <v-btn
              v-if="permissions.includes('canDelete')"
              fab
              absolute
              top
              right
              color="blue lighten-4"
              @click="goto('ad-admin-users-create')"
            >
              <v-icon color="white">
                mdi-plus
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="listeUser"
              :items-per-page="10"
              class="elevation-1"
            >
              <template v-slot:[`item.role`]="{ item }">
                {{ item.role.name }}
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
      listeUser: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Role', value: 'role' },
        { text: 'Created', value: 'created' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  computed: {
    users () {
      return this.$store.state.listeUser
    },
    permissions () {
      return this.$store.state.auth.permission
    }
  },
  watch: {
    users: {
      immediate: true,
      handler (newVal) {
        this.listeUser = Object.freeze(
          newVal.map((user, index) => {
            return {
              nb: index,
              id: user._id,
              name: user.name,
              email: user.email,
              role: user.role
            }
          })
        )
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getUsers')
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
    prepareUpdate (user) {
      this.$router.push({ name: 'ad-admin-users-create', query: { user: user.id } })
    },
    deleteRole (tag) {
      this.$store.dispatch('deleteUser', tag.id).then((res) => {
        this.$store.dispatch('getUsers')
        this.$notify({
          title: 'Success',
          message: 'User Removed',
          type: 'success'
        })
      })
    }
  }
}
</script>
