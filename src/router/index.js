import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Vue/pages/Homepage.vue'
import About from '../Vue/pages/AboutPage.vue'
import Events from '../Vue/pages/EventsPage.vue'
import References from '../Vue/pages/ReferencesPage.vue'
import Contact from '../Vue/pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/',
    name: 'AboutPage',
    component: About
  },
  {
    path: '/',
    name: 'EventsPage',
    component: Events
  },
  {
    path: '/',
    name: 'ReferencesPage',
    component: References
  },
  {
    path: '/',
    name: 'ContactPage',
    component: Contact
  }

  /* {
    path: '/about',
    name: 'about', */
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* component: () => import(/* webpackChunkName: "about" */ /*'../views/AboutView.vue')
  } */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
