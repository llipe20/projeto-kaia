<template>
    <div class="container" id="box-alternativas">
        <p @click="Verificar" class="alternativas"> {{ options[index].a }} </p>
        <p @click="Verificar" class="alternativas"> {{ options[index].b }} </p>
        <p @click="Verificar" class="alternativas"> {{ options[index].c }} </p>
        <p @click="Verificar" class="alternativas"> {{ options[index].d }} </p>
    </div>
</template>

<script>
export default {
    name : 'RespostaQuiz',

    data() {
        return {
            options : this.$store.state.dados.quiz
        }
    },

    props : {
        index : Number
    },

    methods: {
        // Limpar para estilo padrao das alternativas
        Clear(alternate, alternativas) {
            alternate.classList.remove("correta", "errada")

            alternativas.forEach( alter => {
                if(alter !== alternate) {
                    alter.classList.remove("invisible")
                }
            })
        },

        // Validar reposta 
        Verificar(e) {
            const response = this.$store.state.dados.quiz[this.index].resposta  // resposta certa
            const todes = document.querySelectorAll(".alternativas")    // todas as alternativas
            const alternate = e.target.textContent  // valor da alternativa clicada

            todes.forEach( alter => {       // Aplica um estilo as alternativas que não foram clicadas
                if(alter !== e.target) {
                    alter.classList.add("invisible")
                }
            })

            if (response === alternate) {
                e.target.classList.add("correta")
                this.$store.commit("UpdatePlacar", this.$store.state.dados.quiz[this.index].valor)  // Somando e guardandos os pontos no State

            } else {
                e.target.classList.add("errada")
            }

            // Verificando se há mais perguntas
            setTimeout(() => {  
                if (this.index < this.options.length - 1) {
                    this.$emit("modify", true)  // Disparo para próxima pergunta
                } else {
                    this.$emit("modify", false)
                    this.$store.commit("ModifyDisplay", { display : 3 }) // ABRIR FOOTER - pag de resultados
                    localStorage.setItem("Display", this.$store.state.display)
                }
                this.Clear(e.target, todes)
            }, 2000)
        }
    },

    mounted() {

    }
}

</script>

<style scoped>

    #box-alternativas {
        height: 400px;
        gap: 15px;
    }

    .alternativas {
        border-bottom: 4px solid rgba(255, 255, 255, 0.553);
        outline: 3px solid rgba(255, 255, 255, 0.553);
        background-color: var(--cor-secundaria);
        color: rgb(255, 255, 255);
        font: normal 1.5em var(--font-quiz);
        text-align: center;
        width: 90%;
        border-radius: 15px;
        padding: 20px;
        transform: scale(.9);
        transition: all .5s;
    }
        
    @media (min-width: 800px)
    {
     .alternativas:hover {
            background-color: var(--cor-contraste);
            transform: scale(1);
        }
    }

    .correta {
        background-color: green;
        animation: mahoraga .2s alternate infinite;
    }

    .errada {
        background-color: red;
        animation: mahoraga .2s alternate infinite;
    }

</style>