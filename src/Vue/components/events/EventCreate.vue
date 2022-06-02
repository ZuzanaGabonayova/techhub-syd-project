<template>
  <div class="card card-body mt-4">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">    

      <div class="form-group">
        <label>Date</label>
        <input 
          type="date" 
          v-model="form.date" 
          class="form-control" 
          required 
        />
      </div>

      <div class="form-group">
        <label>Name</label>
        <input 
          type="text" 
          v-model="form.name" 
          class="form-control" 
          required 
        />
      </div>

      <div class="form-group mt-3">
        <label>Location</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.location"
          required
        />
      </div>

      <div class="create">
        <button type="submit" class="btn btn-success mt-3">
          Create Event
        </button>
      </div>
    </form>

  </div>
</template>

<script>
import { reactive } from 'vue'
import { createEvent } from '@/firebase.js' // maybe this make error

  export default {
   setup() {
     const form = reactive({
       date: '',
       name: '',
       location: ''
     })

     const onSubmit = async () => {
       // spread operator to add field + invoking our createProject function from firebase.js
       await createEvent({ ...form }) 
       // after create - empty input field
       form.date = ''
       form.name = ''
       form.location = ''
     }

     return { form, onSubmit }
   } 
  }
</script>

<style lang="scss" scoped>

.card{
  background-color: transparent;
}
form{
  color: #ffffff;
  

  input{
    color: #B3A2FE;
    background-color: transparent;
    border-radius: 0.8rem;
    border: 1px solid #B3A2FE;
    width: 100%;
  }

  .create{
    justify-content: center;
    align-items: center;
    display: flex;
  }

  button{
    background-color: #00a800!important;
  }
}

input[type="date"]::-webkit-calendar-picker-indicator {
  color-scheme: dark;
}

</style>