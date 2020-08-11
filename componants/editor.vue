<template>
  <div style="background: #fff;">
    <div class="editor">
      <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
        <div class="menubar">
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <b-icon icon="mdi-format-bold" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <b-icon icon="mdi-format-italic" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <b-icon icon="mdi-format-strikethrough" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <b-icon icon="mdi-format-underline" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <b-icon icon="mdi-code-braces" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <b-icon icon="mdi-format-paragraph" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            <b-icon icon="mdi-format-header-2" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            <b-icon icon="mdi-format-header-3" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <b-icon icon="mdi-format-list-bulleted" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <b-icon icon="mdi-format-list-numbered" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <b-icon icon="mdi-format-quote-close" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <b-icon icon="mdi-code-tags" />
          </button>

          <button
            class="menubar__button"
            @click="commands.horizontal_rule"
          >
            <b-icon icon="mdi-color-helper" />
          </button>

          <button
            class="menubar__button"
            @click="commands.undo"
          >
            <b-icon icon="mdi-undo-variant" />
          </button>

          <button
            class="menubar__button"
            @click="commands.redo"
          >
            <b-icon icon="mdi-redo-variant" />
          </button>
          <button
            class="menubar__button"
            @click="modalImageSelector(commands.image)"
          >
            <b-icon icon="mdi-image" />
          </button>
          <button
            class="menubar__button"
            @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
          >
            <b-icon icon="mdi-table" />
          </button>
          <span v-if="isActive.table()">
            <button
              class="menubar__button"
              @click="commands.deleteTable"
            >
              <b-icon icon="mdi-table-edit" />
            </button>
            <button
              class="menubar__button"
              @click="commands.addColumnBefore"
            >
              <b-icon icon="mdi-table-column-plus-before" />
            </button>
            <button
              class="menubar__button"
              @click="commands.addColumnAfter"
            >
              <b-icon icon="mdi-table-column-plus-after" />
            </button>
            <button
              class="menubar__button"
              @click="commands.deleteColumn"
            >
              <b-icon icon="mdi-table-column-remove" />
            </button>
            <button
              class="menubar__button"
              @click="commands.addRowBefore"
            >
              <b-icon icon="mdi-table-row-plus-before" />
            </button>
            <button
              class="menubar__button"
              @click="commands.addRowAfter"
            >
              <b-icon icon="mdi-table-row-plus-after" />
            </button>
            <button
              class="menubar__button"
              @click="commands.deleteRow"
            >
              <b-icon icon="mdi-table-row-remove" />
            </button>
            <button
              class="menubar__button"
              @click="commands.toggleCellMerge"
            >
              <b-icon icon="mdi-table-merge-cells" />
            </button>
          </span>
        </div>
      </editor-menu-bar>
      <!-- link bubble -->
      <editor-menu-bubble v-slot="{ commands, isActive, getMarkAttrs, menu }" class="menububble" :editor="editor" @hide="hideLinkMenu">
        <div
          class="menububble"
          :class="{ 'is-active': menu.isActive }"
          :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
        >
          <!--
            This is the fucked part of link edit and set
          -->
          <form v-if="linkMenuIsActive" class="menububble__form" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
            <input
              ref="linkInput"
              v-model="linkUrl"
              class="menububble__input"
              type="text"
              placeholder="https://"
              @keydown.esc="hideLinkMenu"
            >
            <button class="menububble__button" type="button" @click="setLinkUrl(commands.link, null)">
              <b-icon icon="mdi-delete" />
            </button>
          </form>

          <template v-else>
            <button
              class="menububble__button"
              :class="{ 'is-active': isActive.link() }"
              @click="showLinkMenu(getMarkAttrs('link'))"
            >
              <span>{{ isActive.link() ? 'Update Link' : 'Add Link' }}</span>
              <b-icon icon="mdi-link" />
            </button>
          </template>
        </div>
      </editor-menu-bubble>
      <!-- end link bubble part -->
      <editor-content class="editor__content" :editor="editor" />
    </div>
    <modalImageSelector :visible="visible" @update:visible="visible = $event" />
    <!--
    <div class="actions">
      <button class="button" @click="clearContent">
        Clear Content
      </button>
    </div>
    <div class="export">
      <h3>JSON</h3>
      <pre><code v-html="json" /></pre>

      <h3>HTML</h3>
      <pre><code>{{ html }}</code></pre>
    </div>
     -->
  </div>
</template>

<script>
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Image,
  Underline,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow
} from 'tiptap-extensions'
import { Editor, EditorContent, EditorMenuBar, EditorMenuBubble } from 'tiptap'
import BIcon from './vue-mdijs.vue'
import modalImageSelector from './modalImageSelector'
export default {
  components: {
    modalImageSelector,
    BIcon,
    EditorContent,
    EditorMenuBar,
    EditorMenuBubble
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    initContents: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new Image(),
          new HardBreak(),
          new Heading({ levels: [2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Table({
            resizable: true
          }),
          new TableHeader(),
          new TableCell(),
          new TableRow()

        ],
        content: `
      
        `,
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON()
          this.html = getHTML()
        }
      }),
      json: 'Update content to see changes',
      html: 'Update content to see changes',
      linkUrl: null,
      linkMenuIsActive: false
    }
  },
  watch: {
    initContents: {
      immediate: true,
      handler (newVal) {
        this.setContent(newVal)
      }
    },
    json (newVal) {
      this.$emit('update:content', JSON.stringify({
        json: newVal,
        html: this.html
      }))
    },
    html (newVal) {
      this.$emit('update:content', JSON.stringify({
        html: newVal,
        json: this.json
      }))
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    modalImageSelector (command) {
      this.visible = true
    },
    // image staff
    showImagePrompt (command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
    // link staff
    showLinkMenu (attrs) {
      this.linkUrl = attrs.href
      this.linkMenuIsActive = true
      this.$nextTick(() => {
        this.$refs.linkInput.focus()
      })
    },
    hideLinkMenu () {
      this.linkUrl = null
      this.linkMenuIsActive = false
    },
    setLinkUrl (command, url) {
      command({ href: url })
      this.hideLinkMenu()
    },
    // end link staff
    clearContent () {
      this.editor.clearContent(true)
      this.editor.focus()
    },
    setContent (centent) {
      // you can pass a json document
      try {
        const val = JSON.parse(centent)
        this.editor.setContent(val.json, true)
      } catch (error) {
      }
      // HTML string is also supported
      // this.editor.setContent('<p>This is some inserted text. 👋</p>')
      this.editor.focus()
    }
  }
}
</script>

<style lang="scss" src="@/assets/editor/main.scss">
.ProseMirror {
  min-height: 300px;
}
</style>
