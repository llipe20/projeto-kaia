<template>
    <input type="text" id="input-nome" placeholder="Insira seu nome" autofocus>
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
        box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.553);
        color: white;
        text-align: center;
        border-radius: 15px;
        padding: 5px 10px;
        border: none;
        outline: none;
        width: 60%;
        max-width: 300px;
        height: 70px;
    }

    ::placeholder {
        color: white;
    }
</style>