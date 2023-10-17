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
            username : null  // nome do usuário
        }
    }, 

    methods : {
        Start(e) {
            e.preventDefault()  // Anula envio do formulário

            if(this.username == null)   // Verifica se o usuario digitou algo
            {
                // Adiciona um aviso ( animação ) para preencher o form 
                const input = document.getElementById("input-name")     
                input.style.animation = 'mahoraga .2s infinite alternate'   

                setTimeout (() => {
                    input.style.animation = 'none'
                }, 1000)
            }
            else  // Guardar os dados
            {
                localStorage.setItem("Nome", this.username)
                this.$store.commit("GetName", this.username)  // Mutation Vuex
                this.username = null
                this.$store.commit('ModifyDisplay', { display : 2 }) // ABRIR MAIN display = 2 
                localStorage.setItem("Display", this.$store.state.display)
            }
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
        border-bottom: 4px solid rgb(189, 186, 186);
        outline: 3px solid rgb(189, 186, 186);
        color: white;
        text-align: center;
        border-radius: 15px;
        padding: 5px 10px;
        width: 55%;
        max-width: 300px;
        height: 80px;
        margin: auto;
    }

    #input-name, #input-name:focus {
        background-color: transparent;
        color: white;
    }

    #submit {
        background-color: var(--cor-contraste);
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

