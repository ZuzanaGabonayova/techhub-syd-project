<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div id="app">
    <div class="description panel">
    <HomePage />
    </div>
    <section class="panel red">
      <AboutPage />
    </section>
    <section class="panel orange">
      <ReferencesPage />
    </section>
    <section class="panel purple">
      <ContactPage />
    </section>
    <section class="panel green">
      <!-- <EventsPage /> -->
    </section>

    <!-- <EventsPage /> -->
  </div>

</template>


<script>
import HomePage from './Vue/pages/HomePage.vue'
import AboutPage from './Vue/pages/AboutPage.vue'
import ReferencesPage from './Vue/pages/ReferencesPage.vue'
/* import EventsPage from './Vue/pages/EventsPage.vue' */
import ContactPage from './Vue/pages/ContactPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    AboutPage,
    ReferencesPage,

    /* EventsPage, */
    ContactPage

    /* EventsPage */
  }
}

/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".panel").forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top", 
          pin: true, 
          pinSpacing: false 
        });
      });


      ScrollTrigger.create({
        snap: 1 / 7 // snap whole page to the closest section!
}); */

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
