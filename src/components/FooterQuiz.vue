<template>
    <div class="container" id="box-principal"> 
        <div class="container backdrop-gif" style="background-image: url('/imgs/gif-confete2.gif');">
            <img src="/imgs/trofeu.png" alt="vencedor" id="img-trofeu">

            <h1>
                Parabéns  {{ this.$store.state.enviar.player }} 
            </h1>

            <p>
                Você jogou muito bem amigo!
            </p>
        </div>
        
         <PlayerResults />

         <BottonBack />
    </div>
</template>

<script>
import PlayerResults from './footers/Results.vue'
import BottonBack from './footers/ButtonBack.vue'

export default {
    name : "FooterQuiz",
    
    components : {
         PlayerResults, BottonBack
    },

    data() {
        return {
            display : false
        }
    },

    props : {
        
    },

    methods : {
       
    }, 

    mounted() {
       
    }
}
</script>

<style scoped>

    .container {
        justify-content: space-evenly;
    }

    #box-principal {
        background-image: linear-gradient(to top, var(--cor-secundaria), var(--cor-principal) 50%, var(--cor-contraste));
        justify-content: space-around;
        min-height: 100vh;
        width: 100%;
        gap: 20px;
    }

    .backdrop-gif {
        padding-top: 20px;
        width: 100%;
        gap: 20px;
    }

    h1, p {
        font: normal 1.8em var(--font-quiz);
        color: white;
    }

    p {
        font-size: 1.5em;
    }

    #img-trofeu {
        width: 180px;
        height: 180px;
    }
</style>