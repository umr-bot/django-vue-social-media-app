<template>
    <div class="content-section">
      <div class="media">
        <img class="rounded-circle account-img" src="">
        <div class="media-body">
          <h2 class="account-heading">{{ user.username }}</h2>
          <p class="text-secondary">{{ user.email }}</p>
        </div>
      </div>
      <form method="POST" enctype="multipart/form-data">
          {% csrf_token %}
          <fieldset class="form-group">
              <legend class="border-bottom mb-4">Profile Info</legend>
              {{ u_form|crispy }}
              {{ p_form|crispy }}
          </fieldset>
          <div class="form-group">
              <button class="btn btn-outline-info" type="submit">Update</button>
          </div>
      </form>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    components: {

  },
  data() {
    return{
      
    }
  },
  methods:{
      

  },
  mounted() {
      axios.get('http://127.0.0.1:8000/api/Profile/',
      {
        user_token: this.token
      })
      .then(resp => {
        
      this.username = resp.username;
      this.image = resp.
      console.log(this.token)
      localStorage.setItem('user-token', resp.data.token)
      })


  },
    
}
</script>