import type { Plugin } from 'vue'

import {
  faRotateRight,
  faPlus,
  faTrashCan,
  faChevronRight, faCircleNotch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

export const fontawesome: Plugin = (app) => {
  library.add(faRotateRight, faPlus, faTrashCan, faChevronRight, faCircleNotch)
  app.component('FaIcon', FontAwesomeIcon)
}
