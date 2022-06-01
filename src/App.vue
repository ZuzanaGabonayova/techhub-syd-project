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
    <ContactPage />

    <EventsPage />
  </div>

</template>


<script>
import HomePage from './Vue/pages/HomePage.vue'
import AboutPage from './Vue/pages/AboutPage.vue'
import ReferencesPage from './Vue/pages/ReferencesPage.vue'
import EventsPage from './Vue/pages/EventsPage.vue'
import ContactPage from './Vue/pages/ContactPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    AboutPage,
    ReferencesPage,
<<<<<<< HEAD
    EventsPage,
    ContactPage
=======
    /* EventsPage */
    ContactPage,
>>>>>>> e320b7526238b1c6e9ed4bbb2070e954dc4f1bac
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
