<template>
    <div class="container" id="fundo">
        <PerguntaQuiz 
            :dados="dados.quiz"
            :index="index"
        />

        <RespostaQuiz 
            :dados="dados.quiz" 
            :index="index"
        />

        <PlacarQuiz 
            :dados="dados.quiz" 
            :index="index"
        />
    </div>
</template>

<script>
import PerguntaQuiz from './mains/Pergunta.vue'
import RespostaQuiz from './mains/Resposta.vue'
import PlacarQuiz from './mains/Placar.vue'

export default {
    name : "MainQuiz",

    data() {
        return {
            index : 1   // var que controla a troca de perguntas
        }
    },

    props : {
        dados : Object // dados banco/api
    },

    components : {
        PerguntaQuiz, RespostaQuiz, PlacarQuiz
    }
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