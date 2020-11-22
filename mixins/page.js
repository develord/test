export default {
  props: {
    componentName: {
      type: [String, Boolean],
      default: ''
    },
    configComponent: {
      type: [Object, Array],
      default: null
    },
    content: {
      type: String,
      default () {
        return null
      }
    },
    created_at: {
      type: String,
      default () {
        return null
      }
    },
    description: {
      type: [String],
      default () {
        return null
      }
    },
    image_large: {
      type: [Object, Array],
      default () {
        return {}
      }
    },
    image_small: {
      type: [Object, Array],
      default () {
        return {}
      }
    },
    link: {
      type: [String],
      default () {
        return null
      }
    },
    title: {
      type: [String],
      default () {
        return null
      }
    },
    h1: {
      type: [String],
      default () {
        return null
      }
    },
    updated_at: {
      type: [String],
      default () {
        return null
      }
    },
    user: {
      type: [Object, Array],
      default () {
        return {}
      }
    },
    structuredData: {
      type: Object,
      default () {
        return {}
      }
    },
    tags: {
      type: Object,
      default () {
        return {}
      }
    },
    anchors: {
      type: [Array, Boolean],
      default: false
    }
  }
}
