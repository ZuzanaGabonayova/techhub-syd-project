/* import { createRouter, createWebHistory } from 'vue-router'

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
 */
  /* {
    path: '/about',
    name: 'about', */
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* component: () => import(/* webpackChunkName: "about" */ /*'../views/AboutView.vue')
  } */
/* ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router */





import { createRouter, createWebHistory } from 'vue-router'


// for editing (CRUD)
import Edit from '../pages/events/EditPage.vue'

// For login stuff
import Login from '../pages/events/LoginPage.vue'
import Register from '../pages/events/RegisterPage.vue'

// route guarding
//import firebase from 'firebase'
//import 'firebase/firestore'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/edit/:id',  // id parameter to know which project we clicked
    name: 'Edit',
    component: Edit
  },

  {
    path: '/register',
    name: 'Register', 
    component: Register
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/events/AdminPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  
})
export default router
