import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import org from './modules/organization'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user,
    org
  },
  state: {
    count: 0
  },
  mutations: {}
})
