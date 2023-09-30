<template>
    <div class="container div">
        <div class="space">
            <!-- ESPAÇO EM BRANCO -->   
        </div>
        <h1>TablePlayer</h1>
    </div>
</template>

<script>
export default {
    name : 'TablePlayer'
}
</script>

<style scoped>

    .div {
        background: linear-gradient(to top, rgb(1, 66, 130), rgb(1, 1, 84));
        justify-content: flex-start;
        margin-top: -215px;
        height: 500px;
        width: 100%;
        z-index: -1;
    }

    .space {
        height: 215px;
        width: 100%;
    }
</style>