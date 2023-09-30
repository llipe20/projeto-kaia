<template>
    <div class="content">
        <div class="content invisible">
            <h3 id="botton-desc">Descrição</h3>
            <div class="content box" id="box-desc">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem temporibus cupiditate quaerat repellendus asperiores labore quam sed porro veniam optio voluptate, reiciendis quisquam illum blanditiis nostrum inventore consequatur nesciunt.
                </p>
            </div>
            <h3 id="botton-passo-passo">Como jogar</h3>
            <ul class="content box" id="box-passo-passo">
                <li>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa corporis explicabo ratione dignissimos pariatur earum optio eius alias nulla blanditiis. Adipisci dolores nihil repellendus reiciendis necessitatibus veritatis quis ipsum minus!</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name : 'TutorialQuiz',

    data() {

    },

    components : {

    },

    methods : {

    },

    mounted() {

    }
}
</script>

<style scoped>
    .content {
        background-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .box {
        gap: 10px;
    }

    h3 {
        text-align: center;
        color: rgb(255, 255, 255);
        font: normal 2em var(--font-quiz);
        border-bottom: 4px solid var(--cor-contraste);
        outline: 4px solid var(--cor-contraste);
        border-radius: 15px;
        padding: 10px;
        width: 60%;
        margin-top: 15px;
    }

    p {
        color: rgba(255, 255, 255, 0.892);
        text-align: center;
        font: normal 1.3em var(--font-pergunta);
        line-height: 1.5em;
        padding: 20px;
    }
</style>