<template>
  <div class="card mt-4" id="event-list">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, date, name, location } in events" :key="id">
          <td>{{ date }}</td>
          <td>{{ name }}</td>
          <td>{{ location }}</td>
          <td>
            <!-- manually type action buttons -->
            <!-- :to will redirect the user to the edit URL with the id set to the project we are iterating -->
            <router-link :to="`/editEvents/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <!-- use deleteProject and pass the id -->
            <button class="btn btn-danger btn-sm" @click="deleteEvent(id)">
              Delete
            </button>
             <!--  -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadEvents, deleteEvent  } from '@/firebase.js'

  export default {
    setup() {
      const events = useLoadEvents()

      return { events, deleteEvent }
    } 
  }
</script>

<style lang="scss" scoped>

#event-list{
  color: #ffffff;
  padding-bottom: 2rem;
  background-color: #000000;

  table{
    background-color: #B3A2FE;
  }
}
</style>