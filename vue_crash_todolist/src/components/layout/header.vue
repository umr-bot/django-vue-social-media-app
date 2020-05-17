<template>
	<div id="head-container">
		<header class="header wrapper clearfix">
			<div class="center">
				<h1 id="title">gotY<img src="../../assets/covid19.png" class="logo" alt="" height="70" width="70" />Ucovid</h1>
			</div>
			<small>The app that connects you to the world when Covid has you stuck in one place.</small>
		</header>
	</div>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style scoped>
	.header{
		background: #333;
		color: #fff;
		text-align: center;
		padding: 10px;
	}

	.header h1 {
		color: #fff;
		padding-right: 5px;
		display: inline-block;
	}

	.center { display: table; margin: 0 auto; }
	img.logo {margin: 0 -12px; vertical-align: middle;}

	.title {
		padding: 20px;
		display: inline;
		font-size: 4.5em;
		border-top: 4px solid #5dc1c4;
		border-bottom: 4px solid #5dc1c4; 
	}


</style>