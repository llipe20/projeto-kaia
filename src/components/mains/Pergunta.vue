<template>
    <div class="container" id="box-pergunta">
        <span class="container">
            + 15 pts
        </span>
        <h2>ovaehrpou fh hfurh hurfgh  hr nnm kf fji</h2>
    </div>
</template>

<script>
export default {
    name : 'PerguntaQuiz'
}
</script>

<style scoped>

    #box-pergunta {
        position: relative;
        padding: 0;
    }

    h2 {        
        border-bottom: 4px solid rgba(255, 255, 255, 0.553);
        outline: 3px solid rgba(255, 255, 255, 0.553);
        background-color: var(--cor-contraste);
        color: rgb(255, 255, 255);
        font: normal 1.7em var(--font-quiz);
        text-align: center;
        width: 80%;
        margin: 30px 0px 10px 0px;
        border-radius: 15px;
        padding: 20px;
    }

    span {
        font: normal 1.4em var(--font-quiz);
        text-shadow: .5px 0.5px .5px var(--cor-contraste);
        color: white;
        background-color: #FFD700;
        height: 50px;
        width: 100px;
        border-radius: 50%;
        position: absolute;
        left: 82%;
        top: 0%;
    }
</style>