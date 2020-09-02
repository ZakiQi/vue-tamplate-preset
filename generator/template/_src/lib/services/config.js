/* 配置相关常量 */
const WEB_CONFIG = {
  dev: {
    baseURL: '/mock',
  },
  prod: {
    baseURL: '/api',
  }
}

export default process.env.NODE_ENV === 'production' ? WEB_CONFIG.prod : WEB_CONFIG.dev