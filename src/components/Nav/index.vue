<template>
	<div class="nav">
		<div class="fontSize">订单管理中心</div>
		<!-- <p class="name">张三</p> -->
	</div>
</template>

<script>
export default {}
</script>

<style>
.content {
	float: left;
	height: 100%;
	width: calc(100% - 147px);
	overflow: scroll;
}
.nav {
	height: 50px;
	box-shadow: 1px 1px 1px #1b191938;
	-webkit-animation-delay: 0ms;
}
.fontSize {
	width: 150px;
	height: 50px;
	font-size: 20px;
	overflow: hidden;
	line-height: 50px;
	margin: auto;
}
/* .name {
	font-size: 10px;
	position: absolute;
	right: 50px;
	bottom: 10px;
	z-index: 10;
} */
</style>
