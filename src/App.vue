<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div id="app">
    <HomePage />
    <AboutPage />
    <ReferencesPage />
  </div>

</template>


<script>
import HomePage from './Vue/pages/HomePage.vue'
import AboutPage from './Vue/pages/AboutPage.vue'
import ReferencesPage from './Vue/pages/ReferencesPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    AboutPage,
    ReferencesPage
  }
}

</script>



<style lang="scss">

@import "./style/main.css";


/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */

</style>
