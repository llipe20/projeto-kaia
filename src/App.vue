<template>
  <div class="container box-principal">
    <HeaderQuiz />
    <MainQuiz />
    <FooterQuiz />
  </div>
</template>

<script>
import HeaderQuiz from './components/HeaderQuiz.vue'
import MainQuiz from './components/MainQuiz.vue'
import FooterQuiz from './components/FooterQuiz.vue'

export default {
  name: 'App',
  components: {
    HeaderQuiz,
    MainQuiz,
    FooterQuiz
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.container, body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.box-principal {
  width: 100vw;
  max-width: 800px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.496);
}
</style>

