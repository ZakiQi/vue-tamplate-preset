import Vue from 'vue'
import Vuex from 'vuex'
import globolModules from './globolModues'

Vue.use(Vuex)

export default pageModules => {
  return new Vuex.Store({
    modules: {
      ...globolModules,
      ...pageModules
    }
  })
}
