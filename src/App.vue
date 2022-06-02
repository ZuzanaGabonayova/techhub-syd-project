<template>

    <router-view/>
    <FooterComponent />

</template>


<script>
import FooterComponent from './Vue/components/FooterComponent.vue'



//import firebase from 'firebase' // firebase general stuff
//import {} from '@/firebase.js' // all from firebase.js file

//import { onBeforeMount} from 'vue' // lifecycle hook
//import { useRouter, useRoute } from 'vue-router' // able to use methods from vue-router (replace etc)


export default {
  name: 'App',
  components: {
    FooterComponent
  },
/*   setup() {
    const router = useRouter(); // just declaring them
    const route = useRoute();

    onBeforeMount(() => { // 
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) { // dont have a user - not logged in)
          router.replace('/login') // send them to this place
        }
        else if (route.path == '/login' || route.path == '/register') { // if logged in on this page, send us to home
          router.replace('/'); // test: go to frontpage, should redirect
        }
      })
    })
  } */
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
