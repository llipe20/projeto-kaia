<template>
    <div class="container" id="fundo" v-show="display==true">
        <PerguntaQuiz />
        <RespostaQuiz />
        <PlacarQuiz />
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
            
        }
    },

    props : {
        display : Boolean   // false - sumir    true - aparecer
    },

    components : {
        PerguntaQuiz, RespostaQuiz, PlacarQuiz
    },

    methods : {

    },

    mounted() {
        
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
    }
</style>