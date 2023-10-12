<template>
    <div class="container">
        <h1>FOOTER AQUI</h1>

        <div>
            {{ $store.state.enviar.player }}
            {{ $store.state.enviar.time }}
            {{ $store.state.enviar.point }}
        </div>

        <button @click="Close">
            Inicio
        </button>
    </div>
</template>

<script>
export default {
    name : "FooterQuiz",

    data() {
        return {
            display : false
        }
    },

    components : {

    },

    props : {
        
    },

    methods : {
        Close() {
            localStorage.clear()
            this.$store.commit("ModifyDisplay", { display : 1 }) // ABRIR HEADER
        }
    }, 

    mounted() {
       
    }
}
</script>