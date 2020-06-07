<template>
  <div id="app">
    <Groups />
  </div>
</template>

<script>

import Groups from './components/Groups.vue'
export default {
  name: 'App',
  components: {
    Groups
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
