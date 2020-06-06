<template>
  <div id="app">
    <h1> MY GROUPS </h1>
    <Groups :User="User" v-on:add-emit="add" v-on:remove-emit="remove" v-on:change-emit="change"/>
    <h1><button class="Make">Create Group</button></h1>
    <h1>{{User[0].grouplist[0]}}</h1>
  </div>
</template>

<script>

import Groups from './components/Groups.vue'
export default {
  name: 'App',
  components: {
    Groups
  },

  data() {
    return{
      User: [
        {
          id:1,
          name:'Tharun',
          grouplist: ['lel','wow','lawl']

        }
      ]

      

      
    }
    
      
    
    
  },
  methods: {
    add(grouplist) {
      grouplist[0]='lol'
      this.grouplist=grouplist
      
        
    },
    remove(grouplist) {
      grouplist[0]='lelelelelelel'
      
      
        
    },
    change(id) {
     id[0]=5
      
      
        
    }


  }

}

</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding:0;
 }
 body {
   font-family: Arial, Helvetica, sans-serif;
   line-height: 1.4;
 }
</style>
