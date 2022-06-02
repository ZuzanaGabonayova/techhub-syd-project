<template>
  <div class="admin" id="admin"> 

    <h1>This is an admin page</h1>
    <h1>Welcome <b>{{ name }}</b></h1>
    
    <div class="logout">
      <button  @click="logout">  <!-- v-if="user"  -->
        Logout
      </button>
    </div>

    <EventCreate />
    <EventList />
  </div>
</template>


<script>
// Stuff for Login (Auth)
import firebase from 'firebase'
import { ref, onBeforeMount } from 'vue'
import { /*useRoute,*/ useRouter } from 'vue-router'

import EventCreate from '../../components/events/EventCreate.vue'
import EventList from '../../components/events/EventList.vue'

export default {
  name: 'AdminEvents',
  components: {
 
    EventCreate,
    EventList

  },
  setup() {
    const router = useRouter()
    //const route = useRoute()

    const name = ref("")
    
    onBeforeMount(() => {
      const user = firebase.auth().currentUser // checking for the user info and store it in 'user'
      //console.log("testUser: ", user.email)
      if (user) {
        name.value = user.email.split('@')[0] // check for @ and split it there. so stuff before the @ sign.
      }
      else {
        router.push('/login') 
      }
    });
    
    const logout = () => {
      firebase
      .auth()
      .signOut()
      .then(() => {
      // Sign-out successful.
      }).catch((error) => {
        console.log("err", error.message)
      // An error happened.
      });
    }

    return { name, logout }  
  }
}
</script>

<style lang="scss" scoped>
#admin{
    height: fit-content;
    min-height: 90vh;
    width: 100vw;
    background-color: #000000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    h1{
      color: #00A800;
      font-weight: bold;
      font-size: 3rem;
      text-align: center;
    }

    .logout{
      justify-content: center;
      display:flex;

      button{
        margin-top: 2rem;
          background-color: #5700C8;
          color: #00A800;
          font-weight: bold;
          padding: 5px 20px;
          border-radius: 0.8rem;
          border: 1px solid #B3A2FE;
          

          &:hover{
            background-color: #4801A7;
          }
      }
    }
}
  
</style>