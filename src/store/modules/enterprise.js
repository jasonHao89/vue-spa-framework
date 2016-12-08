import * as mutations from '../mutations'
export default {
  state: {
    enterpriseId: null
  },
  mutations: {
    [mutations.SYNC_ENTERPRISE] (state, enterprise) {
      state.enterpriseId = user.enterpriseId
    }
  },
  actions: {}
}
