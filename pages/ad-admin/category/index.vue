<template>
  <client-only>
    <el-card>
      <div slot="header" class="card-header">
        <span>Category List</span>
        <el-button
          class="action-btn"
          type="success"
          size="mini"
          @click="goto('ad-admin-category-create')"
        >
          Add new category
        </el-button>
      </div>
      <el-table :data="filtredCategory">
        <el-table-column
          label="Name"
          prop="name"
        />
        <el-table-column
          label="Title"
          prop="title"
        />
        <el-table-column
          label="Description"
          prop="description"
        >
          <template slot-scope="scope">
            {{ extractText(scope.row.description, 0, 30) }}...
          </template>
        </el-table-column>
        <el-table-column
          label="Created"
          prop="created"
        >
          <template slot-scope="scope">
            {{ extractText(scope.row.created, 0, 10) }}
          </template>
        </el-table-column>
        <el-table-column
          label="Updated"
          prop="updated"
        >
          <template slot-scope="scope">
            {{ extractText(scope.row.updated, 0, 10) }}
          </template>
        </el-table-column>
        <el-table-column
          align="right"
        >
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="Type to search"
            />
          </template>
          <template slot-scope="scope">
            <el-row>
              <el-button
                size="mini"
                @click="update(scope.row)"
              >
                Edit
              </el-button>

              <el-popconfirm
                confirm-button-text="OK"
                cancel-button-text="No, Thanks"
                icon="el-icon-info"
                icon-color="red"
                title="Are you sure to delete this?"
                @onConfirm="deleteCategory(scope.row)"
              >
                <el-button
                  slot="reference"
                  size="mini"
                  type="danger"
                >
                  Delete
                </el-button>
              </el-popconfirm>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
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
      listeCategory: [],
      query: ''
    }
  },
  meta: {
    pageName: 'FUCKER'
  },
  computed: {
    category () {
      return this.$store.state.category.listeCategory
    },

    filtredCategory () {
      if (this.search.length === 0) {
        return this.category
      } else {
        return this.category.filter(cat => !this.search || cat.name.toLowerCase().includes(this.search.toLowerCase()))
      }
    }
  },
  watch: {
    // category: {
    //   immediate: true,
    //   handler (newVal) {
    //     this.listeCategory = Object.freeze(
    //       newVal.map((category, index) => {
    //         return {
    //           nb: index,
    //           id: category._id,
    //           name: category.name,
    //           title: category.title,
    //           description: category.description,
    //           created: category.created_at,
    //           updated: category.updated_at
    //         }
    //       })
    //     )
    //   }
    // }
  },
  async mounted () {
    await this.$store.dispatch('category/getCategories')
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

    update (category) {
      this.$router.push({ name: 'ad-admin-category-create', query: { category: category.id } })
    },

    deleteCategory (category) {
      this.$store.dispatch('deleteCategory', category.id).then((res) => {
        this.$store.dispatch('getCategory')
        this.$notify({
          title: 'Success',
          message: 'Category Removed',
          type: 'success'
        })
      })
    }
  }
}
</script>
