// 多维度单页vuex
export default {
  namespaced: true,
  state: {
    name: 'dimension',
  },
  actions: {
    getVuexName() {
      console.log('dimension!!!');
    },
  },
};
