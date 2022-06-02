<template>
        
    <NavigatonComponent />
    <HomePage />
    <AboutPage />
    <EventsPage />
    <ReferencesPage />
    <ContactPage />

</template>

<script>
import NavigatonComponent from '../components/NavigationComponent.vue'
import HomePage from './HomePage.vue'
import AboutPage from './AboutPage.vue'
import ReferencesPage from './ReferencesPage.vue'
import EventsPage from './EventsPage.vue'
import ContactPage from './ContactPage.vue'


export default {
  name: 'App',
  components: {
    NavigatonComponent,
    HomePage,
    AboutPage,
    EventsPage,
    ReferencesPage,
    ContactPage
  }
}
</script>