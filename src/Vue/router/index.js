import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './../pages/HomeView.vue'

// for editing (CRUD)
import EditEvents from './../pages/events/EditEvents.vue'

// For login stuff
import LoginEvents from '../pages/LoginPage.vue'

// route guarding
//import firebase from 'firebase'
//import 'firebase/firestore'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
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
    component: () => import(/* webpackChunkName: "about" */ './../pages/AdminPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  
})
export default router
