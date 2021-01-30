import { Image } from 'element-tiptap'
import modalImageSelector from './modalImageSelector'
export default class ImageseNode extends Image {
  menuBtnView (editorContext) {
    // editorContext contains some properties that are useful to you, such as isActive, commands, etc
    // more detailed docs check this https://github.com/scrumpy/tiptap#editormenubar
    // this package append editor instance to editorContext
    return {
      component: modalImageSelector, // your component
      componentProps: {
        mode: 'editor'
      },
      componentEvents: {
        // bind to your component with v-on
        onConfirm: (text = '') => {
          // can emit text
          editorContext.commands.image(text)
        }
      }
    }
  }
}
