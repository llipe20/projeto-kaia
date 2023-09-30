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
        box-shadow: 3px 3px .5px rgba(255, 255, 255, 0.553);
        color: white;
        text-align: center;
        border-radius: 15px;
        padding: 5px 10px;
        border: none;
        outline: none;
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