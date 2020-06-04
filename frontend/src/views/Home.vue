<template>
  <div>
    <router-link to="/Login">Login</router-link>| 
    <router-link to="/Register">Register</router-link>|
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header
  }
}
</script>
