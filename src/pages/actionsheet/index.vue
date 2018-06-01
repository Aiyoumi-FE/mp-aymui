<template>
  <div>
    <m-button @click="showActionsheet">actionsheet </m-button>
  </div>
</template>
<script>
import mActionsheet from 'aym-ui/components/actionsheet/index.js'
import mButton from 'aym-ui/components/button/button.vue'
export default {

  name: 'actionsheet',
  mixins: [mActionsheet],
  data() {
    return {}
  },
  components: {
    mButton
  },
  methods: {
    showActionsheet() {
      this.$createActionSheet({
        data: ['本科', '专科', '研究生', '博士'],
        onSelect: (res) => {
          console.log('选择了: 第' + res.tapIndex + '项')
        }
      }).show()
    }
  }
}
</script>
<style scoped>
</style>
