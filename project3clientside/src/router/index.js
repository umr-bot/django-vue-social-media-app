//This is where our routes are created

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Groups from '../views/Groups.vue'
import Login_Register from '../views/Login_Register.vue'
import Profile from '../views/Profile.vue'

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
    path: '/login',
    name: 'Login',
    component: Login_Register
  },
  {
    path: '/user',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes
})

export default router
