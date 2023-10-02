<template>
    <button>
        Jogar
    </button>
</template>

<script>
export default {
    name : 'BottonStart'
}
</script>

<style scoped>

    button {
        background-color: var(--cor-secundaria);
        border: none;
        border-bottom: 4px solid var(--cor-contraste);
        outline: 4px solid var(--cor-contraste);
        color: white;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        gap: 10px;
        height: 80px;
        width: 60%;
        max-width: 300px;
        cursor: pointer;
        margin: auto;
        font: normal 2em var(--font-quiz);
        animation: mahoraga .5s infinite alternate;
    }

    @media (min-width: 800px)
    {
        button {
            margin: 0;
        }
    }
</style>