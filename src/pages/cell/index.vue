<template>
  <div>
    <m-cell-group>
      <m-cell>
        <div slot="title">
          <p>我拿Buff，谢谢</p>
          <p>进攻暗影主宰</p>
        </div>
        <template slot="value">
          <m-button type="border"
            size="small">按钮</m-button>
        </template>
      </m-cell>
      <m-cell title="带有点击事件的"
        value="右侧文本"
        @click="fnclick"></m-cell>
      <m-cell title="我拿Buff，谢谢"
        value="右侧文本">
        <template slot="icon">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt=""
            style="width:20px;height:20px;margin-right:5px;display:block">
        </template>
      </m-cell>
      <m-cell title="router跳转"
        is-link
        :link="{path:'/button'}">
      </m-cell>
      <m-cell title="标题文本"
        value="右侧文本"
        is-link>
      </m-cell>
      <m-cell title="标题文本"
        value="右侧文本"
        is-select
        is-link></m-cell>
      <m-cell title="标题文本"
        value="右侧文本"
        is-select
        is-link>
        <template slot="icon">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt=""
            style="width:20px;height:20px;margin-right:5px;display:block">
        </template>
      </m-cell>
    </m-cell-group>
  </div>
</template>
<script>
import mCell from 'aym-ui/components/cell/cell.vue'
import mCellGroup from 'aym-ui/components/cell/cell-group.vue'
import mButton from 'aym-ui/components/button/button.vue'

export default {

  name: 'index',

  data() {
    return {

    }
  },
  components: {
    mButton,
    mCell,
    mCellGroup
  }
}
</script>
<style scoped
  lang="scss">
</style>
