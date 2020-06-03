import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../components/Posts.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'

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
    path: '/Posts',
    name: 'Posts',
    component: Posts
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

]

const router = new VueRouter({
  routes
})

export default router
