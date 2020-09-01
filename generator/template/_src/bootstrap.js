import Vue from 'vue'
// css reset
import 'normalize.css'

<% if (options['ui-framework'] === 'element-ui') {%>
  // 使用ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
<% } %>

<% if (options['ui-framework'] === 'iview') {%>
// 使用iView
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)
<% } %>

<% if (options['ui-framework'] === 'antd') {%>
  // 使用Antd
  import Antd from 'ant-design-vue'
  import 'ant-design-vue/dist/antd.css'
  Vue.use(Antd)
  <% } %>

import Store from './store'


export default ({ router, states = {}, App }, resolve = () => {}) => {
  const store = Store(states)

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')

  // 回调函数
  resolve(app)
}

