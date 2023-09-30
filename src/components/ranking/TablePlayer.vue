<template>
    <div class="container content">
        <div class="space">
            <!-- ESPAÇO EM BRANCO -->   
        </div>
        <table class="table">
            <tr class="header">
                <td>Rank</td>
                <td>Jogador</td>
                <td>Tempo</td>
                <td>Pontos</td>
            </tr>
            <tr>
                <td>4th</td>
                <td>Robson da Silva Araújo</td>
                <td>50 seg</td>
                <td>8000</td>
            </tr>
            <tr class="alternar">
                <td>5th</td>
                <td>Neymar Jr.</td>
                <td>26 seg</td>
                <td>12</td>
            </tr>
            <tr>
                <td>6th</td>
                <td>Satoru Gojo</td>
                <td>10 seg</td>
                <td>500</td>
            </tr>
            <tr class="alternar">
                <td>7th</td>
                <td>Felipe</td>
                <td>63 seg</td>
                <td>120</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : 'TablePlayer'
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
        font: normal 1.2em var(--font-pergunta);
        margin-bottom: 5px;
        height: 60px;
        width: 100%;
        color: white;
    }

    .alternar {
        background-image: linear-gradient(to left, var(--cor-principal), var(--cor-contraste));
        box-shadow: .5px .5px 2px var(--cor-contraste);
    }

    .header {
         background-color: var(--cor-contraste);
         box-shadow: .5px .5px 2px var(--cor-principal);
    }

    /* Coluna */
    td {
        text-align: center;
        width: 25%;
        padding: 0px 10px;
        width: auto;
    }
</style>