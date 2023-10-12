<template>
  <div class="container" id="fundo">
    <PerguntaQuiz :index="index" />

    <RespostaQuiz @modify="ModifyIndex" :index="index" />

    <PlacarQuiz :index="index" :pausa="value"/>
  </div>
</template>

<script>
import PerguntaQuiz from "./mains/Pergunta.vue"
import RespostaQuiz from "./mains/Resposta.vue"
import PlacarQuiz from "./mains/Placar.vue"

export default {
  name: "MainQuiz",

  data() {
    return {
      index: 0,
      value : localStorage.getItem("Pausa")
    };
  },

  methods: {
    // Add novo valor para index assim que a pergunta for resposdinda
    ModifyIndex(value) {
       if (value === true) {
        this.index += 1
      } else {
        this.index = 0
        this.value = true
      }
      localStorage.setItem("Index", this.index)
    }
  },

  mounted() {
    // Recuperar o valor do index do Local Storage 
    const savedIndex = localStorage.getItem("Index")
    if (savedIndex !== null) {
      this.index = parseInt(savedIndex, 10)
    }
  },

  components: {
    PerguntaQuiz,
    RespostaQuiz,
    PlacarQuiz,
  },
}
</script>

<style scoped>
    .container {
        padding: 20px 0 0 0;
        height: auto;
        width: 100%;
    }

    #fundo {
        background-image: linear-gradient(to top, var(--cor-contraste), var(--cor-principal));
        min-height: 100vh;
    }
</style>