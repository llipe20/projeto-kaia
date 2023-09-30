<template>
   <div class="container" id="circular">
        <div class="backdrop">
            <div class="gradiente">
                <!-- FUNDO DO QUIZ -->
            </div>
        </div>
        <div class="icon">
            <!-- ICONE DO QUIZ -->
        </div>
        <h1>Quiz name</h1>

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
    :root {
        --cor-principal: rgb(1, 1, 152);
         --font-quiz : 'Luckiest Guy', cursive;
    }

    .container {
        background: linear-gradient(to top, rgb(0, 0, 84), rgb(1, 1, 155), rgb(35, 35, 213));
        position: relative;
        gap: 30px;
    }

    .backdrop {
        background-color: white;
        width: 100%;
        height: 250px;
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
        border: 5px solid rgb(1, 1, 152);
        position: absolute;
        background-color: white;
        top: 160px;
    }

    h1 , h2{
        color: rgb(255, 255, 255);
        margin-top: 30px;
        font: normal 2.4em var(--font-quiz);
    }

    p {
        color: rgba(255, 255, 255, 0.892);
        text-align: center;
        font-size: 1.2em;
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