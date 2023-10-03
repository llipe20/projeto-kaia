<template>
    <form action="" @submit="Start">
        <input v-model="username" type="text" id="input-name" maxlength="20" placeholder="seu nome" autofocus>
        <input type="submit" value="Jogar" id="submit">
    </form>
</template>

<script>
export default {
    name : "InputName",

    data() {
        return {
            username : null,
        }
    }, 

    methods : {
        Start(e) {
            e.preventDefault()

            if(this.username == null)
            {
                const input = document.getElementById("input-name")
                input.style.animation = 'mahoraga .2s infinite alternate'

                setTimeout (() => {
                    input.style.animation = 'none'
                }, 1000)
            }
            else
            {
                console.log(`Tudo certo ${this.username}`)
                this.$emit('onDisplay',{valor : false})
            }

            this.username = null
        }
    }
}
</script>

<style scoped>

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        height: auto;
        width: 100%;
    }

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

    #submit {
        background-color: var(--cor-secundaria);
        animation: mahoraga .5s infinite alternate;
    }

    @media (min-width: 800px)
    {
        input {
            margin: 0;
        }

        form {
            flex-direction: row;
        }
    }

    ::placeholder {
        color: white;
    }
</style>

