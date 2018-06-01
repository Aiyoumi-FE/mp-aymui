<template>
  <div>
    <m-tags>限时购</m-tags>
    <m-tags bg-color="red">HOT</m-tags>
    <m-tags bg-color="linear-blue">海淘</m-tags>
    <m-tags bg-color="linear-red">双11</m-tags>
    <m-tags bg-color="yellow">免息</m-tags>
    <m-tags classes="bg-f0f">自定义颜色 #f0f</m-tags>
    <m-tags type="border">推荐</m-tags>
    <m-tags type="border">火热推荐</m-tags>
  </div>
</template>
<script>
import mTags from 'aym-ui/components/tags/tags.vue'

export default {

  name: 'tags',

  data() {
    return {
      test: '#ff0000'
    }
  },
  components: {
    mTags
  },
  methods: {}
}
</script>
<style scoped>
div {
  padding: 10px;
}

div /deep/ .mui-tags {
  margin-right: 10px;
}

div /deep/ .bg-f0f {
  background: #f0f
}
</style>
