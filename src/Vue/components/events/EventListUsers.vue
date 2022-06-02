<template>

  <div id="events-home">
    <div 
    class="container-fluid events"
    data-aos="fade-up"
    data-aos-duration="1500"
    >

      <div class="row ">

        <div class="col-sm-12 col-md-12 events-heading">

          <h2>Upcoming events</h2>

        </div>

      </div>

      <div class="events-table">

          <div class="card mt-4">
            <table class="table m-0 events-table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="{ id, date, name, location } in events" :key="id">
                  <td>{{ date }}</td>
                  <td>{{ name }}</td>
                  <td>{{ location }}</td>
                </tr>
              </tbody>
            </table>
          </div>

       </div>

    </div>
  </div>

</template>

<script>
// useload hook + delete import 
import { useLoadEvents } from '@/firebase.js'

  export default {
    setup() {
      const events = useLoadEvents()

      return { events }
    } 
  }
</script>

<style lang="scss" scoped>

</style>