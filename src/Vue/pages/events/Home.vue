<template>



    <div>
      <EventListUsers />
    </div>
    

</template>

<script>
// Stuff for CRUD

import EventListUsers from '../../components/events/EventListUsers.vue'

export default {
  name: 'HomeEvents',
  components: {
    EventListUsers
  }
}
</script>
