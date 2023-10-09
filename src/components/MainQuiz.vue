<template>
    <div class="container" id="fundo">
        <PerguntaQuiz :index="index"/>

        <RespostaQuiz 
            @modify="ModifyIndex" 
            :index="index"
        />

        <PlacarQuiz 
            :index="index" 
        />
    </div>
</template>

<script>
import PerguntaQuiz from './mains/Pergunta.vue'
import RespostaQuiz from './mains/Resposta.vue'
import PlacarQuiz from './mains/Placar.vue'

export default {
    name: "MainQuiz",

    data() {
        return {
            index: 0
        };
    },

    methods: {
        ModifyIndex(value) {
            if (value) {
                this.index += 1;
            }
        }
    },

    components: {
        PerguntaQuiz, RespostaQuiz, PlacarQuiz
    },
};
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