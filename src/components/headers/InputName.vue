<template>
    <input type="text" id="input-nome" maxlength="20" placeholder="seu nome" autofocus>
</template>

<script>
export default {
    name : "InputName"
}
</script>

<style scoped>

    input {
        font: normal 1.8em var(--font-quiz);
        background-color: transparent;
        border: none;
        border-bottom: 4px solid var(--cor-contraste);
        outline: 4px solid var(--cor-contraste);
        color: white;
        text-align: center;
        border-radius: 15px;
        padding: 5px 10px;
        width: 55%;
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