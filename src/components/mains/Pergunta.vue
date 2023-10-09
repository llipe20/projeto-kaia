<template>
    <div class="container" id="box-pergunta">
        <span class="container" id="quant">
            {{ perguntas[index].index }} de {{perguntas.length }}
        </span>
        <h2> {{ perguntas[index].pergunta }} </h2>
    </div>
</template>

<script>
export default {
    name : 'PerguntaQuiz',

    data() {
        return {
            perguntas : this.$store.state.dados.quiz
        }
    },

    props : {
        index : Number
    }
}
</script>

<style scoped>

    #box-pergunta {
        position: relative;
        padding: 0;
    }

    h2 {        
        border-bottom: 4px solid rgba(255, 255, 255, 0.553);
        outline: 3px solid rgba(255, 255, 255, 0.553);
        background-color: var(--cor-contraste);
        color: rgb(255, 255, 255);
        font: normal 1.5em var(--font-quiz);
        text-align: center;
        width: 80%;
        margin: 30px 0px 0px 0px;
        border-radius: 15px;
        padding: 20px;
    }

    span {
        font: normal 1.3em var(--font-quiz);
        text-shadow: .5px 0.5px .5px var(--cor-contraste);
        border-bottom: 4px solid #986d00;
        color: white;
        background-color: #FFD700;
        height: auto;
        width: auto;
        border-radius: 10px;
        position: absolute;
        padding: 5px 10px;
        left: 8%;
        top: 0%;
    }
</style>