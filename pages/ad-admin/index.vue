<template>
  <div>
    <client-only>
      <el-page-header content="Posts" @back="goBack" />
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Posts List</span>
          <el-button style="float: right;" type="success" @click="visibleAdd = true">
            Add new post
          </el-button>
        </div>
        <div class="text item">
          <el-table :data="listePost.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
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
              label="Category"
              prop="category"
            >
              <template slot-scope="scope">
                {{ extractText(scope.row.category, 0, 30) }}
              </template>
            </el-table-column>
            <el-table-column
              label="Status"
              prop="status"
            />
            <el-table-column
              label="User"
              prop="user"
            />
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
                    @click="prepareUpdate(scope.row)"
                  >
                    Edit
                  </el-button>

                  <el-popconfirm
                    confirm-button-text="OK"
                    cancel-button-text="No, Thanks"
                    icon="el-icon-info"
                    icon-color="red"
                    title="Are you sure to delete this?"
                    @onConfirm="deletePost(scope.row)"
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
        </div>
      </el-card>
      <modal-add-post :visible.sync="visibleAdd" title="Adding New Posts" />
    </client-only>
  </div>
</template>
<script>
import modalAddPost from '@/componants/posts/modalAddPost'

export default {
  name: 'BackIndex',
  layout: 'Back',
  middleware: 'auth',
  components: {
    modalAddPost
  },
  data: () => {
    return {
      search: null,
      drawer: null,
      listePost: [],
      visibleAdd: false,
      visibleUpdate: false,
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
              category: post.category ? post.category.name : 'none',
              status: post.status ? post.status.name : 'none',
              user: post.user ? post.user.name : 'none',
              created: post.created_at,
              updated: post.updated_at
            }
          })
        )
      }
    },
    visibleAdd (newVal) {
      if (!newVal) { this.$store.dispatch('getPosts') }
    },
    visibleUpdate (newVal) {
      if (!newVal) { this.$store.dispatch('getPosts') }
    }
  },
  beforeMount () {
    this.$store.dispatch('getPosts')
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    extractText (str, from, to) {
      return str ? str.slice(from, to) : 'None'
    },
    prepareUpdate (post) {
      this.selectedPost = this.$store.getters.getPosts(post.id)
      this.visibleUpdate = true
    },
    deletePost (post) {
      this.$store.dispatch('deletePost', post.id).then((res) => {
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
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-top: 25px;
    width: 100%;
  }
</style>
