import { createStore } from 'vuex'

export default createStore({
  state: {
    display : 1,      // var de controle das telas: 1 - header e ranking ; 2 - main ; 3 - footer
    pausa : null,

    dados : {       // Armanezar dados do banco para uso global
      quiz : [],
      ranking : []
    },

    enviar : {        // Dados para serem enviado ao banco
      player : null,
      time : null,
      point : 0
    }
  },

  mutations: {
     // Modificar troca de tela
    ModifyDisplay(state, data) {     
      state.display = data.display
    },

    // Receber os dados do banco - perguntas
    GetQuiz(state, data) {          
      state.dados.quiz = data
    },

    // Receber os dados do banco - ranking
    GetRanking(state, data) {
      state.dados.ranking = data
    },

    // Receber nome do jogador
    GetName(state, data) {
      state.enviar.player = data
    },

    // Modificar o cronometro
    UpdateTime(state, data) {
      state.enviar.time = data
      localStorage.setItem('Cronometro', state.enviar.time.toString())
    },

    // Modificar o PLacar
    UpdatePlacar(state, data) {
      state.enviar.point += data 
      localStorage.setItem('Ponto', state.enviar.point.toString())
    }
  }
})
