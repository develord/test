import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/fr'
import './element-variables.scss'
import { Plugin } from 'vue-fragment'
Vue.use(Plugin)

export default () => {
  Vue.use(Element, { locale })
}
