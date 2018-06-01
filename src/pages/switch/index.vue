<template>
  <div>
    <m-switch v-model="isCheck"></m-switch>
    <m-switch v-model="isCheck2"></m-switch>
    <m-cell-group>
      <m-cell title="异步切换，等待1s">
        <template slot="value">
          <m-switch :checked="isCheck3"
            @input="changeSwitch"></m-switch>
        </template>
      </m-cell>
      <m-cell title="不可变">
        <template slot="value">
          <m-switch :checked="false"></m-switch>
        </template>
      </m-cell>
      <m-cell title="标题文本">
        <template slot="value">
          <m-switch v-model="isCheck"></m-switch>
        </template>
      </m-cell>
    </m-cell-group>
  </div>
</template>
<script>
import mSwitch from 'aym-ui/components/switch/switch.vue'
import mCell from 'aym-ui/components/cell/cell.vue'
import mCellGroup from 'aym-ui/components/cell/cell-group.vue'
import mToast from 'aym-ui/components/toast/index.js'

export default {

  name: 'switch',
  mixins: [mToast],
  data() {
    return {
      isCheck: true,
      isCheck2: true,
      isCheck3: false
    }
  },
  components: {
    mCell,
    mCellGroup,
    mSwitch
  },
  methods: {
    changeSwitch(val) {
      this.$_loading().show()
      setTimeout(() => {
        this.isCheck3 = val
        this.$_loading().hide()
      }, 1000)
    }
  }
}
</script>
<style scoped>
</style>
