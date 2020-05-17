<template>
	<div>
		<form @submit="addPost">
			<input type="text" v-model="username" name="username" placeholder="Enter Username">
			<input type="text" v-model="content" name="content" placeholder="Insert Post">
			<input type="text" v-model="categories" name="categories" placeholder="Categories?">
			<input type="submit" value="Post" class="btn">
		</form>
		
	</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
	name: "AddPost",
	data() {
		return {
			username: '',
			content: '',
			categories: '',
			date_posted: '',
		}
	},
	methods: {
		addPost(e) {
			e.preventDefault();
			const newPost = {
				id: uuidv4(), //when using DB--> that DB may already create an id so no need to send it.
				date_posted: '20 May 2020',//new Date().format('m-d-Y'),
				username: this.username,
				content: this.content,
				categories: this.categories,
				saved: false
			}
			//Send up to parent
			//$emit() is a trigger named event which in turn causes function objects (also called listeners) to be called.
			this.$emit('add-post', newPost);
			//clear
			this.username='';
			this.content='';
			this.categories='';
		}
	}
}
</script>

<style scoped>
	form{
		display: flex;
	}

	input[type="text"]{
		flex: 10;
		padding: 5px;
	}

	input[type="submit"]{
		flex: 2;
	}
</style>