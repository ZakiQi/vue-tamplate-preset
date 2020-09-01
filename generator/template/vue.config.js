const glob = require('glob')
const path = require('path')
// const TerserPlugin = require('terser-webpack-plugin');
const VUE_APP_ALLOW_ENTRY = process.env.VUE_APP_ALLOW_ENTRY || ''
// 多页面入口路径
const resolve = folder => path.resolve(__dirname, folder)
const PAGE_PATH = resolve('src/pages')


/**
 * 样式预处理器全局变量资源插件
 * @param {String} rule webpack 规则
 */
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('./src/assets/<%= options.cssPreprocessor%>/var.<%= options.cssPreprocessor%>'),
      ],
    })
}


/**
 * 获取多页面配置对象
 */
function getPagesConfig(entry) {
  const pages = {}
  // 规范中定义每个单页文件结构
  // index.html,main.js,App.vue
  glob.sync(PAGE_PATH + '/*/main.js')
      .forEach(filePath => {
        const pageName = path.basename(path.dirname(filePath))
        if (entry && entry !== pageName) return
        pages[pageName] = {
          entry: filePath,
          // 除了首页，其他按第二级目录输出
          // 浏览器中直接访问/news,省去/news.html
          fileName: `${pageName === 'index' ? '' : pageName + '/'}index.html`,
          template: path.dirname(filePath) + '/index.html'
        }
      })
  return pages
}

const pages = getPagesConfig(VUE_APP_ALLOW_ENTRY)

module.exports = {
  // 公共路径
  publicPath: "/",
  // 打包路径
  outputDir: "dist",
  // 静态资源路径
  assetsDir: "assets",
  lintOnSave:false,
  // 多页配置
  pages: {
    ...pages
    // 手动设置单页
    // about: 'src/pages/about/main.js'
  },
  // 生产环境禁止生成SourceMap
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,// 不需要生产环境的 source map 设置false（减小dist文件大小，加速构建）
  
  // 自定义webpack配置
  configureWebpack: {
    cache: true, // 开启 cache，加快二次构建速度
    plugins: [],
  },

  // 扩展webpack配置
  chainWebpack: config => {
    // 配置别名
    config.resolve
            .alias
              .set('@', resolve('src'))
              .set('vue$', resolve('./node_modules/vue/dist/vue.common.js'))
              .set('assets', resolve('@/assets'))
              .set('components', resolve('@/components'))
              .set('Lib', resolve('src/lib'))
              .set('API', resolve('Lib/services'))
              .set('@preview', resolve('@/pages/preview'))
              .set('@index', resolve('@/pages/index/components'))

    // 添加 css 全局变量资源插件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(
      type => addStyleResource(config.module.rule('<%= options.cssPreprocessor%>').oneOf(type))
    )
  },

  // 开发服务器配置
  devServer: {
    port: `<%= options['Server Port'] %>`,
    proxy: {
      '/mock': {
        target: 'https://easy-mock.com/mock/5ba83adde786c911a33a5090',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '/mock': ''
        }
      }
    }
  }
};
