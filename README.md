# aym-ui-mp

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


----

## 注意⚠️

###  slot属性不能直接写在组件上

div 可以，img不行
```html
<template slot="value">
  <m-button type="border"
    size="small">按钮</m-button>
</template>

<!-- 以下不能正常解析 -->
  <m-button slot="value"
   type="border"
    size="small">按钮</m-button>

```

### 不支持动态的input属性

```
  - <input :type="type" v-model="inputValue">:
v-model does not support dynamic input types. Use v-if branches instead.
```

### 报个错就挂了？

有时候一个语法错误，无论怎么修改都不会重新编译，只能重启

### 组件slot 嵌套不生效 ？ slot 只能一层
比如
```html
// popup.vue
<div>
  <slot></slot>
</div>
```

```html
// modal.vue
<popup>
  <slot></slot>
</popup>
```
然后使用的时候

```html
// demo.vue
<modal>
  111
</modal>
```

这样就不生效


## TODO:

router 处理

首页路由表循环不出来是怎么回事？
组件里面的默认slot循环 item in 5 可以 item in list 就不行，放在组件外也可以

picker value 初始值

记得修复maskclick modal 等 ....
