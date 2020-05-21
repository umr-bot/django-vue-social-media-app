<template>
  <div id="home">
    <!-- <img alt="logo" src="../assets/covid19_response_icon.svg" width="400" height="80"> -->
    <!-- <Header /> -->
    <AddPost v-on:add-post="addPost"/>
    <posts v-bind:posts="posts" v-on:markSaved="saved_post(post.id)"/>
  </div>
</template>

<script>
//import Header from '../components/layout/header';
import posts from '../components/Posts';
//import AddPost from '../components/AddPost';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    //Header,
    posts,
    AddPost


  },
  data() {
    return {
      posts: [
        // {
        //   id: 1,
        //   username: 'Lizane Betsie Botha',
        //   content: '1234567',
        //   categories: ['dumb', 'first', 'test'],
        //   date_posted: '16 May 2020',
        //   saved: false
        // },
        // {
        //   id: 2,
        //   username: 'TharunThomas',
        //   content: 'quac',
        //   categories: ['avo', 'food', 'green'],
        //   date_posted: '13 May 2020',
        //   saved: true
        // },
        // {
        //   id: 3,
        //   username: 'EvanGilbert',
        //   content: 'swag',
        //   categories: ['dumb', 'cool', 'dope'],
        //   date_posted: '16 May 2020',
        //   saved: false
        // }
      ]
    }
  },
  methods: {
    // saved_post(id){
    //   this.posts = this.posts.filter(post => post.id == id);
    // },//check vid @ 58:45
    addPost(newPost){
      const {title, body} = newPost; //destructuring

      //POST request
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title:title, //this is the data we'll be sending that we pulled from the new post 
        body:body
      })//returns a promise
        .then(response => this.posts = [response.data, ...this.posts])
        .catch(error => console.log(error));
      //when you make a POST request to that url with a new post, it gives you back that post along with the id that it creates for you
      //when user submits--> it makes a request to JSONplaceholder, adds it then gives a response and then gets added to the ui 
      //this.posts = [newPost, ...this.posts]; //spread operator ... copies what's alread in posts, then adds newPost
    }
  },
  created(){ 
  //fires off when the component loads
  //npm install axios - http library to make http requests (can use fetch api alternatively)
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5') //limit to 5 --> !!!REPLACE WITH OUR python django (our backend API)
    //replace with what you build: python django (backend API)
      .then(response => {
        this.posts = response.data
      }, error => {
        console.log(error);
      }) //this.posts pertains to the posts [] in data() - filling it with the posts we get back when the pages loads
      //.catch(err => console.log(err))
    
    //returns a promise --> handle with .then 
    //returns a response that has a value called data

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
