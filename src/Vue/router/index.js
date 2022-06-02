import { createRouter, createWebHistory } from 'vue-router'
import HomeEvents from './../pages/events/Home.vue'

// for editing (CRUD)
import EditEvents from './../pages/events/EditEvents.vue'

// For login stuff
import LoginEvents from './../pages/events/Login.vue'

// route guarding
//import firebase from 'firebase'
//import 'firebase/firestore'

const routes = [
  {
    path: '/',
    name: 'HomeEvents',
    component: HomeEvents
  },
  {
    path: '/editEvents/:id',  // id parameter to know which project we clicked
    name: 'EditEvents',
    component: EditEvents
  },
  {
    path: '/login',
    name: 'LoginEvents',
    component: LoginEvents
  },

  {
    path: '/admin',
    name: 'AdminEvents',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './../pages/events/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  
})
export default router
