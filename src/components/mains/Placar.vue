<template>
    <div class="container">
        <div class="container" id="box-placar">

            <!-- VALOR PONTO -->
            <div class="container ponto">
                <h3>Valendo</h3>
                <h3>+ {{ perguntas[index].valor }} pts</h3>
            </div>

            <!-- SOMATÓRIO -->
            <div class="container">
                <img src="/imgs/money.png" alt="pontos">
                <h3> {{ totalPonto }} pts</h3>
            </div>

            <!-- TEMPO -->
            <div class="container">
                <img src="/imgs/clock.png" alt="tempo">
                <h3 style="width: 100px;">{{ relogio }} seg</h3>
            </div>
            
            <!-- DICA -->
            <div class="container">
                <button id="gojo" @click="Show">
                    <img src="/imgs/logo-kaia.png" alt="logo-kaia" id="logo">
                </button>
                <h3>Dica</h3>
            </div>
        </div>

        <!-- BOX - DICA // escondido inicialmente -->
        <div class="container invisible" id="box-dica">
            <p>
               {{ perguntas[index].dica }}
            </p>
             <span class="container" id="sukuna" @click="Show">
                x
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name : 'PlacarQuiz',

    data() {
        return {
            relogio : null,
            perguntas : this.$store.state.dados.quiz,
        }
    },

    computed : {
        totalPonto() {
            return this.$store.state.enviar.point
        }
    },

    props : {
        index : Number,
    },

    methods : {
        // relógio em segundos
        Cronometro() {
            setTimeout(() => {
                setInterval(() => {
                    this.relogio += 1
                    this.$store.commit("UpdateTime", this.relogio)
                }, 1000)
            }, 3000)
        },

        // open e close botõa DICA
        Show() {
            const Boxplacar = document.getElementById('box-placar')
            const Boxdica = document.getElementById('box-dica')

            Boxdica.classList.toggle("invisible")
            Boxplacar.classList.toggle("invisible")
        } 
    },

     mounted() {
        this.Cronometro()
    }
}
</script>

<style scoped>

    @keyframes mover-anima {
        0% {
            transform: scale(.9);
        }
        50% {
            transform: scale(.95);
        }
        100% {
            transform: scale(1);
        }
    }

    #box-placar, #box-dica {
        background-image: linear-gradient(0deg, var(--cor-secundaria), var(--cor-contraste));
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        border-top: 5px solid rgba(255, 255, 255, 0.553);
        border-radius: 50% 50% 0 0;
        padding: 30px 20px 20px 20px;
        height: 150px;
        transition: all .5s;
    }        

    #box-dica {
        position: relative;
        padding: 10px;
    }

    h3, p, span {
        font: normal 1.6em var(--font-quiz);
        text-align: center;
        color: white;
        text-shadow: 1px 1px 1px var(--cor-contraste);
        transition: all 2s;
        line-height: 1.5em;
    }

    p, span {
        font-size: 1.1em;
        max-width: 80%;
        padding-top: 20px;
    }

    span {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 4px solid white;
        animation: mover-anima .5s infinite alternate;
        position: absolute;
        padding: 0;
        left: 90%;
        top: 45%;
    }

    @media (min-width: 800px) 
    {
        p, span {
            font-size: 1.3em;     
        }   
    }

    button {
        background-color: var(--cor-secundaria);
        border: none;
        color: white;
        border-radius: 50%;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 2s;
        animation: mover-anima 1s infinite alternate;
        margin: 5px 0;
    }

    #box-logo {
        margin-top: 10px;
        gap: 10px;
    }

    #logo {
        height: 50px;
        width: 50px;
    }

    .ponto > h3 {
        color: #FFD700;
    }

    .invisible {
        display: none;
    }
</style>
