/// <reference types="vite/client" />
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

declare module 'vue' {
  export interface GlobalComponents {
    FaIcon: typeof FontAwesomeIcon
  }
}
