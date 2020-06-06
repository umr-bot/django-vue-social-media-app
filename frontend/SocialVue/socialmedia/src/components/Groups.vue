<template>
  <div class="hello">
    <div v-bind:key="User.id" v-for="User in User">
      <h3> {{User.grouplist[0]}} </h3>
      <button @click="$emit('add-emit',User.grouplist)" class="add">Add Member</button>
      <button @click="$emit('remove-emit',User.grouplist)" class="remove">Remove Member</button>
      <button @click="$emit('change-emit',User.id)" class="change">Change Member Status</button>
      <h3> {{User.grouplist[1]}} </h3>
      <button @click="$emit('add-emit',User.grouplist)" class="add">Add Member</button>
      <button @click="$emit('remove-emit',User.grouplist)" class="remove">Remove Member</button>
      <button @click="$emit('change-emit',User.grouplist)" class="change">Change Member Status</button>
      <h3> {{User.grouplist[2]}} </h3>
      <button @click="$emit('add-emit',User.grouplist)" class="add">Add Member</button>
      <button @click="$emit('remove-emit',User.grouplist)" class="remove">Remove Member</button>
      <button @click="$emit('change-emit',User.grouplist)" class="change">Change Member Status</button>
    </div>
  
  </div>   
</template>

<script>
export default {
  name: "Groups",
  props: {
    User: {
      type: Array,
      default(){
        return ''
      }
    }
  }
      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
  
</style>
