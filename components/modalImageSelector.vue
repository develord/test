<template>
  <fragment>
    <slot>
      <v-avatar
        v-if="url"
        class="profile"
        color="grey"
        size="164"
        tile
      >
        <v-img :src="url" />
      </v-avatar>
      <button
        v-if="mode === 'editor'"
        type="button"
        class="menubar__button"
      >
        <el-button round icon="el-icon-s-grid" @click="visible = true" />
      </button>
      <v-btn
        v-if="mode === 'form'"
        color="primary"
        elevation="1"
        @click="visible = true"
      >
        Select Image
      </v-btn>
    </slot>
    <v-dialog v-model="visible" :loading="loading" persistent max-width="1200">
      <v-card>
        <v-card-title class="headline">
          <v-row>
            <v-col cols="4">
              <v-file-input
                truncate-length="15"
                @change="uploadFile"
              />
            </v-col>
            <v-col cols="4">
              <v-form ref="form">
                <v-text-field
                  v-model="imageSelected.alt"
                  label="Alt"
                  required
                />
                <v-text-field
                  v-model="imageSelected.title"
                  label="Title"
                  required
                />
              </v-form>
            </v-col>
            <v-col cols="4">
              <div class="text-center">
                <div class="my-2">
                  <v-btn rounded color="primary" dark @click="insertImage">
                    Select
                  </v-btn>
                  <v-btn rounded color="error" dark @click="deleteImage">
                    Delete
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="img in imagesList" :key="img._id" class="d-flex child-flex" cols="3">
              <div :class="imageSelected._id === img._id ? 'vue-select-image__thumbnail vue-select-image__thumbnail--active' : 'image-box'">
                <v-img
                  :src="'../../images/' + img.high"
                  :lazy-src=" '../../images/' + img.high.replace('high','low')"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  @click="selectImage(img)"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      />
                    </v-row>
                  </template>
                </v-img>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="gray darken-1" text @click="closeModal()">
            Annuler
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </fragment>
</template>

<script>
export default {
  name: 'ModalImageSelector',
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
    async insertImage () {
      if (this.mode === 'form') {
        this.url = await this.getImage(this.imageSelected.high)
        this.$emit('update:file', this.imageSelected._id)
      } else {
        const imageData = {
          src: this.getImage(Array.isArray(this.imageSelected) ? this.imageSelected[0].high : this.imageSelected.high),
          alt: Array.isArray(this.imageSelected) ? this.imageSelected[0].alt : this.imageSelected.alt,
          title: Array.isArray(this.imageSelected) ? this.imageSelected[0].title : this.imageSelected.title
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
    async uploadFile (files) {
      this.loading = true
      const file = files
      // await
      const oldName = file.name
      const fileExtension = oldName.slice(oldName.lastIndexOf('.') - oldName.length)
      const str = oldName.slice(0, oldName.lastIndexOf('.')).replace(/[^\w]/gi, '')
      Object.defineProperty(file, 'name', {
        writable: true,
        value: str + fileExtension
      })
      await this.$store.dispatch('uploadFile', file)
      await this.$store.dispatch('getImages')
      this.loading = false
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
<style>
.v-dialog--active {
  overflow-x: hidden !important;
}
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
    margin-left: 8px;
    margin-top: 13px;
    font-size: 20px;
    border-radius: 3px;
    margin: -257px 49px 29px 4px;
}
</style>
