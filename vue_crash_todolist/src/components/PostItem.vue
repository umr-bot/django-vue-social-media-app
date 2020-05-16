<template>
	<div class="post-item" v-bind:class="{'is-saved':post.saved}">
		<small><b>{{post.username}}</b></small><br>
		<large>{{post.content}}</large><br>
		<small>{{post.date_posted}}</small><br><br>
		<button @click="markSaved(post.id)" class="save" id="save_post_Button">{{ value='save' }}</button>
	</div>
</template>

<script>
export default {
	name: "PostItem",
	props: ["post"],
	methods: {
		markSaved() {
			this.post.saved = !this.post.saved;
			var elem= document.getElementById("save_post_Button");
			if (elem.value=="save") elem.value="unsave";
			else elem.value="save";
		}

	}

}
</script>

<style scoped>
	.post-item { 
		background: #f4f4f4;
		padding: 10px;
		border-bottom: 3px #ccc dotted;
		border-top: 3px #ccc dotted;
	}

	.save {
		background: #006622;
		color: #fff;
		border: none;
		padding: 5px 5px;
		border-radius: 50%;
		cursor: pointer;
		float: right;
	}
	.is-saved {
		border-bottom: 3px #006622 dotted;
		border-top: 3px #006622 dotted;
	}
</style>