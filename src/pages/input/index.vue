<template>
  <div>
    <m-cell-group>
      <m-input title="姓名"
      confirmType="search"
        placeholder="confirmType search"></m-input>
      <m-input placeholder="自定义头尾">
        <template slot="hd">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt=""
            style="width: 20px;height:20px; margin-right: 5px; display: block;">
        </template>
        <template slot="ft">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt=""
            style="width: 20px; height:20px;margin-right: 5px; display: block;">
        </template>
      </m-input>
    </m-cell-group>
    <m-cell-group>
      <m-input title="wxinput">
        <input type="text" v-model="testValue0">
      </m-input>
      <m-input title="文本"
        type="tel"
         :value="testValue0"
         @change="val=>testValue0=val"
              placeholder="请输入手机号,change不闪动"></m-input>
      <m-input title="最大长度6"
        v-model="testValue1"
        :maxlength="6"></m-input>
      <m-input title="文本只读"
        v-model="testValue2"
        readonly></m-input>
      <m-input title="disabled"
        v-model="testValue3"
        disabled></m-input>
      <m-input title="手机号"
        type="tel"
        placeholder="请输入手机号码"
        input-type="vcode"
        :isTiming="isTiming"
        @getCode="getCode"></m-input>
      <m-input title="手机号"
        type="tel"
        placeholder="请输入手机号码"
        input-type="vcode"
        is-disabled>
        <template slot="ft">
          <button class="mui-vcode__btn">自定义按钮</button>
        </template>
      </m-input>
      <m-input title="验证码"
        placeholder="请输入验证码"
        input-type="vcode">
        <template slot="ft">
          <img alt=""
            class="mui-vcode__img">
        </template>
      </m-input>
    </m-cell-group>
  </div>
</template>
<script>
import mInput from 'aym-ui/components/cell/input.vue'
import mCellGroup from 'aym-ui/components/cell/cell-group.vue'

export default {

  name: 'input',

  data() {
    return {
      isTiming: false,
      testValue0: '',
      testValueX: '',
      testValue1: '1',
      testValue2: '2',
      testValue3: '3'
    }
  },
  components: {
    mInput,
    mCellGroup
  },
  methods: {
    testLazy(value) {
      console.log(value)
    },
    getCode(type) {
      console.log(type)
      if (type === 'send') {
        // 异步操作后开始倒计时
        setTimeout(() => {
          this.isTiming = true
        }, 500)
      } else {
        this.isTiming = false
      }
    }
  }
}
</script>
<style scoped>
</style>
