<template>
   <div class="container" id="circular">

        <!-- LOGO -->
        <div class="icon">
            <img src="/imgs/logo-kaia.png" alt="logo" id="img-logo">
        </div>

        <!-- TITLE QUIZ -->
        <h1>O quanto você sabe de gramática?</h1>
        
        <Tutorial-quiz />

        <div class="box-input">
            <InputName />
        </div>
        
        <h2>Ranking</h2>
   </div>
</template>

<script>
import TutorialQuiz from './headers/Tutorial.vue'
import InputName from './headers/InputName.vue'

export default {
    name : "HeaderQuiz",

    data() {
        return {

        }
    },

    props : {

    },

    components : {
        InputName, TutorialQuiz
    },

    methods : {

    },

    mounted() {
        
    }
}
</script>

<style scoped>

    .container {
        background-image: linear-gradient(to top, var(--cor-contraste), var(--cor-principal));
        position: relative;
        gap: 30px;
        overflow-x: hidden;
        width: 100%;
    }

    .backdrop {
        background-color: white;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 150px;
    }

    .gradiente {
        width: 100%;
        height: 100%;
    }

    .icon {
        display: none;
        width: 25vw;
        max-width: 180px;
        height: 25vw;
        max-height: 180px;
        border-radius: 50%;
        border: 5px solid white;
        position: absolute;
        background-color: white;
        top: 70px;
        background-position: 50% 50%;
    }

    #img-logo {
        height: 100%;
        width: 100%;
    }

    h1 , h2{
        margin-top: 30px;
        text-align: center;
        color: rgb(255, 255, 255);
        font: normal 2em var(--font-quiz);
    }

    h2 {
        width: 77%;
        margin-bottom: 30px;
        border-bottom: 4px solid rgb(189, 186, 186);
        outline: 3px solid rgb(189, 186, 186);
        border-radius: 15px;
        padding: 10px;
    }

    .box-input {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        height: auto;
        margin-top: -10px;
        width: 100%;
        gap: 30px;
    }

     @media (min-width: 800px)
    {
        .box-input {
            flex-direction: row;
        }

        h1 {
            margin-top: 50px;
        }

        p {
            padding: 20px 45px;
        }
    }
</style>