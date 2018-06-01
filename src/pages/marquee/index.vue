<template>
  <div>
    <m-marquee itemHeight="22"
      direction="down">
      <m-marquee-item v-for="i in 5"
        :key="i">反方向 {{i}}</m-marquee-item>
    </m-marquee>
    <m-marquee itemHeight="22">
      <m-marquee-item v-for="i in 5"
        :key="i">默认正方向 {{i}}</m-marquee-item>
    </m-marquee>
    <m-cell-group>
      <m-cell title="反方向"
        value="右侧文本"
        is-select
        is-link>
        <template slot="value">
          <m-marquee itemHeight="14"
            direction="down">
            <m-marquee-item v-for="i in 5"
              :key="i">hello world {{i}}</m-marquee-item>
          </m-marquee>
        </template>
      </m-cell>
    </m-cell-group>
    <div class="mui-cells">
      <m-cell title="正方向"
        is-select
        is-link>
        <template slot="value">
          <m-marquee itemHeight="14">
            <m-marquee-item v-for="i in 5"
              :key="i">hello world {{i}}</m-marquee-item>
          </m-marquee>
        </template>
      </m-cell>
    </div>
  </div>
</template>
<script>
import mMarquee from 'aym-ui/components/marquee/marquee.vue'
import mMarqueeItem from 'aym-ui/components/marquee/marquee-item.vue'
import mCell from 'aym-ui/components/cell/cell.vue'
import mCellGroup from 'aym-ui/components/cell/cell-group.vue'

export default {

  name: 'marquee',

  data() {
    return {

    }
  },
  components: {
    mCell,
    mCellGroup,
    mMarquee,
    mMarqueeItem
  },
  methods: {}
}
</script>
<style scoped>
</style>
