import { createStore } from 'vuex'

export default createStore({
  state: {
    display : true,
    dados : {
      quiz : [],
      ranking : []
    }
  },

  getters: {

  },

  mutations: {
    storeUser(state, data) {
      state.display = data.display
    },

    GetQuiz(state, data) {
      state.dados.quiz = data
    },

    GetRanking(state, data) {
      state.dados.ranking = data
    }
  },

  actions: {
  },

  modules: {
  }
})
