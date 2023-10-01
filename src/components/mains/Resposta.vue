<template>
    <div class="container" id="box-alternativas">
        <h3>ds  jij ijr jirjuwer jn r,</h3>
        <h3>ds  jij ijr jirjuwer jn r,</h3>
        <h3>ds  jij ijr jirjuwer jn r,</h3>
        <h3>ds  jij ijr jirjuwer jn r,</h3>
    </div>
</template>

<script>
export default {
    name : 'RespostaQuiz'
}
</script>

<style scoped>

    #box-alternativas {
        gap: 15px;
    }

    h3 {
        border-bottom: 4px solid rgba(255, 255, 255, 0.553);
        outline: 3px solid rgba(255, 255, 255, 0.553);
        background-color: var(--cor-secundaria);
        color: rgb(255, 255, 255);
        font: normal 2em var(--font-quiz);
        text-align: center;
        width: 90%;
        border-radius: 15px;
        padding: 20px;
        transform: scale(.9);
        transition: all .5s;
    }
        
    @media (min-width: 800px)
    {
        h3:hover {
            background-color: var(--cor-contraste);
            transform: scale(1);
        }
    }
</style>