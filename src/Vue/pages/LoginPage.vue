<template>
  <div id="login">

    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" /> 
      <button type="submit" value="login">Login</button>
      <p> 
          <br>
          email: <b>admin@admin.com</b><br>
          password: <b>admin123</b>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router'

  export default {
    name: 'LoginEvents',
    setup() {
      const router = useRouter()

      const email = ref("")
      const password = ref("")

      const login = async () => {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(() => {})
          .catch(err => alert(err.message)); // just to check if we want
          router.replace('/admin')
      }
      return { login, email, password } // remember me!
      // test - email badly formatted - No user existing at all
    }    
  }
</script>

<style lang="scss" scoped>
#login{
    height: fit-content;
    min-height: 90vh;
    width: 100%;
    background-color: #000000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
      color: #00A800;
      font-weight: bold;
      font-size: 3rem;
    }

    form{
      margin-top: 2rem;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 20px;

      input{
        color: #B3A2FE;
        background-color: transparent;
        border-radius: 0.8rem;
        border: 1px solid #B3A2FE;
        width: 100%;

        &::placeholder{
          padding-left: 10px;
          color: #00A800;
        }
      }

      button{
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

      p{
        color: #ffffff;
        text-align: center;
      }
    }
}
</style>