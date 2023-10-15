<template>
    <button class="button" @click="Close">
        Voltar
    </button>
</template>

<script>
export default {
    name : 'BottonBack',

    data() {
        return {

        }
    },

    methods : {
        Close() {
            localStorage.clear()
            this.$store.commit("ModifyDisplay", { display : 1 }) // ABRIR HEADER
            const value = - (this.$store.state.enviar.point)
            this.$store.commit("UpdatePOnto", value)
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