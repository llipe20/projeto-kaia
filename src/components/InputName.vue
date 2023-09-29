<template>
    <input type="text" id="input-nome" placeholder="Insira seu nome">
</template>

<script>
export default {
    name : "InputName"
}
</script>

<style scoped>

    :root {
        --merda: rgb(1, 1, 102);
    }

    input {
        font: normal 1.2em Arial, sans-serif;
        background-color: var(--merda);
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
</style>