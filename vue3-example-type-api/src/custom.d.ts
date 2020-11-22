import { SysDialog } from './state/Dialog'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dialog: SysDialog
  }
}
