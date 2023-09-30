<template>
  <div class="container box-principal">
    <HeaderQuiz />
    <RankIng />
    <MainQuiz />
    <FooterQuiz />
  </div>
</template>

<script>
import HeaderQuiz from './components/HeaderQuiz.vue'
import MainQuiz from './components/MainQuiz.vue'
import FooterQuiz from './components/FooterQuiz.vue'
import RankIng from './components/ranking/Ranking.vue'

export default {
  name: 'App',
  components: {
    HeaderQuiz,
    MainQuiz,
    FooterQuiz,
    RankIng 
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

@keyframes degrade-anima
{
    0% {
        background-position-y: 0%;
    }
    100% {
          background-position-y: 100%;
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

.box-principal {
  width: 100vw;
  max-width: 800px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.496);
}
</style>

