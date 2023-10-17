<template>
    <div class="container box-results">
            <div class=" container mini-box">
                <div class="container circle">
                    <img src="/imgs/money.png" alt="coins">
                </div>

                <span class="text">
                    {{ obj.point }} Pontos
                </span>
            </div>

            <div class=" container mini-box">
                <div class="container circle">
                    <img src="/imgs/verificado.png" alt="verificado" id="img-verificado">
                </div>

                <div class="container box-title">
                    <span class="text">
                        {{ obj.acertos }} Acertos
                    </span>
                </div>
            </div>

            <div class=" container mini-box">
                <div class="container circle">
                    <img src="/imgs/clock.png" alt="relogio">
                </div>

                <span class="text">
                    {{ obj.time }} segundos
                </span>
            </div>
    </div>
</template>

<script>
export default {
    name : 'PlayerResults',

    data() {
        return {
            obj : this.$store.state.enviar   
        }
    },

    mounted() {
        /*         if(localStorage.getItem("Display") == 3) {
            const value = {
                name : localStorage.getItem("Nome"),
                point : localStorage.getItem("Ponto"),
                time : localStorage.getItem("Cronometro"),
                acertos : localStorage.getItem("Acertos")
            }

            this.$store.commit("GetName", value.name)
            this.$store.commit("UpdateTime", value.time)
            this.$store.commit("UpdateAcerto", value.acertos)
            this.$store.commit("UpdatePlacar", value.point)   */
    }
}
</script>

<style scoped>
    .box-results {
        background-color: transparent;
        padding: 20px;
        width: 90%;
        border-radius: 10px;
        gap: 30px;
    }

    .circle, .mini-box {
        border-radius: 50%;
        background-color: var(--cor-contraste);
        border-bottom: 4px solid rgb(189, 186, 186);
        outline: 3px solid rgb(189, 186, 186);
        width: 70px;
        height: 70px;
    }

    .circle {
        border-left: 3px solid rgb(189, 186, 186);
        border-bottom: none;
        position: absolute;
        left: -5%;
    }

    .mini-box {
        position: relative;
        border-radius: 10px;
        height: 60px;
        width: 100%;
        max-width: 500px;
    }

    .text {
        font: normal 1.6em var(--font-quiz);
        color: white;
    }

    img {
        height: 64px;
        width: 64px;
    }

    #img-verificado {
        height: 50px;
        width: 50px;
    }
</style>