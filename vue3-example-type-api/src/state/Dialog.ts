import { reactive } from 'vue'

export class SysDialog {
  type: string
  message: string
  active: boolean

  constructor() {
    this.type = 'info'
    this.message = 'แจ้งเตือนจากระบบ'
    this.active = false
  }
  get title() {
    const titles: Record<string, string> = {
      info: 'แจ้งเพื่อทราบ',
      error: 'เกิดข้อผิดพลาด',
      success: 'ดำเนินการสำเร็จ',
      warning: 'แจ้งเตือน'
    }
    return titles[this.type]
  }

  datas(message = 'แจ้งเตือนจากระบบ', type = 'info') {
    this.type = type
    this.message = message
    this.active = true
  }
}

const dialog = reactive(new SysDialog())
export default dialog
