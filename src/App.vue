<template>
  <div class="container box-principal">
    <HeaderQuiz 
      v-show="$store.state.display" 
      v-if="complete"
      :dados="dados"
    />

    <RankIng 
      v-show="$store.state.display"
      v-if="complete"
      :dados="dados"
    />

    <MainQuiz 
      v-show="!$store.state.display"
      v-if="complete"
      :dados="dados"  
    />

    <FooterQuiz />
  </div>
</template>

<script>
import HeaderQuiz from './components/HeaderQuiz.vue'
import MainQuiz from './components/MainQuiz.vue'
import FooterQuiz from './components/FooterQuiz.vue'
import RankIng from './components/headers/Ranking.vue'

export default {
    name: 'App',

    components: {
      HeaderQuiz,
      MainQuiz,
      FooterQuiz,
      RankIng 
    },

    data() {
      return {
        dados : {
          quiz : [],
        },

        complete : null
      }
    },

    methods : {
        async getBanco() {
          const req = await fetch('http://localhost:3000/quiz')
          const data = await req.json()
  
          this.dados.quiz = data
          this.complete = true
        }
    },

    mounted() {
       this.getBanco()
    }
}

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&family=Luckiest+Guy&display=swap');

:root {

  /* 
    AZUL : 
  --cor-principal:  rgb(1, 66, 130);
  --cor-secundaria: rgb(1, 1, 186);
  --cor-contraste: rgb(1, 1, 84);

    VERMELHO : 
  --cor-principal:  rgb(253, 30, 30);
  --cor-secundaria: rgb(186, 1, 1);
  --cor-contraste: rgb(100, 0, 0);

    VERDE : 
  --cor-principal:  rgb(0, 232, 70);
  --cor-secundaria: rgb(1, 186, 1);
  --cor-contraste: rgb(0, 100, 0);

    AMARELO : 
  --cor-principal:  rgb(223, 215, 1);
  --cor-secundaria: rgb(206, 1, 1);
  --cor-contraste: rgb(207, 155, 0);
  */
  
  --cor-principal:  rgb(1, 66, 130);
  --cor-secundaria: rgb(1, 1, 186);
  --cor-contraste: rgb(1, 1, 84);
  --font-quiz: 'Luckiest Guy', cursive;
  --font-pergunta: 'Love Ya Like A Sister', cursive;
}

@keyframes mahoraga {
    0% {
        transform: scale(.95);
    }
    100% {
        transform: scale(1);
    }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

html::-webkit-scrollbar {
    display: none;
}

.container, body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

body {
  background-color: #e0e0e0;
}

.box-principal {
  width: 100vw;
  max-width: 800px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.496);
}
</style>

