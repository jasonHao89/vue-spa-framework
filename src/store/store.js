import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import user from './modules/user'
import org from './modules/organization'
import enterprise from './modules/enterprise'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user,
    org,
    enterprise
  },
  state: {},
  mutations: {},
  actions:{
    [actions.SYNC_ALL] (context) {
      context.dispatch(actions.SYNC_USER)
      if(context.state.user.userId!==undefined){
        context.dispatch(actions.SYNC_ORG)
        context.dispatch(actions.SYNC_ENTERPRISE)
      }      
    }
  }
})
