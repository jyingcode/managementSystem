<template>
	<div class="silder-bar">
		<!-- <el-row class="tac">
			<el-col :span="12">
				<el-menu default-active="1" class="el-menu-vertical-demo">
					<el-menu-item index="2" @click="jump('index')">
						<span class="size-big" slot="title">首页</span>
					</el-menu-item>
					<el-menu-item index="3" @click="jump('list')">
						<span class="size-big" slot="title">列表</span>
					</el-menu-item>
					<el-menu-item index="4" @click="jump('add')">
						<span class="size-big" slot="title">订单</span>
					</el-menu-item>
				</el-menu>
			</el-col>
		</el-row> -->

		<el-row class="tac">
			<el-col :span="12">
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
				>
					<el-menu-item index="1">
						<template slot="title">
							<span>订单管理中心</span>
						</template>
					</el-menu-item>
					<el-menu-item index="2" @click="jump('index')">
						<i class="el-icon-menu"></i>
						<span slot="title">首页</span>
					</el-menu-item>
					<el-menu-item index="3" @click="jump('list')">
						<i class="el-icon-document"></i>
						<span slot="title">订单列表</span>
					</el-menu-item>
					<el-menu-item index="4" @click="jump('add')">
						<i class="el-icon-setting"></i>
						<span slot="title">添加订单</span>
					</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	methods: {
		jump(path) {
			this.$router.push(path)
		},
	},
}
</script>

<style scope>
.silder-bar {
	float: left;
	width: 147px;
	height: 100%;
	background-color: rgb(84, 92, 100);
}
.el-menu-vertical-demo {
	width: 147px;
	height: 100%;
}
/* .el-menu-item {
	font-size: 20px !important;
	border-radius: 5px;
	background-color: #d8d8d8;
	margin-top: 5px;
	position: relative;
}
.size-big {
	font-size: 8px;
	position: absolute;
	left: 5px;
	right: 5px;
}
.el-menu-vertical-demo {
	background-color: #d8d8d8;
}  */
</style>
