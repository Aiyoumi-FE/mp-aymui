<template>
  <div>
    <m-button @click="showPopup">自定义popup</m-button>
    <m-button @click="isShowPopupModal=true">popupModal</m-button>
    <!-- base -->
    <m-popup ref="myPopup"
      @mask-click="closePopup('myPopup')">
      <div class="text">
        Popup是弹层类组件的基础组件
      </div>
    </m-popup>
    <!-- modal -->
    <m-popup :isShow="isShowPopupModal"
      type="modal"
      @mask-click="isShowPopupModal=false">
      <div class="mui-modal-panel">
        <m-header title="标题哟"
          type="modal"
          isLine
          @click="close"></m-header>
        <div class="mui-modal__content">
          <p>老骥伏枥</p>
          <p>志在千里</p>
          <p>fasdf</p>
          <p>fasdf</p>
          <p>fasdf</p>
        </div>
        <m-button type="full"
          @click="isShowPopupModal=false">关闭</m-button>
      </div>
    </m-popup>
  </div>
</template>
<script>
import mPopup from 'aym-ui/components/popup/popup.vue'
import mButton from 'aym-ui/components/button/button.vue'
import mHeader from 'aym-ui/components/header/header.vue'

export default {

  name: 'popup',

  data() {
    return {
      isShow: false,
      isShowTest: false,
      isShowPopupModal: false
    }
  },
  components: {
    mButton,
    mPopup,
    mHeader
  },
  methods: {
    showPopup() {
      // console.log(this.$refs.myPopup)
      // this.isShow = true
      this.$refs.myPopup.show()
    },
    closePopup(refId) {
      this.$refs[refId].hide()
    }
  }
}
</script>
<style scoped>
.text {
  max-width: 95%;
  padding: 10rpx;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  color: #fff;
}

.mpvue-picker-content {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s ease;
  transform: translateY(100%);
  z-index: 3000;
}

.mpvue-picker-view-show {
  transform: translateY(0);
}
</style>
