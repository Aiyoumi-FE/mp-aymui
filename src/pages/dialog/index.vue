<template>
  <div>
    <m-button @click="showConfirm">有标题+双按钮 </m-button>
    <m-button @click="showAlert">无标题+单按钮 </m-button>
  </div>
</template>
<script>
import mDialog from 'aym-ui/components/dialog/index.js'
import mButton from 'aym-ui/components/button/button.vue'
import mToast from 'aym-ui/components/toast/index.js'

export default {

  name: 'dialog',
  mixins: [mDialog, mToast],
  data() {
    return {

    }
  },
  components: {
    mButton
  },
  methods: {
    showConfirm() {
      this.$createDialog({
        type: 'confirm',
        title: '标题',
        content: '我是双按钮，描述文字尽量控制在三行内',
        onConfirm: () => {
          this.$_toast({ txt: '点了确认', time: 1000 })
        },
        onCancel: () => {
          this.$_toast({ txt: '点了取消', time: 1000 })
        }
      }).show()
    },
    showAlert() {
      this.$createDialog({
        content: '我是单按钮，描述文字尽量控制在三行内',
        onConfirm: () => {
          this.$_toast({ txt: '点了确认', time: 1000 })
        }
      }).show()
    }
  }
}
</script>
<style scoped>
</style>
