import { createStore } from 'vuex'

export default createStore({
  state: {
    display : true,

    dados : {
      quiz : [],
      ranking : []
    },

    enviar : {
      player : null,
      time : null,
      point : 0
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
    },

    GetName(state, data) {
      state.enviar.name = data
    },

    UpdateTime(state, data) {
      state.enviar.time = data
    },

    UpdatePlacar(state, data) {
      state.enviar.point += data 
      localStorage.setItem('quizPonto', state.enviar.point.toString())
    }
  },

  actions: {
  },

  modules: {
  }
})
