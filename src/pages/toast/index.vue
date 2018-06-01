<template>
  <div>
    <m-button @click="showToast">default toast</m-button>
    <m-button @click="showToastCallback">default toast and callback</m-button>
    <m-button @click="showLoading">Loading</m-button>
    <m-button @click="showLoading2">Loading2</m-button>
    <m-button @click="showIconToast">Icon Toast</m-button>
    <m-button @click="showIconTextToast">Icon and Text Toast</m-button>
  </div>
</template>
<script>
import mToast from 'aym-ui/components/toast/index.js'
import mButton from 'aym-ui/components/button/button.vue'

export default {

  name: 'toast',
  mixins: [mToast],
  data() {
    return {

    }
  },
  components: {
    mButton
    // mToast
  },
  methods: {
    showToast() {
      this.$_toast('默认调用')
    },
    showToastCallback() {
      this.$_toast('xxx', () => {
        console.log('callback')
      })
    },
    showLoading() {
      let loading = this.$_loading()
      loading.show()
      setTimeout(() => {
        loading.hide()
      }, 2000)
    },
    showLoading2() {
      let loading = this.$_loading({
        txt: 'xxxloading2'
      })
      loading.show()
      setTimeout(() => {
        loading.hide()
      }, 2000)
    },
    showIconToast() {
      this.$_toast({
        icon: 'loading',
        time: 1000
      })
    },
    showIconTextToast() {
      this.$_toast({
        icon: 'success',
        time: 1000,
        txt: '信息文案'
      })
    }
  }
}
</script>
<style scoped>
</style>
