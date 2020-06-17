<template>
	<div class="dashbaord">
		<Siderbar />
		<div class="content">
			<Nav />
			<router-view />
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
.dashbaord {
	height: 100%;
}
</style>
