<template>
  <div>
    <m-cell-group>
      <m-cell title="标题文本"
        is-link>
        <span slot="value">详细信息 <m-badge is-dot></m-badge></span>
      </m-cell>
      <m-cell is-link>
        <div slot="title">
          标题文本
          <m-badge>1</m-badge>
        </div>
      </m-cell>
      <m-cell is-link>
        <div slot="title">
          标题文本
          <m-badge>8</m-badge>
        </div>
        <span slot="value">详细信息</span>
      </m-cell>
      <m-cell is-link>
        <div slot="title">
          标题文本
          <m-badge>10</m-badge>
        </div>
        <span slot="value">详细信息</span>
      </m-cell>
      <m-cell is-link>
        <div slot="title">
          标题文本
          <m-badge>New</m-badge>
        </div>
      </m-cell>
    </m-cell-group>
  </div>
</template>
<script>
import mBadge from 'aym-ui/components/badge/badge.vue'
import mCell from 'aym-ui/components/cell/cell.vue'
import mCellGroup from 'aym-ui/components/cell/cell-group.vue'
export default {

  name: 'badge',

  data() {
    return {

    }
  },
  components: {
    mCell,
    mCellGroup,
    mBadge
  },
  methods: {}
}
</script>
<style scoped>
</style>
