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
  --color-principal: rgb(1, 1, 152);
  --cor-contraste : rgb(1, 1, 84);
  --font-quiz : 'Luckiest Guy', cursive;
  --font-pergunta : 'Love Ya Like A Sister', cursive;
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
  border: 2px solid rgba(128, 128, 128, 0.322);
}
</style>

