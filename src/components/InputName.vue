<template>
    <input type="text" id="input-nome" placeholder="Insira seu nome" autofocus>
</template>

<script>
export default {
    name : "InputName"
}
</script>

<style scoped>

    :root {
        --font: Arial, sans-serif;
    }
    input {
        font: normal 1.15em Arial, sans-serif;
        border: 2px solid rgba(128, 128, 128, 0.744); 
        border-radius: 10px;
        padding: 5px 10px;
        outline: none;
        width: 50%;
        height: 55px;
    }
</style>