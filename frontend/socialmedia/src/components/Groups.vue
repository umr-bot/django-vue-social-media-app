<template>
  <div class="hello">
    <div v-bind:key="User.id" v-for="User in allUsers">
      <h1>MY GROUPS</h1>
      <div>{{User.grouplist}} </div>
    </div>

    <div>   
      
      <form @submit="onSubmit">
        <input type="text" v-model="content1" placeholder="Enter Group Name...">
        <input @click="onSubmit($event,'Join',content1)" type="submit" value="Join Group">      
      </form>

      <form @submit="onSubmit">
        <input type="text" v-model="content2" placeholder="Enter Group Name...">
        <input @click="onSubmit($event,'Create',content2)" type="submit" value="Create Group">     
      </form>

      <form @submit="onSubmit">
        <input type="text" v-model="content3" placeholder="Enter Group Name...">
        <input @click="onSubmit($event,'Delete',content1)" type="submit" value="Delete Group">     
      </form>
      

    </div>
  
  </div>   
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Groups",
  data(){
    return{
      content: ''
    }

  },
  
  methods: {
    ...mapActions(['fetchUsers', 'changeVal']),
    
    onSubmit(e,newvar,content){
      e.preventDefault();
      console.log(content)
      this.changeVal([newvar,content]);
      this.fetchUsers();

    },
  },
  computed: mapGetters(['allUsers']),
  created(){
    this.fetchUsers();
  }
  
      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
  
</style>
