<template>
    <div class="container content">
        <div class="space">
            <!-- ESPAÇO EM BRANCO não mexer -->   
        </div>
        <table class="table">
            <tr class="header">
                <td>Rank</td>
                <td>Jogador</td>
                <td>Pontos</td>
                <td>Tempo</td>
            </tr>
            <tr v-for="dado in dados" :key="dado.id" v-show="dado.id > 3">
                <td> {{ dado.id }}th</td>
                <td> {{ dado.name }} </td>
                <td> {{ dado.point }} </td>
                <td> {{ dado.time }} seg</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : 'TablePlayer',

    data() {
        return {
            dados : this.$store.state.dados.ranking
        }
    },

    methods: {
        // Alternar as cores das linhas das tabela
        Alternar() {
            const rows = document.querySelectorAll("tr")
             
            for(let i = 0; i < rows.length; i++) {
                if(i % 2 != 0 && i != 0) {
                    rows[i].classList.add("alternar")
                }
            }
        }
    },

   mounted() {
        this.Alternar();
   }
}
</script>

<style scoped>

    .content {
        background: linear-gradient(to top, var(--cor-principal), var(--cor-contraste));
        justify-content: flex-start;
        margin-top: -215px;
        height: auto;
        width: 100%;
        z-index: -1;
    }

    .space {
        height: 215px;
        width: 100%;
    }

    .table {
        font-family: var(--font-quiz);
        border-collapse: collapse;
        height: auto;
        width: 90%;
        padding: 20px;
        margin: 30px 0px;
    }

    /* Linha */
    tr {
        font: normal 1.3em var(--font-pergunta);
        margin-bottom: 5px;
        height: 60px;
        width: 100%;
        color: white;
    }

    .alternar {
        background-image: linear-gradient(to left, var(--cor-principal), var(--cor-contraste));
    }

    .header {
        background-color: var(--cor-contraste);
    }

    /* Coluna */
    td {
        text-align: center;
        width: 25%;
        padding: 0px 10px;
        width: auto;
    }
</style>