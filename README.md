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

- [x] less/sass
- [x] ES6
- [x] element-ui/iview/antd
- [x] vue-router/vuex
- [x] axios
- [x] iconfont
- [x] loadsh
- [x] mockjs


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
>为了代码简洁，建议用一个文件统一存放接口，方便维护

## iconfont
使用阿里巴巴矢量图标库iconfont，存放位置在src/assets/font/

支持unicode、font-class两种引用方式

使用方式

```
<i class="iconfont iconjiahao"></i>
或
<i class="iconfont">&#xe608;</i>
```

引用位置在项目的APP.vue中添加如下样式
```
<style>
  @import url('../../assets/font/iconfont.css');
  @font-face {
    font-family: 'iconfont';
    src: url('../../assets/font/iconfont.eot');
    src: url('../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../assets/font/iconfont.woff') format('woff'),
    url('../../assets/font/iconfont.ttf') format('truetype'),
    url('../../assets/font/iconfont.svg#iconfont') format('svg');
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
```

## lodash
https://imys.net/20161217/webpack-use-lodash.html
默认引入loadsh工具库，已经实现按需打包，打包时候只会打包使用过的模块
>使用时可以全量引入，不用具体到方法名
```
import _ from 'lodash'
_.add(1, 2)  // 打包时只会引入这一个函数模块
```

##mockjs
main.js单独引入了mockjs模块，结合axios，可以在请求的时候拦截url，并返回对应的mock数据
1、mock/mock.js为项目mock的配置文件
```
import Mock from 'mockjs'
import testData from './mockData/testData'

// 三个参数分别为：拦截的地址，请求的方式，返回的数据
Mock.mock('/data/tableData?data=1', 'get', testData)
```

2、同级文件夹/js文件存放mock的数据
```
///mockData/testData.js
import Mock from 'mockjs' // 引入mockjs

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let data = [] // 用于接受生成数据的数组
data.type = 1

export default data
```

3、在main.js中引入mock.js
```
//main.js
require('./mock/mock.js')
```

4、项目中使用axios请求
```
//vue项目中使用
API.get({
  url: '/data/tableData',
  data: {type: 1}
}).then(data => {
  return data
})
```
