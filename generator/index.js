module.exports = (api, options, rootoptions) => {
  console.log(rootoptions, 'rootoptions')
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
      'lodash': '^4.17.11',
      "echarts": "^4.2.0-rc.1",
      'normalize.css': '^8.0.0',
    },
    // 开发依赖包
    devDependencies: {
      // "@vue/cli-plugin-babel": "~4.2.0",
      // "@vue/cli-plugin-eslint": "~4.2.0",
      // "@vue/cli-plugin-router": "~4.2.0",
      // "@vue/cli-plugin-vuex": "~4.2.0",
      // "@vue/cli-service": "~4.2.0",
      // "@vue/eslint-config-prettier": "^6.0.0",
      // "babel-eslint": "^10.0.3",
      // "eslint": "^6.7.2",
      // "eslint-plugin-prettier": "^3.1.1",
      // "eslint-plugin-vue": "^6.1.2",
      // "vue-template-compiler": "^2.6.11",
      // 'style-resources-loader': '1.2.1'
      'serve': '^10.0.1',
      'style-resources-loader': '1.2.1'
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
        "node-sass": "^4.9.3",
        "sass-loader": "^7.1.0"
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

  // 删除多余的模板
  api.render(files => {
    Object.keys(files).filter(path => path.startsWith('src/') || path.startsWith('public/')).forEach(e => {
      console.log(e, '>>>>>>>')
      console.log('《《《《《《', files[e], '》》》》》》')
    })
    
    Object.keys(files)
          .filter(path => path.startsWith('src/') || path.startsWith('public/'))
          .forEach(path => delete files[path])
  })


  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true;
  });

  // 生成模版
  api.render('./template');
};