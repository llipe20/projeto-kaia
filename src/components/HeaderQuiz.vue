<template>
   <div class="container" id="circular">
        <div class="backdrop" style="background-image: url('/background1.jpg')">
            <div class="gradiente">
                <!-- FUNDO DO QUIZ -->
            </div>
        </div>
        <div class="icon">
            <!-- LOGO DO PROJETO -->
            <img src="/logo-kaia.png" alt="logo" id="img-logo">
        </div>
        <h1>O quanto você sabe de gramática?</h1>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem temporibus cupiditate quaerat repellendus asperiores labore quam sed porro veniam optio voluptate, reiciendis quisquam illum blanditiis nostrum inventore consequatur nesciunt.
        </p>

        <div class="box-input">
            <InputName />
            <BottonStart />
        </div>
        
        <h2>Ranking</h2>
   </div>
</template>

<script>
import InputName from './InputName.vue'
import BottonStart from './Botton.vue'

export default {
    name : "HeaderQuiz",

    data() {
        return {

        }
    },

    components : {
        InputName, BottonStart
    },

    methods : {

    },

    mounted() {

    }
}
</script>

<style scoped>

    .container {
        background-image: linear-gradient(to top, var(--cor-contraste), var(--cor-principal), var(--cor-secundaria));
        position: relative;
        gap: 30px;
        overflow-x: hidden;
    }

    .backdrop {
        background-color: white;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 300px;
    }

    .gradiente {
        width: 100%;
        height: 100%;
    }

    .icon {
        width: 25vw;
        max-width: 180px;
        height: 25vw;
        max-height: 180px;
        border-radius: 50%;
        border: 5px solid white;
        position: absolute;
        background-color: white;
        top: 210px;
        background-position: 50% 50%;
    }

    #img-logo {
        height: 100%;
        width: 100%;
    }

    h1 , h2{
        text-align: center;
        color: rgb(255, 255, 255);
        margin-top: 30px;
        font: normal 2.4em var(--font-quiz);
    }

    h2 {
        width: 77%;
        margin-bottom: 30px;
        border-bottom: 4px solid var(--cor-principal);
        outline: 4px solid var(--cor-principal);
        border-radius: 15px;
        padding: 10px;
    }

    p {
        color: rgba(255, 255, 255, 0.892);
        text-align: center;
        font: normal 1.3em var(--font-pergunta);
        line-height: 1.5em;
        padding: 20px;
    }

    .box-input {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        height: auto;
        width: 100%;
        gap: 20px;
    }

     @media (min-width: 800px)
    {
        .box-input {
            flex-direction: row;
        }

        h1 {
            margin-top: 95px;
        }

        p {
            padding: 20px 45px;
        }
    }
</style>