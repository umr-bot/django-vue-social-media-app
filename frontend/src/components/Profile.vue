<template>
    <div class="content-section" v-if="isLoaded">
      <div class="media">
        <img class="rounded-circle account-img" src=imageUrl>
        <div class="media-body">
          <h2 class="account-heading"></h2>
          <p class="text-secondary"></p>
        </div>
      </div>
      <form >
          <fieldset class="form-group">
              <legend>Profile Info</legend>

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
      isLoaded: false,
      username
          
  },
  methods:{
    getUserProfile(){
            axios.get('http://127.0.0.1:8000/api/User/',
                      {
                        username: this.username,
                      })
                      .then(resp => {   
                        this.username = resp.username;    
                        this.id = resp.id;
                        console.log(resp)
                       })
            axios.get('http://127.0.0.1:8000/api/Profile/',
                      {
                        id: this.id,
                      })
                      .then(resp => {   
                        this.isLoaded = true;    
                      this.imageUrl = resp.image;
                      console.log(resp)
                      })
    }
      

  },
  mounted() {
    this.getUserProfile();

  },
    
}
</script>