<template>
  <div id="app">
    <img alt="logo" src="./assets/covid19_response_icon.svg" width="400" height="80">
    <HelloWorld msg="Dank App Yo"/>
    {{slogan}}
    <posts v-bind:posts="posts"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import posts from './components/posts'

export default {
  name: 'App',
  components: {
    HelloWorld,
    posts


  },
  data() {
    return {
      slogan: 'The app that connects you to the world when Covid has you stuck in one place.',
      posts: [
        {
          id: 1,
          username: 'LizaneBotha',
          content: '1234567',
          date_posted: '16 May 2020',
          saved: false
        },
        {
          id: 2,
          username: 'TharunThomas',
          content: 'quac',
          date_posted: '13 May 2020',
          saved: true
        },
        {
          id: 3,
          username: 'EvanGilbert',
          content: 'swag',
          date_posted: '16 May 2020',
          saved: false
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
