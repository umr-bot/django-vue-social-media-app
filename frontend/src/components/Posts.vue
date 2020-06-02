<template>
  <div class="">
      This is the posts
      <p v-bind:key = "post.id" v-for="post in posts">
          <div>{{post.content}}</div>
          <br>
          <h1>{{post.user}}</h1>
      </p>
  </div>
</template>



<script>
import axios from 'axios'

export default {
    name: 'Posts',
    components:{    

    },
    data(){
        return{
            posts : []
        }       
    },
    methods:{
        getPosts(){
            axios.get("http://127.0.0.1:8000/api/Post/")
            .then(res =>(this.posts = res.data))
            .catch(err => console.log(err));
        }

    },
    created(){
        this.getPosts()
    }
}
</script>

