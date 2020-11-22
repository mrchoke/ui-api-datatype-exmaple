<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="btn btn-info" @click="$dialog.datas('แจ้งเพื่อทราบ', 'info')">Info</button>
    <button class="btn btn-success" @click="$dialog.datas('สำเร็จสิ้น', 'success')">Success</button>
    <button class="btn btn-warning" @click="$dialog.datas('เราเตือนคุณแล้วนะ', 'warning')">Warning</button>
    <button class="btn btn-error" @click="$dialog.datas('มีอะไรบางอย่างไม่ถูกต้อง', 'error')">Error</button>
  </div>
</template>
