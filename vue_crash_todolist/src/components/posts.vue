<template>
	<div>
		<h1>Posts</h1>
		<div v-bind:key="post.id" v-for="post in posts">
			<PostItem v-bind:post="post" v-on:markSaved="saved_post(post.id)"/>
		</div>
	</div>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
	name: "Posts",
	components: {
		PostItem
	},
	props: ["posts"]

}
</script>

<style scoped>
	
</style>