<template>
  <client-only>
    <div class="el-tiptap-editor__wrapper">
      <el-tiptap
        :content="contentModel"
        :extensions="textExtensions"
        @onUpdate="onEditorUpdate"
      />
    </div>
  </client-only>
</template>

<script>
import Vue from 'vue'
import {
  Doc,
  Text,
  Paragraph,
  // text extensions
  Bold,
  Underline,
  Italic,
  Strike,
  Code,
  // FontType,
  // FontSize,
  // TextColor,
  TextHighlight,
  FormatClear,
  // paragraph extensions
  Heading,
  ListItem,
  BulletList,
  OrderedList,
  TodoItem,
  TodoList,
  // TextAlign,
  // LineHeight,
  Indent,
  Blockquote,
  CodeBlock,
  // rich and tools extensions
  Link,
  Image,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Iframe,
  TrailingNode,
  HorizontalRule,
  Fullscreen,
  // Print,
  Preview,
  SelectAll,
  History,
  CodeView
  , ElementTiptapPlugin } from 'element-tiptap'
import 'element-tiptap/lib/index.css'
import codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css' // import base style
import 'codemirror/mode/xml/xml.js' // language
import 'codemirror/addon/selection/active-line.js' // require active-line.js
import 'codemirror/addon/edit/closetag.js'
import ImageseNode from './EditorImageSelector.js' // autoCloseTags
Vue.use(ElementTiptapPlugin, { lang: 'en' })
export default {
  name: 'Editor',
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      contentModel: '',
      textExtensions: [
        new ImageseNode(),
        new Doc(),
        new Text(),
        new Paragraph(),
        new Bold({ bubble: true }),
        new Underline({ bubble: true }),
        new Italic({ bubble: true }),
        new Strike({ bubble: true }),
        new Code(),
        //  new FontType(),
        //   new FontSize(),
        //  new TextColor({ bubble: true }),
        new TextHighlight({ bubble: true }),
        new FormatClear(),
        new Heading({ level: 5 }),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        // new TextAlign(),
        // new LineHeight(),
        new Indent(),
        new Blockquote(),
        new CodeBlock(),
        new Link(),
        new Image(),
        new Iframe(),
        new Table({ resizable: true }),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new HorizontalRule(),
        // new Print(),
        new Preview(),
        new SelectAll(),
        new Fullscreen(),
        new CodeView({
          codemirror,
          codemirrorOptions: {
            styleActiveLine: true,
            autoCloseTags: true
          }
        }),
        new TrailingNode(),
        new History()
      ],
      Notloaded: true
    }
  },
  watch: {
    content: {
      immediate: true,
      handler (newVal) {
        if (newVal && this.Notloaded) {
          this.contentModel = newVal.html
          this.Notloaded = false
        }
      }
    }
  },
  methods: {
    onEditorUpdate (html, json) {
      this.$emit('update:content', {
        html,
        json: json.getJSON()
      })
    }
  }
}
</script>
<style lang="css">
.el-tiptap-editor__menu-bar{
  background: aliceblue;
}
</style>
