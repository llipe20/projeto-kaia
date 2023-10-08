import { createStore } from 'vuex'

export default createStore({
  state: {
    display : true,
    dados : {}
  },

  getters: {
  },

  mutations: {
    storeUser(state, data) {
      state.display = data.display
    }
  },

  actions: {
  },

  modules: {
  }
})
