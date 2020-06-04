<template>
  <div class="">

  </div>
</template>



<script>
import axios from 'axios'
import Header from '@/components/Header.vue'

export default {
    name: 'Posts',
    components:{    

    },
    data(){
        return{
            posts : [],
            username : '',
        }       
    },
    methods:{
        getPosts(){
            axios.get("http://127.0.0.1:8000/api/Post/")
            .then(res =>(this.posts = res.data))
            .catch(err => console.log(err));
        },
        getUser(){
            axios.get("http://127.0.0.1:8000/api/Register/")
            .then(res =>(this.username = res.username))
            .catch(err => console.log(err));
        }

    },
    created(){
        this.getPosts()
        this.getUser()

    }
}
</script>

