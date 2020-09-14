import API from '@/lib/services/index.js'

// 多维度单页vuex
export default {
  namespaced: true,

  state: {
    name: 'dimension'
  },

  actions: {
    serviceTest ({ commit }, payoad = {}) {
      return API.get({
        url: '/data/tableData',
        data: payoad
      }).then(data => {
        return data
      })
    }
  }
}
