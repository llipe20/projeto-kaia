<template>
    <div class="container" id="box-alternativas">
        <p class="alternativas">ds  jij ijr jirjuwer jn r,</p>
        <p class="alternativas">ds  jij ijr jirjuwer jn r,</p>
        <p class="alternativas">ds  jij ijr jirjuwer jn r,</p>
        <p class="alternativas">ds  jij ijr jirjuwer jn r,</p>
    </div>
</template>

<script>
export default {
    name : 'RespostaQuiz'
}
</script>

<style scoped>

    #box-alternativas {
        height: 400px;
        gap: 15px;
    }

    .alternativas {
        border-bottom: 4px solid rgba(255, 255, 255, 0.553);
        outline: 3px solid rgba(255, 255, 255, 0.553);
        background-color: var(--cor-secundaria);
        color: rgb(255, 255, 255);
        font: normal 1.5em var(--font-quiz);
        text-align: center;
        width: 90%;
        border-radius: 15px;
        padding: 20px;
        transform: scale(.9);
        transition: all .5s;
    }
        
    @media (min-width: 800px)
    {
        .alternativas:hover {
            background-color: var(--cor-contraste);
            transform: scale(1);
        }
    }
</style>