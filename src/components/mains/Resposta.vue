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
        Clear(alternate) {
            alternate.classList.remove("correta", "errada")
        },

        // Validar reposta 
        Verificar(e) {
            const response = this.$store.state.dados.quiz[this.index].resposta;
            const alternate = e.target.textContent;

            if (response === alternate) {
                e.target.classList.add("correta")
                this.$store.commit("UpdatePlacar", this.$store.state.dados.quiz[this.index].valor)

            } else {
                e.target.classList.add("errada")
            }
            setTimeout(() => {
                if (this.index < this.options.length - 1) {
                    this.$emit("modify", { valor: true });
                } else {
                    console.log("acabou quiz") // ABRIR FOOTER AQUI
                }
                this.Clear(e.target)
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

    .correta {
        background-color: green;
        animation: mahoraga .2s alternate infinite;
    }

    .errada {
        background-color: red;
        animation: mahoraga .2s alternate infinite;
    }
        
    @media (min-width: 800px)
    {
        .alternativas:hover {
            background-color: var(--cor-contraste);
            transform: scale(1);
        }
    }
</style>