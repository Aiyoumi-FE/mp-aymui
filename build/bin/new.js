var fs = require('fs')
var path = require('path')
var handlebars = require('handlebars')
var config = require('../../config')
// 用户输入 组件名
let FILE_NAME = process.argv[2]
if (!FILE_NAME) {
  console.log('请输入文件名！！')
  return
}

const vueTpl = `
<template>
  <div>
  </div>
</template>
<script>
import m{{nameFirstBig}} from 'aym-ui/components/{{name}}/{{name}}.vue'

export default {

  name: '{{name}}',

  data() {
    return {

    }
  },
  components: {
    m{{nameFirstBig}}
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
`

const jsTpl = `
import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
`

const modulesDir = path.resolve(`src/components/${FILE_NAME}`)
const mpDir = path.resolve(`src/pages/${FILE_NAME}`)

const FILE_ARR = [{
  name: 'mp',
  dir: mpDir,
  baseName: 'index.vue',
  tpl: vueTpl
}, {
  name: 'mp',
  dir: mpDir,
  baseName: 'main.js',
  tpl: jsTpl
}]

// 渲染模版
const renderTpl = (tpl, data) => {
  // return Mustache.render(tpl, data)
  return handlebars.compile(tpl)(data)
}
// 写入内容
const writeMyData = (fd, content) => {
  fs.write(fd, content, (err) => {
    if (err) {
      throw err;
    }
  })
}
// 创建文件
const creteFile = (file, content) => {
  fs.open(file, 'ax+', (err, fd) => {

    if (err) {
      if (err.code === 'EEXIST') {
        console.error(file + '----- already exists');
        return;
      }
      //   throw err;
    }
    console.log(file + '创建成功---')
    writeMyData(fd, content);
  });
}
// 创建文件夹，如果存在则去创建文件
FILE_ARR.forEach(item => {
  fs.mkdir(item.dir, err => {
    if (err) {
      if (err.code === 'EEXIST') {
        // console.error(item.dir + '文件夹 already exists');
      }
      // throw  err
    }
    let file = path.join(item.dir, item.baseName)
    let content = renderTpl(item.tpl, {
      name: FILE_NAME,
      nameFirstBig: function() {
        // return this.name.toUpperCase()
        return this.name.replace(/^(\w)/g, (m, c) => c ? c.toUpperCase() : '')
      }
    })
    // console.log('------')
    // console.log(content)
    // console.log('------')
    creteFile(file, content)
  })

})
