<template>
    <h1 v-show="display==true">FOOTER AQUI</h1>
</template>

<script>
export default {
    name : "FooterQuiz",

    data() {
        return {

        }
    },

    components : {

    },

    props : {
        display : Boolean   // false - sumir    true - aparecer
    },

    methods : {

    },

    mounted() {
        
    }
}
</script>