<template>
  <client-only>
    <div class="el-tiptap-editor__wrapper">
      <el-tiptap
        :extensions="textExtensions"
        :content="content"
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
  FontType,
  FontSize,
  TextColor,
  TextHighlight,
  FormatClear,
  // paragraph extensions
  Heading,
  ListItem,
  BulletList,
  OrderedList,
  TodoItem,
  TodoList,
  TextAlign,
  LineHeight,
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
  Print,
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
import 'codemirror/addon/edit/closetag.js' // autoCloseTags
Vue.use(ElementTiptapPlugin, { lang: 'fr' })

export default {
  data () {
    return {
      textExtensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Bold({ bubble: true }),
        new Underline({ bubble: true }),
        new Italic({ bubble: true }),
        new Strike({ bubble: true }),
        new Code(),
        new FontType(),
        new FontSize(),
        new TextColor({ bubble: true }),
        new TextHighlight({ bubble: true }),
        new FormatClear(),
        new Heading({ level: 5 }),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new TextAlign(),
        new LineHeight(),
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
        new Print(),
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
      content: '<h1>Bubble Menu</h1><p>Try to select some text here. There will popup a menu for some commands.</p><p>Pass a property <code>bubble: true</code> to extension is all you need to do.</p>'
    }
  }
}
</script>
