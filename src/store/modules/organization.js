import * as mutations from '../mutations'
export default {
  state: {
    orgId: null
  },
  mutations: {
    [mutations.SYNC_ORG] (state, org) {
      state.orgId = org.orgId
    }
  },
  actions: {}
}
