<template>
  <div class="card card-body " id="edit-events">

    <h3>Edit Events</h3>
    <form @submit.prevent="update">

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

      <div class="update">
        <button type="submit" class="btn btn-primary  mt-3">
          Update
        </button>
      </div>
    </form>

  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getEvent, updateEvent } from '@/firebase.js'

export default {
  setup() {

    const router = useRouter()
    // grab the user ID from the URL by calling the useRoute hook + using the computed 
    // to store the route.param.id
    const route = useRoute()
    // Sometimes we need state that depends on other state - in Vue this is 
    // handled with component computed properties.
    const eventId = computed(() => route.params.id)

    const form = reactive({
      date: '',
      name: '',
      location: ''
    })
    // show information about the current(click) project in the edit form
    // add an onMounted life-hook that will get the user, based on router id 
    // pull the project from firebase and then assign the values to the fields
    onMounted(async () => {
      const event = await getEvent(eventId.value)
      form.date = event.date
      form.name = event.name
      form.location = event.location
    })

    const update = async () => {
      // once user clicks submit, redirect them to home page or '/'
      await updateEvent(eventId.value, {...form})
      router.push('/admin')
      // after create - empty input field
      form.date = ''
      form.name = ''
      form.location = ''
    }

    return { form, update }
  }
}
</script>

<style lang="scss" scoped>

#edit-events{
    height: fit-content;
    min-height: 90vh;
    width: 100vw;
    background-color: #000000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    h3{
      color: #00A800;
      font-weight: bold;
      font-size: 2.5rem;
      text-align: center;
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

      .update{
        justify-content: center;
        align-items: center;
        display: flex;
      }
    }
}

input[type="date"]::-webkit-calendar-picker-indicator {
  color-scheme: dark;
}
</style>