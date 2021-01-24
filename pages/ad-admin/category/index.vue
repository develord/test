<template>
  <client-only>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-title>
            <span>Category List</span>
            <v-btn
              fab
              absolute
              top
              right
              color="blue lighten-4"
              @click="goto('ad-admin-category-create')"
            >
              <v-icon color="white">
                mdi-plus
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="category"
              :items-per-page="10"
              class="elevation-1"
            >
              <template v-slot:[`item.users`]="{ item }">
                {{ item.users }}
              </template>
              <template v-slot:[`item.status`]="{ item }">
                {{ item.status }}
              </template>
              <template v-slot:[`item.created`]="{ item }">
                {{ extractText(item.created_at, 0, 10) }}
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
                    @click="deleteCategory(item)"
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
  name: 'CategoryIndex',
  layout: 'Back',
  middleware: 'auth',
  data () {
    return {
      search: '',
      drawer: null,
      query: '',
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Created', value: 'created' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  meta: {
    pageName: 'FUCKER'
  },
  computed: {
    category () {
      return this.$store.state.category.listCategory
    },
    filtredCategory () {
      if (this.search.length === 0) {
        return this.category
      } else {
        return this.category.filter(cat => !this.search || cat.name.toLowerCase().includes(this.search.toLowerCase()))
      }
    }
  },
  mounted () {
    this.$store.dispatch('category/getCategories')
    this.$store.dispatch('getImages')
  },
  methods: {
    /** //TODO// Maybe we can extract goto and extractText to a mixin //TODO// */
    goto (url) {
      this.$router.push({ name: url })
    },
    extractText (str, from, to) {
      return str ? str.slice(from, to) : 'None'
    },
    /** //ENDTODO// -- END REFACTOR -- //ENDTODO// */

    prepareUpdate (category) {
      this.$router.push({ name: 'ad-admin-category-create', query: { category: category._id } })
    },

    deleteCategory (category) {
      this.$store.dispatch('category/deleteCategory', category._id).then((res) => {
        this.$store.dispatch('category/getCategories').then(() => {
          this.$notify({
            title: 'Success',
            message: 'Category Removed',
            type: 'success'
          })
        })
      })
    }
  }
}
</script>
