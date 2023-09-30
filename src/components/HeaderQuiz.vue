<template>
   <div class="container" id="circular">
        <div class="backdrop" style="background-image: url('/background1.jpg')">
            <div class="gradiente">
                <!-- FUNDO DO QUIZ -->
            </div>
        </div>
        <div class="icon">
            <!-- ICONE DO QUIZ -->
        </div>
        <h1>O quanto você sabe de gramática?</h1>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem temporibus cupiditate quaerat repellendus asperiores labore quam sed porro veniam optio voluptate, reiciendis quisquam illum blanditiis nostrum inventore consequatur nesciunt.
        </p>

        <InputName />
        <BottonStart />
        
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
        background: linear-gradient(to top, rgb(1, 1, 84), rgb(1, 66, 130), rgb(1, 1, 186));
        position: relative;
        gap: 30px;
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
        border: 5px solid var(--cor-contraste);
        position: absolute;
        background-color: white;
        top: 210px;
    }

    h1 , h2{
        text-align: center;
        color: rgb(255, 255, 255);
        margin-top: 30px;
        font: normal 2.4em var(--font-quiz);
    }

    p {
        color: rgba(255, 255, 255, 0.892);
        text-align: center;
        font: normal 1.3em var(--font-pergunta);
        line-height: 1.5em;
        padding: 0px 20px;
        margin: 10px 0px;

    }

     @media (min-width: 800px)
    {
        h1 {
            margin-top: 95px;
        }

        p {
            padding: 0 45px;
        }
    }
</style>