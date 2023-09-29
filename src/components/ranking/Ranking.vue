<template>
    <div class="container box-ranking">
        <div class="box-podio container" id="box-segundo">
            <div class="podio container" id="segundo"></div>
            <h3>Name player</h3>
            <h4 id="time">1 min e 50 seg</h4>
            <h4 id="pointer">500 pts</h4>
        </div>
         
         <div class="box-podio container" id="box-primeiro">
            <div class="podio container" id="primeiro"></div>
            <h3>Name player</h3>
            <h4 id="time">1 min e 50 seg</h4>
            <h4 id="pointer">500 pts</h4>
        </div>

        <div class="box-podio container" id="box-terceiro">
            <div class="podio container" id="terceiro"></div>
            <h3>Name player</h3>
            <h4 id="time">1 min e 50 seg</h4>
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
        background: linear-gradient(to top,  rgb(35, 35, 213), rgb(0, 0, 84));
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
        gap: 20px;
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
        font: normal 1.5em Arial, sans-serif;
        text-align: center;
        color: white;
    }

    h4 {
        font-size: 1.1em;
    }
</style>