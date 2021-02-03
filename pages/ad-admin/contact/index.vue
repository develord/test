<template>
  <client-only>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-title>
            <span>Contact List</span>
            <v-btn
              fab
              absolute
              top
              right
              color="blue lighten-4"
              @click="goto('ad-admin-contact-create')"
            >
              <v-icon color="white">
                mdi-plus
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="listeContact"
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
  name: 'ContactIndex',
  layout: 'Back',
  middleware: 'auth',
  data: () => {
    return {
      search: null,
      drawer: null,
      listeContact: null,
      headers: [
        { text: 'location', value: 'location' },
        { text: 'mail', value: 'mail' },
        { text: 'tel', value: 'tel' },
        { text: 'Created', value: 'created' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      selectedTag: {}
    }
  },
  computed: {
    contact () {
      return this.$store.state.listeContact
    }
  },
  watch: {
    contact: {
      immediate: true,
      handler (newVal) {
        this.listeContact = newVal
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getContact')
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
    prepareUpdate (contact) {
      this.$router.push({ name: 'ad-admin-contact-create', query: { contact: contact._id } })
    },
    deleteTag (tag) {
      this.$store.dispatch('deleteTag', tag.id).then((res) => {
        this.$store.dispatch('getContact')
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
