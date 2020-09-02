# vue-tamplate-preset

vue项目开发预设模板

[https://github.com/ZakiQi/vue-tamplate-preset](https://github.com/ZakiQi/vue-tamplate-preset)

## Install

```
# 首先安装vue-cli 4.0
> npm install -g @vue/cli

> vue create --preset ZakiQi/vue-tamplate-preset project-name --no-git

# OR more faster!!!
# - project-name
# - vue-tamplate-preset
project-name> cd ..
> git clone https://github.com/ZakiQi/vue-tamplate-preset.git
> cd vue-tamplate-preset
> git pull origin master
> cd ..
> vue create --preset ./vue-tamplate-preset project-name --no-git
```

## 备注

```
目前删除原vue-cli的src目录逻辑尚有问题，第一次执行时要把项目中的src文件删除，然后把.src文件重命名为src。
```

## Develop

```
npm run serve
```

## Build

```
npm run build
```

## 功能列表

- [x] postcss/less/sass
- [x] ES6/Typescript
- [x] element-ui/iview
- [x] vue-router/vuex
- [x] mock server
- [x] style-resources-loader
- [x] axios

## css预处理器全局变量

内置`style-resources-loader`，支持`less`、`sass` 加载全局变量文件。

```
# vue.config.js
/**
 * 样式预处理器全局变量资源插件
 * @param {String} rule webpack 规则
 */
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('./src/assets/less/var.less')
      ]
    })
}
```

在`*.vue`文件中直接使用 `var.less(scss)`定义的变量，增加共同`mixin`只需手动添加文件的路径。

```
# App.vue
<style lang="less">
  h1 {
    // @color 在var.less中定义
    color: @color;
  }
</style>
```

## UI 框架

本 preset 支持 `element-ui`（默认）、 `iview` 和 、antd三种

## 多页模式

通过配置`vue.config.js`的`pages`参数，默认读取 `src/pages`下的各个目录

```
- src
  - pages
    - index
      - components
      - routes
      - store
      - views
      App.vue
      index.html
      main.js
    - about
```

每个单页基本包含3个文件

```
App.vue
index.html
main.js
```

## Vuex

支持vuex，通过将store分割成模块，src最外层为公共模块（module），每个项目里面配置独立的模块（module），通过main.js引入

## axios

调用接口方式

```
import API from '@/lib/services'


API.get({
  url: '',
  data: {}
}).then(data => {
  return data
})

```
*为了代码简洁，建议用一个文件统一存放接口，方便维护*
