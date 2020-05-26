<template>
	<div class="nav">
		<div class="fontSize">订单管理中心</div>
		<p class="name">张三</p>
	</div>
</template>

<script>
export default {}
</script>

<style>
.nav {
	width: 800px;
	height: 50px;
	position: relative;
	border: 2px solid gray;
}
.fontSize {
	width: 150px;
	height: 50px;
	font-size: 20px;
	overflow: hidden;
	line-height: 50px;
}
.name {
	font-size: 10px;
	position: absolute;
	right: 50px;
	bottom: 10px;
	z-index: 10;
}
</style>
