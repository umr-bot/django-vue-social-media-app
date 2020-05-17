<template>
  <div id="app">
    <img alt="logo" src="./assets/covid19_response_icon.svg" width="400" height="80">
    <Header />
    <AddPost v-on:add-post="addPost"/>
    <posts v-bind:posts="posts" v-on:markSaved="saved_post(post.id)"/>
  </div>
</template>

<script>
import Header from './components/layout/header.vue'
import posts from './components/posts'
import AddPost from './components/AddPost'

export default {
  name: 'App',
  components: {
    Header,
    posts,
    AddPost


  },
  data() {
    return {
      posts: [
        {
          id: 1,
          username: 'Lizane Betsie Botha',
          content: '1234567',
          categories: ['dumb', 'first', 'test'],
          date_posted: '16 May 2020',
          saved: false
        },
        {
          id: 2,
          username: 'TharunThomas',
          content: 'quac',
          categories: ['avo', 'food', 'green'],
          date_posted: '13 May 2020',
          saved: true
        },
        {
          id: 3,
          username: 'EvanGilbert',
          content: 'swag',
          categories: ['dumb', 'cool', 'dope'],
          date_posted: '16 May 2020',
          saved: false
        }
      ]
    }
  },
  methods: {
    saved_post(id){
      this.posts = this.posts.filter(post => post.id == id);
    },
    addPost(newPost){
      this.posts = [newPost, ...this.posts]; //spread operator ... copies what's alread in posts, then adds newPost

    }
  }
}
//fires off when the component loads
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

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #006622;
}
</style>
