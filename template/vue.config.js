const glob = require('glob')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const VUE_APP_ALLOW_ENTRY = process.env.VUE_APP_ALLOW_ENTRY || ''
// 多页面入口路径
const resolve = folder => path.resolve(__dirname, folder)
const PAGE_PATH = resolve('src/pages')

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
  publicPath: "./",
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
  // eslint-disable-next-line
  configureWebpack: config => {
    return {
      optimization: {
        minimizer: [
          new TerserPlugin({
            cache: true, // 开启 cache，加快二次构建速度
            parallel: true, // 开启多线程压缩打包
            terserOptions: {
              output: {
                comments: false, // 打包时删除注释
              },
              compress: {
                drop_console: true, // 生产环境禁止打印console.log()
                dead_code: true, // 删除无法访问的代码
                drop_debugger: true, // 删除debugger
              },
            },
          }),
        ],
      },
    };
  },
};
