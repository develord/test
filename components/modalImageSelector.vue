<template>
  <fragment>
    <slot>
      <el-avatar v-if="url" shape="square" :size="100" fit="fill" :src="url" />
      <el-button v-if="mode === 'form'" type="primary" @click="visible = true">
        Select Image
      </el-button>
    </slot>
    <el-dialog
      v-loading="loading"
      title="Image selector"
      :visible="visible"
      width="80%"
    >
      <el-row>
        <el-col :span="8">
          <input
            type="file"
            required
            @change.prevent="uploadFile"
          >
        </el-col>
        <el-col :span="8">
          <el-form ref="form" label-width="40px">
            <el-form-item label="Alt">
              <el-input v-model="imageSelected.alt" />
            </el-form-item>
            <el-form-item label="Title">
              <el-input v-model="imageSelected.title" />
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-button type="primary" style="float: right;" @click="insertImage">
              Select
            </el-button>
            <el-button type="danger" style="float: right;margin-right: 15px;" @click="deleteImage">
              Delete
            </el-button>
          </el-row>
        </el-col>
      </el-row>

      <el-row :gutter="5">
        <el-col v-for="img in imagesList" :key="img._id" :span="6">
          <div :class="imageSelected._id === img._id ? 'vue-select-image__thumbnail vue-select-image__thumbnail--active' : 'image-box'">
            <el-image
              :src="getImage(img.high)"
              fit="cover"
              style="width: 250px;height: 250px;"
              lazy
              @click="selectImage(img)"
            >
              <div slot="error" class="image-slot">
                <b-icon icon="mdi-link" />
              </div>
            </el-image>
          </div>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal()">Annuler</el-button>
      </span>
    </el-dialog>
  </fragment>
</template>

<script>
export default {
  name: 'ModalImageSelector',
  components: {
    BIcon: () => import('./vue-mdijs.vue')
  },
  props: {
    file: {
      type: [String, Object],
      default: ''
    },
    mode: {
      type: String,
      default: 'form'
    }
  },
  data () {
    return {
      url: null,
      visible: false,
      loading: false,
      imagesList: [],
      command: null,
      imageSelected: {
        _id: null,
        low: null,
        high: null,
        alt: null,
        title: null
      }
    }
  },
  computed: {
    images () {
      return this.$store.state.images
    }
  },
  watch: {
    images: {
      immediate: true,
      handler (newVal) {
        const imgs = [...newVal].reverse()
        this.imagesList = imgs
      }
    },
    file: {
      immediate: true,
      handler (newVal) {
        if (newVal && newVal.high) {
          this.url = this.getImage(this.file.high)
        } else if (newVal) {
          const ff = this.images.find(img => img._id === newVal._id)
          if (ff) {
            this.url = this.getImage(ff.high)
          }
        }
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getImages')
  },
  methods: {
    insertImage () {
      if (this.mode === 'form') {
        this.url = this.getImage(this.imageSelected.high)
        this.$emit('update:file', this.imageSelected._id)
      } else {
        const imageData = {
          command: this.command,
          data: {
            src: this.getImage(this.imageSelected.high),
            alt: this.imageSelected.alt,
            title: this.imageSelected.title
          }
        }
        this.$emit('onConfirm', imageData)
      }
      this.closeModal()
    },
    async deleteImage () {
      this.loading = true
      await this.$store.dispatch('deleteImage', this.imageSelected._id).then((res) => {
        this.$notify({
          title: 'Success',
          message: 'Image Removed',
          type: 'success'
        })
      }).then((el) => {
        this.$store.dispatch('getImages').then(() => {
          this.loading = false
        })
      })
    },
    getImage (url) {
      try {
        return require('@/static/images/' + url)
      } catch (e) {
        return 'http://via.placeholder.com/300'
      }
    },
    // async
    uploadFile (e) {
      this.loading = true
      const file = e.srcElement.files[0]
      // await
      const oldName = file.name
      const fileExtension = oldName.slice(oldName.lastIndexOf('.') - oldName.length)
      const str = oldName.slice(0, oldName.lastIndexOf('.')).replace(/[^\w]/gi, '')
      Object.defineProperty(file, 'name', {
        writable: true,
        value: str + fileExtension
      })

      this.$store.dispatch('uploadFile', file).then((res) => {
        setTimeout(() => {
          this.$store.dispatch('getImages')
          this.loading = false
        }, 2000)
      })
    },
    selectImage (img) {
      this.imageSelected._id = img._id
      this.imageSelected.low = img.low
      this.imageSelected.high = img.high
    },
    closeModal () {
      this.visible = false
    }
  }
}
</script>
<style scoped>
.vue-select-image__thumbnail--active {
    background: #50af2b;
}
.image-box {
    padding: 4px 0px 0px 0px;
}
.vue-select-image__thumbnail {
    width: 252px;
    height: 252px;
    cursor: pointer;
    display: block;
    line-height: 20px;
    border: 1px solid #ddd;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.055);
    -moz-box-shadow: 0 1px 3px rgba(0,0,0,.055);
    box-shadow: 0 1px 3px rgba(0,0,0,.055);
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
.vue-select-image__thumbnail--active:after {
    content: '✅';
    position: absolute;
    color: #50af2b;
    margin-left: -28px;
    margin-top: 5px;
    font-size: 20px;
    border-radius: 3px;
}
</style>
