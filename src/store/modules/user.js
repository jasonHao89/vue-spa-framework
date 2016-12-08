import * as mutations from '../mutations'
export default {
  state: {
    userId: null
  },
  mutations: {
    [mutations.SYNC_USER] (state, user) {
      console.warn(user)
      state.userId = user.userId
    }
  },
  actions: {}
}
