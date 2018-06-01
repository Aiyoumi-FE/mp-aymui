<template>
  <div>
    <m-cell-group>
      <m-picker @select="pickerSelect"
        @cancel="selectorCancel"
        mode="selector"
        :range="data1"
        range-key="text">
        <m-cell isLink
          title="普通选择器"
          :value="selectorValue"></m-cell>
      </m-picker>
      <m-picker @select="pickerSelect"
        @cancel="selectorCancel"
        mode="multiSelector"
        :range="[data1,data2,data3]"
        range-key="text">
        <m-cell isLink
          title="多列选择器"></m-cell>
      </m-picker>
      <!-- :getData="getData" -->
      <m-picker @select="pickerSelect"
        @cancel="selectorCancel"
        @change="linkChange"
        mode="multiSelector"
        :range="multiData"
        range-key="text">
        <m-cell isLink
          title="多列联动选择器"
          :value="multiValue"></m-cell>
      </m-picker>
      <m-picker @select="pickerSelect"
        mode="time">
        <m-cell isLink
          title="时间选择器"></m-cell>
      </m-picker>
      <m-picker @select="pickerSelect"
        mode="date">
        <m-cell isLink
          title="日期选择器"></m-cell>
      </m-picker>
      <m-picker @select="pickerSelect"
        mode="region">
        <m-cell isLink
          title="省市区选择器"></m-cell>
      </m-picker>
    </m-cell-group>
    {{pickerText}}
  </div>
</template>
<script>
import mCell from 'aym-ui/components/cell/cell.vue'
import mCellGroup from 'aym-ui/components/cell/cell-group.vue'
import mPicker from 'aym-ui/components/picker/picker.vue'
import { provinceList, cityList, areaList } from './area'
import { data1, data2, data3 } from './data'
export default {

  name: 'picker',
  // mixins:[mPicker],
  data() {
    return {
      time: '12:01',
      isShow: false,
      data1: data1,
      data2: data2,
      data3: data3,
      selectorValue: '',
      comPickerIndex: [3, 0, 0],
      comPickerText: '请选择',
      // multiData: [],
      multiIndex: [0, 0, 0],
      multiValue: '',
      pickerText: ''
    }
  },
  computed: {
    multiData() {
      let [column0Index, column1Index] = this.multiIndex
      let column0 = provinceList
      let column1 = cityList[column0[column0Index].value]
      let column2 = areaList[column1[column1Index].value]
      return [column0, column1, column2]
    }
  },
  components: {
    mPicker,
    mCell,
    mCellGroup
  },
  created() {},
  methods: {
    // getData(indexArr) {
    //   let [column0Index, column1Index] = this.indexArr
    //   let column0 = col1Data
    //   let column1 = col2Data[column0[column0Index]]
    //   let column2 = col3Data[column1[column1Index]]
    //   console.log('getdata-change')
    //   return [column0, column1, column2]
    // },
    // setData() {
    //   let [column0Index, column1Index] = this.multiIndex
    //   let column0 = provinceList
    //   let column1 = cityList[column0[column0Index].value]
    //   let column2 = areaList[column1[column1Index].value]
    //   return [column0, column1, column2]
    // },
    showText(arr) {
      return arr.reduce((accumulator, cur) => {
        return accumulator + cur.text
      }, '')
    },
    pickerSelect(obj) {
      console.log(obj)
      this.pickerText = obj
    },
    linkChange(column, value) {
      // let deepLength = 3
      this.$set(this.multiIndex, column, value)
      for (let j = column + 1; j < 3; j++) {
        this.$set(this.multiIndex, j, 0)
      }
    },
    selectorCancel(obj) {
      console.log('cancel')
    },
    bindTimeChange: function(e) {
      console.log(e)
      this.time = e.mp.detail.value
      // this.setData({
      //   time: e.detail.value
      // })
    }
  }
}
</script>
<style scoped>
</style>
