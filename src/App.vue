<template>
  
    <MainPage id="app"/>
  
</template>

<script>
import MainPage from './components/MainPage.vue';


export default {
  name: 'app',
  components: {
    MainPage
  },
  mounted: function() {
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = document.documentElement.clientHeight;
    let viewportMetaTag = document.querySelector('head meta[name = "viewport"]')
    viewportMetaTag.setAttribute("content", `height=${windowHeight}, width=${windowWidth}, initial-scale=1.0`)

  }
}
</script>

<style>
#app {
  width: 100%;

}
</style>
