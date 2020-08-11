<template>
  <el-dialog
    v-loading="loading"
    title="Tips"
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
            <el-input v-model="selectedImage.alt" />
          </el-form-item>
          <el-form-item label="Title">
            <el-input v-model="selectedImage.title" />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-button type="primary" style="float: right;">
            Select
          </el-button>
          <el-button type="danger" style="float: right;margin-right: 15px;" @click="deleteImage">
            Delete
          </el-button>
        </el-row>
      </el-col>
    </el-row>

    <el-row :gutter="5">
      <el-col v-for="url in imagesList" :key="url._id" :span="6">
        <div :class="selectedImage._id === url._id ? 'vue-select-image__thumbnail vue-select-image__thumbnail--active' : 'image-box'">
          <el-image
            :src="getImage(url.high)"
            fit="cover"
            style="width: 250px;height: 250px;"
            lazy
            @click="selectImage(url)"
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
      <el-button type="primary">Confirmer</el-button>
    </span>
  </el-dialog>
</template>

<script>
import BIcon from './vue-mdijs.vue'
export default {
  name: 'ModalImageSelector',
  components: {
    BIcon
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false,
      imagesList: [],
      selectedImage: {
        _id: null,
        alt: '',
        title: ''
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

    }
  },
  beforeMount () {
    this.$store.dispatch('getImages')
  },
  methods: {
    async deleteImage () {
      this.loading = true
      await this.$store.dispatch('deleteImage', this.selectedImage._id).then((res) => {
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
        return require('@/assets/images/' + url)
      } catch (e) {
        return 'http://via.placeholder.com/300'
      }
    },
    async uploadFile (e) {
      this.loading = true
      const files = e.srcElement.files
      await this.$store.dispatch('uploadFile', files[0]).then((res) => {
        setTimeout(() => {
          this.$store.dispatch('getImages')
          this.loading = false
        }, 2000)
      })
    },
    selectImage (img) {
      this.selectedImage = img
    },
    closeModal () {
      this.$emit('update:visible', false)
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
