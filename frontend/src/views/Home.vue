<template>
  <div class="home">
    <div class="container">
      <AddPost />
      <FilterPosts />
      <br>
      <Posts/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'
import FilterPosts from '@/components/FilterPosts.vue'
import AddPost from '@/components/AddPost.vue'

export default {
  name: 'Home',
  components: {
    Posts,
    FilterPosts,
    AddPost
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