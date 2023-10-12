import { createStore } from 'vuex'

export default createStore({
  state: {
    display : 1,

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
    ModifyDisplay(state, data) {
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
      localStorage.setItem('Cronometro', state.enviar.time.toString())
    },

    UpdatePlacar(state, data) {
      state.enviar.point += data 
      localStorage.setItem('Ponto', state.enviar.point.toString())
    }
  },

  actions: {
  },

  modules: {
  }
})
