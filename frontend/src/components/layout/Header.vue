<template>
  <header class="header wrapper clearfix">
    <div class="center">
      <h1>gotY<img src="../../assets/covid19.png" class="logo" alt="" height="70" width="70" />Ucovid</h1>
      <small>The app that connects you to the world when Covid has you stuck in one place.</small>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
				<router-link to="/groups">Groups</router-link>|
        <router-link to="/Register">Register</router-link>|
        <router-link to="/Login">Login</router-link>|
        <router-link to="/user">User Profile</router-link>|
      <!-- <router-link to="/about">About</router-link>|
      <router-link to="/groups">Groups</router-link>|
      <router-link to="/login">Login/Register</router-link>|
      <router-link to="/user">User Profile</router-link>| -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header{
		background:  #4d4d4d;
		color: #fff;
		text-align: center;
		padding: 10px;
		margin-top:-60px;
		line-height: 0px;
	}

	.header a {
		color: #fff;
		padding-right: 5px;
		display: inline-block;
		text-decoration: none;
		
	}

	.center { display: table; margin: 0 auto;  }
	img.logo {margin: 0 -12px; vertical-align: middle;}
</style>
