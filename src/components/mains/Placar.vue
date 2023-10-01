<template>
    <div class="container" id="box-placar">
        <h3>Name</h3>
        <h3>Pointer</h3>
        <h3>Time</h3>

        <button>
            <h3 style="color: white;">Dica</h3>
        </button>
    </div>
</template>

<script>
export default {
    name : 'PlacarQuiz'
}
</script>

<style scoped>

    @keyframes mover-anima {
        0% {
            transform: scale(.9);
        }
        50% {
            transform: scale(.95);
        }
        100% {
            transform: scale(1);
        }
    }

    #box-placar {
        background-color: aliceblue;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 10px;
        margin-top: 10px;
    }

    h3 {
        font: normal 1.4em var(--font-quiz);
        text-align: center;
        color: var(--cor-contraste);
    }

    button {
        background-color: var(--cor-secundaria);
        border: none;
        border-bottom: 4px solid var(--cor-contraste);
        outline: 3px solid var(--cor-contraste);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        width: 100px;
        animation: mover-anima .5s infinite alternate;
    }
</style>
