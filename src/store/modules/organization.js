import * as mutations from '../mutations'
import * as actions from '../actions'
export default {
  state: {
  },
  mutations: {
    [mutations.UPDATE_ORG] (state,org) {
      Object.assign(state,org)
    }
  },
  actions: {
    [actions.SYNC_ORG] (context){
      $.get('/rest/org/current',function(resp){
        context.commit(mutations.UPDATE_ORG,resp.org)
      })
    }
  }
}
