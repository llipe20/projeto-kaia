<template>
    <div class="container box-ranking">
        <div class="box-podio container" id="box-segundo">
            <div class="podio container" id="segundo">
                <p style="color:var(--cor-principal)">[ 2nd ]</p>
            </div>
            <h3>Neymar Jr.</h3>
            <h4 id="time">1 min e 26 seg</h4>
            <h4 id="pointer">12 pts</h4>
        </div>
         
         <div class="box-podio container" id="box-primeiro">
            <div class="podio container" id="primeiro">
                <p style="color:var(--cor-principal)">[ 1st ]</p>
            </div>
            <h3>Robson da Silva Araújo</h3>
            <h4 id="time">0 min e 50 seg</h4>
            <h4 id="pointer">+ 8.000 pts</h4>
        </div>

        <div class="box-podio container" id="box-terceiro">
            <div class="podio container" id="terceiro">
                <p style="color:var(--cor-principal)">[ 3rd ]</p>
            </div>
            <h3>Satoru Gojo</h3>
            <h4 id="time">2 min e 10 seg</h4>
            <h4 id="pointer">500 pts</h4>
        </div>
    </div>

    <TablePlayer />
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

    methods : {

    },

    mounted() {

    }
}
</script>

<style scoped>

    .box-ranking {
        background: linear-gradient(to top, rgb(1, 66, 130), rgb(1, 1, 84));
        justify-content: space-evenly;
        align-content: flex-start;
        flex-direction: row;
        border-radius: 0px 0px 50% 50%;
        height: auto;
        width: 100%;
        padding-bottom: 20px;
    }

    .box-podio {
        justify-content: center;
        padding: 10px;
        width: 30vw;
        max-width: 250px;
        gap: 10px;
    }

    #box-primeiro {
        margin-top: 80px;
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

    h4 {
        font-size: 1.2em;
    }

    #pointer {
        font: normal 1.4em var(--font-quiz);
        color: green;
    }
</style>