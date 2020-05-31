<template>
  <div>
      Sort By:
      <select @change="filterPosts($event)">
          <optgroup label="Time">
              <option value="timeAsc">Time - Ascending Order</option>
              <option value="timeDesc">Time - Descending Order</option>
          </optgroup>
          <option value="location">Location</option>
          <option value="category">Category</option>
          <option value="group_user">Group/User</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "FilterPosts",
    methods: mapActions(["filterPosts"])
};
</script>

<style scoped>
select {
    margin-top: 20px;
    padding: 6px;
    border: #2c3e50 1px solid;
}
</style>