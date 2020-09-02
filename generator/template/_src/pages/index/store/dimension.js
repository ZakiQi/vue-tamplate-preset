import API from '@/lib/services/index.js'

// 多维度单页vuex 
export default {
  namespaced: true,
  
  state: {
    name: 'dimension',
  },

  actions: {
    serviceTest ({ commit }, payoad = {}) {
      return API.get({
        url: 'creative/creative/Size/addSizes',
        data: payoad
      }).then(data => {
        return data
      })
    }
  }
}

