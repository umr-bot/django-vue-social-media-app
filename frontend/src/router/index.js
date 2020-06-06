//This is where our routes are created

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Groups from '../views/Groups.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Profile from '../views/Profile.vue'
import Logout from '../components/Logout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: Logout

  },
  {
    path: '/user',
    name: 'Profile',
    component: Profile
  }

]

const router = new VueRouter({
  routes
})

export default router
