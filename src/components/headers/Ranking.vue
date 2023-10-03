<template>
        <div class="container box-ranking" v-show="display==true">
            <div class="box-podio container" id="box-segundo">
                <div class="podio container" id="segundo">
                    <!-- ICON PODIO -->
                </div>
                <h3>Neymar Jr.</h3>
                <h4 id="time">26 seg</h4>
                <h4 id="pointer">220 pts</h4>
            </div>
            
            <div class="box-podio container" id="box-primeiro">
                <div class="podio container" id="primeiro">
                    <img src="/imgs/first-prize.png" alt="primeiro lugar" id="img-primeiro">
                </div>
                <h3 id="name-primeiro">Robson da Silva Araújo</h3>
                <h4 id="time">501 seg</h4>
                <h4 id="pointer">+ 8.000 pts</h4>
            </div>

            <div class="box-podio container" id="box-terceiro">
                <div class="podio container" id="terceiro">
                    <!-- ICON PODIO -->
                </div>
                <h3>Satoru Gojo</h3>
                <h4 id="time">110 seg</h4>
                <h4 id="pointer">500 pts</h4>
            </div>
        </div>   
    <TablePlayer v-show="display==true"/>
</template>

<script>
import TablePlayer from './TablePlayer.vue'

export default {
    name : 'RankIng',

    components : {
        TablePlayer
    },

    data() {
        return {

        }
    },

    props: {
        display : Boolean   // false - sumir    true - aparecer
    },

    methods : {

    },

    mounted() {

    }
}
</script>

<style scoped>

    .box-ranking {
        display: flex;
        background: linear-gradient(to top, var(--cor-principal), var(--cor-contraste));
        justify-content: space-evenly;
        align-content: flex-start;
        flex-direction: row;
        border-radius: 0px 0px 100% 100%;
        border-bottom: 10px solid var(--cor-contraste);
        height: auto;
        width: 100%;
        padding-bottom: 10px;
    }

    .box-podio {
        justify-content: center;
        padding: 10px;
        width: 30vw;
        max-width: 250px;
        gap: 10px;
    }

    #box-segundo, #box-terceiro {
        margin-bottom: 80px;
    }

    .podio {
        background-color: white;
        border: 5px solid #FFD700;
        border-radius: 50%;
        width: 25vw;
        max-width: 180px;
        height: 25vw;
        max-height: 180px;
        animation: mahoraga 3s infinite alternate;
    }

    #primeiro {
        margin-bottom: -22px;
    }

    #segundo, #terceiro {
        border: 5px solid #C0C0C0;
        width: 20vw;
        max-width: 120px;
        height: 20vw;
        max-height: 120px;
    }

    #terceiro {
        border: 5px solid #CD7F32;
    }

    h3, h4 {
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.386);
        font: normal 1.5em var(--font-pergunta);
        text-align: center;
        color: white;
    }

    #name-primeiro {
        margin-top: 100px;
    }

    h4 {
        font-size: 1.2em;
    }

    #pointer {
        font: normal 1.4em var(--font-quiz);
        color: green;
    }

    #img-primeiro {
        margin-bottom: -54px ;
        width: 150%;
        height: 150%;
    }

    @media (min-width: 800px) 
    {
        #img-primeiro {
            margin-bottom: -80px ;
        } 
    }
</style>