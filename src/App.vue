<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},

	// created() {
	//   setTimeout(() => {
	//     this.$router.push('/index'),
	//     this.$router.push('/list'),
	//     this.$router.push('/add')
	//   }, 2000)
	// }
}
</script>

<style>
html,
body {
	height: 100%;
}
#app {
	height: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.main {
	overflow: hidden;
	height: 800px;
}
</style>
