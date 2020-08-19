<template>
  <svg
    viewBox="0 0 24 24"
    :fill="fill"
    :height="size"
    :width="size"
    class="mdi-icon"
    :style="{ transform: `rotate(${rotate}deg)`, display: 'inline-block' }"
  >
    <path :d="iconPath" />
  </svg>
</template>

<script>
import camelcase from 'lodash.camelcase'
import { mdiMagnify, mdiFormatBold, mdiFormatParagraph, mdiFormatItalic, mdiFormatStrikethrough, mdiFormatUnderline, mdiCodeBraces, mdiViewHeadline,
  mdiFormatHeader1, mdiFormatHeader2, mdiFormatHeader3, mdiFormatListBulleted, mdiFormatListNumbered, mdiFormatQuoteClose, mdiCodeTags, mdiColorHelper,
  mdiUndoVariant, mdiRedo, mdiRedoVariant, mdiImage, mdiTable, mdiTableEdit, mdiTableColumnPlusBefore, mdiTableColumnPlusAfter,
  mdiTableColumnRemove, mdiTableRowPlusAfter, mdiTableRowPlusBefore, mdiTableRowRemove, mdiTableMergeCells,
  mdiDelete, mdiLink } from '@mdi/js'

export default {
  name: 'BIcon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: 24
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    rotate: {
      type: Number,
      default: 0
    }
  },
  lib: {},
  computed: {
    iconPath () {
      const icon = this.lib[camelcase(this.icon)]
      if (typeof icon === 'undefined') {
        // eslint-disable-next-line no-console
        console.error(`[${this.icon}] Name of the icon is incorrect`)

        return
      }
      return icon
    }
  },
  beforeMount () {
    this.lib = {
      mdiMagnify,
      mdiFormatBold,
      mdiFormatParagraph,
      mdiFormatItalic,
      mdiFormatStrikethrough,
      mdiFormatUnderline,
      mdiCodeBraces,
      mdiViewHeadline,
      mdiFormatHeader1,
      mdiFormatHeader2,
      mdiFormatHeader3,
      mdiFormatListBulleted,
      mdiFormatListNumbered,
      mdiFormatQuoteClose,
      mdiCodeTags,
      mdiColorHelper,
      mdiUndoVariant,
      mdiRedo,
      mdiRedoVariant,
      mdiImage,
      mdiTable,
      mdiTableEdit,
      mdiTableColumnPlusBefore,
      mdiTableColumnPlusAfter,
      mdiTableColumnRemove,
      mdiTableRowPlusAfter,
      mdiTableRowPlusBefore,
      mdiTableRowRemove,
      mdiTableMergeCells,
      mdiDelete,
      mdiLink
    }
  }
}
</script>
