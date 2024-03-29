module.exports = (api, options, rootoptions) => {
  // 命令
  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint",
      "extendPackage": 'vue-cli-service serve --copy',
    },
  });

  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      "vue": "^2.6.11",
      "vue-router": "^3.1.5",
      "vuex": "^3.1.2",
      'axios': '^0.18.0',
      'babel-polyfill': '^6.22.0',
      "lodash": '^4.17.20',
      'normalize.css': '^8.0.0',
    },
    // 开发依赖包
    devDependencies: {
      'serve': '^10.0.1',
      'style-resources-loader': '1.2.1',
      "compression-webpack-plugin": "^5.0.1",
      "lodash-webpack-plugin": "^0.11.5",
      "babel-plugin-lodash": "^3.3.4",
      "mockjs": "^1.1.0"
    }
  });

  // element-ui
  if (options['ui-framework'] === 'element-ui') {
    api.extendPackage({
      dependencies: {
        "element-ui": "^2.4.7",
      }
    })
  }

  // iview
  if (options['ui-framework'] === 'iview') {
    api.extendPackage({
      dependencies: {
        "iview": "^3.5.4",
      }
    })
  }

  // antd-vue
  if (options['ui-framework'] === 'antd') {
    api.extendPackage({
      dependencies: {
        "ant-design-vue": "^1.6.5",
      }
    })
  }

  // # less
  if (options['cssPreprocessor'] === 'less') {
    api.extendPackage({
      devDependencies: {
        "less": "^2.7.2",
        "less-loader": "^3.0.0"
      }
    })
  }

  // # sass
  if (options['cssPreprocessor'] === 'sass') {
    api.extendPackage({
      devDependencies: {
        "node-sass": "^5.0.0",
        "sass-loader":  "^10.1.0"
      }
    })
  }

  if (options['charts'] === 'yes') {
    api.extendPackage({
      devDependencies: {
        "echarts": "^5.1.2",
        "vue-echarts": "^5.0.0-beta.0"
      }
    })
  }

  // 扩展 .eslintrc 配置
  api.extendPackage({
    eslintConfig: {
      "rules": {
        "vue/no-parsing-error": [
          2,
          { "x-invalid-end-tag": false }
        ]
      }
    }
  })

  // 生成模版
  api.render('./template');

  // 删除多余的模板
  api.render(files => {
      Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })

  // 不需要charts的清除charts代码目录
  options.charts === 'no' && api.render(files => {
    Object.keys(files)
    .filter(path => path.includes('charts/'))
    .forEach(path => delete files[path])
  })

  api.render(files => {
    Object.keys(files)
      .filter(path => path.includes(`/${options.cssPreprocessor === 'sass' ? 'less' : 'sass' }/`))
      .forEach(path => delete files[path])
  })
};