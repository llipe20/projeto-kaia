<template>
    <div class="container">
        <div class="container" id="box-placar">
            <div class="container" id="box-logo">
                <img src="/logo-kaia.png" alt="logo-kaia" id="logo">
                <h3>2/15</h3>
            </div>
            <div class="container">
                <img src="/money.png" alt="pontos">
                <h3>15 pts</h3>
            </div>
            
            <div class="container">
                <img src="/clock.png" alt="tempo">
                <h3>120 seg</h3>
            </div>
            
            <button>
                <h3 style="color: white;">Dica</h3>
            </button>
        </div>
        <div class="container invisible" id="box-dica">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt deleniti aliquid blanditiis nisi aut sunt
            </p>
             <span class="container" id="close">
                x
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name : 'PlacarQuiz'
}
</script>

<style scoped>

    @keyframes mover-anima {
        0% {
            transform: scale(.9);
        }
        50% {
            transform: scale(.95);
        }
        100% {
            transform: scale(1);
        }
    }

    #box-placar, #box-dica {
        background-image: linear-gradient(0deg, var(--cor-secundaria), var(--cor-contraste));
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        border-top: 5px solid rgba(255, 255, 255, 0.553);
        border-radius: 50% 50% 0 0;
        padding: 30px 20px 20px 20px;
        height: 150px;
        margin-top: 10px;
    }        

    #box-dica {
        position: relative;
        padding: 10px;
    }

    h3, p, span {
        font: normal 1.6em var(--font-quiz);
        text-align: center;
        color: white;
        text-shadow: 1px 1px 1px var(--cor-contraste);
        transition: all 2s;
        line-height: 1.5em;
    }

    p, span {
        font-size: 1.3em;
        max-width: 80%;
    }

    span {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 4px solid white;
        animation: mover-anima .5s infinite alternate;
        position: absolute;
        left: 91%;
        top: 8%;
    }

    button {
        background-color: var(--cor-secundaria);
        border: none;
        border-bottom: 4px solid var(--cor-contraste);
        outline: 3px solid var(--cor-contraste);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        width: 100px; 
        transition: all 2s;
        animation: mover-anima .5s infinite alternate;
    }

    #box-logo {
        margin-top: 10px;
        gap: 10px;
    }

    #logo {
        height: 50px;
        width: 50px;
    }

    .invisible {
        display: none;
    }
</style>
