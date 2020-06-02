<template>
	<div>
		<Nav />
		<div class="main">
			<Siderbar />
			<div class="content">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import Nav from '../Nav'
import Siderbar from '../Siderbar'
export default {
	name: 'App',
	components: {
		Nav,
		Siderbar,
	},
}
</script>

<style>
.main {
	overflow: hidden;
	height: 800px;
}
</style>
