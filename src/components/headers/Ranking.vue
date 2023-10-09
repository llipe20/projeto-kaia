<template>
        <div class="container box-ranking"  v-show="$store.state.display" v-if="complete">
            <div class="box-podio container" id="box-segundo">
                <div class="podio container" id="segundo">
                    <!-- ICON PODIO -->
                </div>
                <h3> {{ data[1].name }} </h3>
                <h4 id="time"> {{ data[1].time }} seg</h4>
                <h4 id="pointer"> {{ data[1].point }} pts</h4>
            </div>
            
            <div class="box-podio container" id="box-primeiro">
                <div class="podio container" id="primeiro">
                    <img src="/imgs/first-prize.png" alt="primeiro lugar" id="img-primeiro">
                </div>
                <h3 id="name-primeiro">  {{ data[0].name }} </h3>
                <h4 id="time"> {{ data[0].time }} seg</h4>
                <h4 id="pointer"> {{ data[0].point }} pts</h4>
            </div>

            <div class="box-podio container" id="box-terceiro">
                <div class="podio container" id="terceiro">
                    <!-- ICON PODIO -->
                </div>
                <h3> {{ data[2].name }} </h3>
                <h4 id="time"> {{ data[2].time }} seg</h4>
                <h4 id="pointer"> {{ data[2].point }} pts</h4>
            </div>
        </div>   

    <TablePlayer  
        v-show="$store.state.display" 
        :dados="data"
    />
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
            data : null,
            complete : null
        }
    },

    props: {
        dados : Object
    },

    methods : {
        async getRanking() {
            const req = await fetch('http://localhost:3000/ranking')
            const data = await req.json()
            console.log(data)
            this.data = data
            this.complete = true
        }
    },

    created() {
        this.getRanking()
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