<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <button>
        <span class="material-symbols-outlined">
            play_arrow
        </span>
        <h2>
            Jogar
        </h2>
    </button>
</template>

<script>
export default {
    name : 'BottonStart'
}
</script>

<style scoped>
    button {
        background-color: var(--cor-contraste);
        box-shadow: 3px 3px .5px rgba(255, 255, 255, 0.553);
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
        border: none;
        outline: none;
        cursor: pointer;
        margin: auto;
    }

    @media (min-width: 800px)
    {
        button {
            margin: 0;
        }
    }

    h2 {
        font: normal 1.8em var(--font-quiz);
    }
</style>