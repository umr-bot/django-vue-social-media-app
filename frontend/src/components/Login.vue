<template>
  <div class="">
    <h1>User Login</h1>
      <form @submit.prevent="LoginUser">
                  <p>
                    <label for="username">Username </label>
                    <input id="username" class="mr-sm-2" v-model="username" placeholder="username" name="username">
                  </p>
                  <p>
                    <label for="password">password </label>
                    <input id="password" class="mr-sm-2" placeholder="password" type="password" v-model="password" name="password" >
                  </p>
                  <p>
                    <input type="submit" value="Submit">  
                  </p>

        </form>
        <h3> Not Registered? Register <router-link to="/Register">Here</router-link></h3>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  components: {
    
  },
  data() {
    return {
   username:'',
   password:'',
    }
  },
  methods: {
    LoginUser() {
      axios.post('http://127.0.0.1:8000/api-login/login/', {
        username: this.username,
        password: this.password
      })
       .then(resp => console.log(resp))
        
/*       //this.token = resp.data.token;
     // console.log(this.token)
      //localStorage.setItem('user-token', resp.data.token)
      //})
      .catch(err => {
        localStorage.removeItem('user-token')
      }),
      this.$router.push('/Posts')
  */
    }
  }
}

</script>
