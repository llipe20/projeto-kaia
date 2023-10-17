<template>
    <button class="button" @click="Close">
        Voltar
    </button>
</template>

<script>
export default {
    name : 'BottonBack',

    methods : {

        // Requisição do rankeiamento 
        async getRanking() {
            const req = await fetch('http://localhost:3000/ranking')
            const dados = await req.json()
    
            this.$store.commit("GetRanking", dados)
        },

        Close() {
            localStorage.clear()
            this.getRanking()
            this.$store.commit("ModifyDisplay", { display : 1 }) // ABRIR HEADER
            this.$store.commit("UpdatePlacar", 0)
            this.$store.commit("UpdateAcerto", 0)
        }
    }
}
</script>

<style scoped>
    .button {
        font: normal 1.5em var(--font-quiz);
        background-color: var(--cor-contraste);
        border: none;
        border-bottom: 4px solid rgb(189, 186, 186);
        outline: 3px solid rgb(189, 186, 186);
        color: white;
        text-align: center;
        border-radius: 15px;
        padding: 5px 10px;
        margin-bottom: 20px;
        width: 60%;
        max-width: 250px;
        height: 70px;
        animation: mahoraga 1s alternate infinite;
    }
</style>