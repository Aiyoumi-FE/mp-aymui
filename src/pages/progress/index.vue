<template>
  <div>
    <div class="progress-step__wrap">
      <div class="component-box">
        <m-progress></m-progress>
      </div>
      <div class="component-box">
        <m-progress :stepText="['Step0','Step1','Step2']"
          :curStep="1"></m-progress>
      </div>
      <div class="component-box">
        <m-progress :stepText="[0,1,2,3,4,5]"
          :curStep="3"></m-progress>
      </div>
    </div>
    <m-progress type="timeline"
      :stepText="timelineArr"></m-progress>
    <m-progress type="timeline"
      :isHalfLine="false"
      :stepText="timelineArr"></m-progress>
  </div>
</template>
<script>
import mProgress from 'aym-ui/components/progress/progress.vue'

export default {
  name: 'progress',
  data() {
    return {
      timelineArr: [{
        date: '3.28',
        title: '已提交审核',
        desc: '请耐心等待'
      }, {
        date: '3.29',
        title: '审核完成',
        desc: '获得额度'
      }]
    }
  },
  components: {
    mProgress
  },
  methods: {}
}
</script>
<style scoped>
.component-box {
  padding: 20px;
}

.progress-step__wrap {
  margin-bottom: 40px;
}
</style>
