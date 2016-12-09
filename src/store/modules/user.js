import * as mutations from '../mutations'
import * as actions from '../actions'
export default {
  state: {
  },
  mutations: {
    [mutations.UPDATE_USER] (state,user) {
      Object.assign(state,user)
    }
  },
  actions: {
    [actions.SYNC_USER] (context){
      $.get('/rest/user/current',function(resp){
        context.commit(mutations.UPDATE_USER,resp.user)
      })
    }
  }
}
