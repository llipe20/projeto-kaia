<template>
    <input type="text" id="input-nome" maxlength="20" placeholder="Insira seu nome">
</template>

<script>
export default {
    name : "InputName"
}
</script>

<style scoped>

    input {
        font: normal 1.2em var(--font-quiz);
        background-color: var(--cor-contraste);
        border: none;
        border-bottom: 4px solid rgba(255, 255, 255, 0.553);
        outline: 3px solid rgba(255, 255, 255, 0.553);
        color: white;
        text-align: center;
        border-radius: 15px;
        padding: 5px 10px;
        width: 60%;
        max-width: 300px;
        height: 80px;
        margin: auto;
    }

    @media (min-width: 800px)
    {
        input {
            margin: 0;
        }
    }

    ::placeholder {
        color: white;
    }
</style>