<template>
  <div>
    <!-- <m-cell-group> -->
    <div class="mui-cells"
      v-for="(item,index) in navs"
      :key="index">
      <h4>  {{item.title}}</h4>
      <m-cell v-for="(sitem,sindex) in item.list"
        :key="sindex"
        :is-link="true"
        :title="sitem.name"
        :value="sitem.status"
        :link="'/pages/'+sitem.name+'/main'">
      </m-cell>
    </div>
    <!-- </m-cell-group> -->
  </div>
</template>
<script>
import mCell from 'aym-ui/components/cell/cell.vue'
import mCellGroup from 'aym-ui/components/cell/cell-group.vue'
const navs = [{
  'title': '弹层类',
  'list': [{
    'status': '✅',
    'path': '/popup',
    'name': 'popup'
  }, {
    'status': '✅',
    'path': '/toast',
    'name': 'toast'
  }, {
    'status': '✅',
    'path': '/dialog',
    'name': 'dialog'
  }, {
    'status': '✅',
    'path': '/actionsheet',
    'name': 'actionsheet'
  }, {
    'status': '❌',
    'path': '/modal',
    'name': 'modal-- popup'
  }, {
    'status': '✅',
    'path': '/picker',
    'name': 'picker'
  }]
}, {
  'title': '基础组件',
  'list': [{
    'status': '✅',
    'path': '/button',
    'name': 'button'
  }, {
    'status': '✅',
    'path': '/cell',
    'name': 'cell'

  }, {
    'status': '❌',
    'path': '/header',
    'name': 'header'
  }, {
    'status': '✅',
    'path': '/badge',
    'name': 'badge'
  }, {
    'status': '❌',
    'path': '/loading',
    'name': 'loading'
  }, {
    'status': '✅',
    'path': '/progress',
    'name': 'progress'
  }, {
    'status': '✅',
    'path': '/tags',
    'name': 'tags'
  }, {
    'path': '/icon',
    'name': 'icon'
  }, {
    'path': '/marquee',
    'name': 'marquee'
  }, {
    'path': '/tabbar',
    'name': 'tabbar'
  }]
}, {
  'title': '表单类',
  'list': [{
    'status': '✅',
    'path': '/input',
    'name': 'input'
  }, {
    'path': '/switch',
    'name': 'switch'
  }]
}]

export default {
  data() {
    return {
      navs: navs,
      test: 1,
      userInfo: {}
    }
  },
  computed: {},
  components: {
    mCell,
    mCellGroup
  },

  methods: {
    clickA() {
      console.log('click1')
    },
    bindViewTap() {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          // wx.getUserInfo({
          //   success: (res) => {
          //     this.userInfo = res.userInfo
          //   }
          // })
        }
      })
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>
<style scoped>
/*@import '~aym-ui/lib/button/style.css';*/

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
