import Vue from 'vue'
import axios from 'axios'
<% if (options['ui-framework'] === 'antd') {%>
import Message from 'ant-design-vue/lib/message';
<% } %>
import 'ant-design-vue/dist/antd.css';
import config from './config'

let service = axios.create({
  baseURL: config.baseURL,
  timeout: 60000
})

service.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
     // 请求错误处理
     return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response && response.status === 200) {
      let { data } = response
      return data
    } else {
      Message.error('error')
    }
  },
  (_error) => {
    <% if (options['ui-framework'] === 'antd') {%>
    Message.error('error')
    <% } %>
  }
)

/**
 * 统一get请求入口
 * @param {object} config 请求参数对象
 * @returns {Promise<AxiosResponse<any>>}
 */
service.get = async (config) => {
  config.params = Object.assign({}, config.data, config.params)
  delete config.data

  const result = await service(Object.assign({
    method: 'GET'
  }, config))

  return result
}

/**
 * 统一post请求入口
 * @param {object} config 请求参数对象
 * @returns {Promise<AxiosResponse<any>>}
 */
service.post= async (config) => {
  config.data = Object.assign(config.data,  {method: 'POST'})

  const result = await service.service(config)
  
  return result
}

window.$service = service
Vue.prototype.$service = service

export default service