import * as mutations from '../mutations'
import * as actions from '../actions'
export default {
  state: {
  },
  mutations: {
    [mutations.UPDATE_ENTERPRISE] (state,enterprise) {
      Object.assign(state,enterprise)
    }
  },
  actions: {
    [actions.SYNC_ENTERPRISE] (context){
      $.get('/rest/org/current',function(resp){
        context.commit(mutations.UPDATE_ENTERPRISE,resp.enterprise)
      })
    }
  }
}
