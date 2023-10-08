<template>
    <div class="contenter">
        <div class="contenter">
            <button id="botton-desc" @click="open('box-desc','botton-desc')">
                Descrição
            </button>
            <div class="contenter box invisible" id="box-desc">
                <p> {{ dados }} </p>
            </div>

            <button id="botton-passo-passo" @click="open('box-passo-passo', 'botton-passo-passo')">
                Como Jogar
            </button>
            <ul class="contenter box invisible" id="box-passo-passo">
                <li v-for="passo in passos" :key="passo.id">
                    {{ passo }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : 'TutorialQuiz',

    data() {
        return {

            passos : [

                "1 - Insira seu nome no campo abaixo e aperte em 'Jogar'.",

                "2 - Leia as perguntas com atenção e aperte na alternativa que achar correta.",

                "3 - Caso não saiba a resposta, aperte no botão de 'DICA' e o jogo lhe ajudará nas repostas.",

                "4 - As perguntas possui pontos com base na dificuldade da mesma, perguntas fáceis valem menos que as difícies.",

                "5 - O ranqueiamento é calculado com base na quantidade de pontos e no tempo de jogo.",

                "Boa sorte!"
            ]
        }
    },

    props : {
        dados : Object
    },

    components : {

    },

    methods : {
        open(input, botton) {
            const box = document.getElementById(`${input}`)
            const button = document.getElementById(`${botton}`)
            box.classList.toggle("invisible")
            button.classList.toggle("color")
        }
    },

    mounted() {

    }
}
</script>

<style scoped>

    .contenter {
        background-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        width: 100%;
        gap: 20px;
    }

    .box {
        gap: 25px;
    }

    button {
        background-color: transparent;
        color: rgb(255, 255, 255);
        font: normal 2em var(--font-quiz);
        border: none;
        border-bottom: 4px solid var(--cor-contraste);
        outline: 4px solid var(--cor-contraste);
        border-radius: 15px;
        padding: 10px;
        width: 60%;
        margin-top: 5px;
        cursor: pointer;
    }

    p, li {
        list-style-type: none;
        color: rgba(255, 255, 255, 0.892);
        text-align: center;
        font: normal 1.3em var(--font-pergunta);
        line-height: 1.5em;
        padding: 0 20px;
        max-width: 90%;
    }

    .invisible {
        display: none;
    }

    .color {
        background-color: var(--cor-secundaria);
    }

    @media (min-width: 800px)
    {
        button:hover {
            background-color: var(--cor-secundaria);
        }
    }
</style>