<template>
	<div class="container" v-loading.fullscreen.lock="loading">
		<ul class="list-box">
			<li class="list-item" v-for="(item, index) in list" :key="index">
				<div class="pic">
					<img :src="item.img" style="width:100%;height:100%" />
				</div>
				<div class="desc">
					<h3>{{ item.menu }}</h3>
					<p class="date">
						<span>日期</span>
						<span>{{ item.date }}</span>
					</p>
					<p class="bet">
						<span>备注：</span>
						<span>{{ item.comment }}</span>
					</p>
				</div>
				<div class="price">
					价格：<span>{{ item.price }}</span>
				</div>
				<div class="btn">
					<button class="add" @click="onDelete(item)">删除</button>
					<el-button class="change-btn" @click="changeData(item)"
						>修改</el-button
					>
				</div>
			</li>
		</ul>

		<div class="block">
			<span class="demonstration"></span>
			<el-pagination
				@current-change="handleCurrent"
				:page-size="pageSize"
				layout="total, prev, pager, next"
				:total="total"
			>
			</el-pagination>
		</div>
		<el-dialog :visible.sync="dialogTableVisible">
			<el-form ref="form" :model="formData" label-width="80px">
				<el-form-item label="图片" prop="img">
					<el-input
						v-model="formData.img"
						placeholder="请输入内容"
					></el-input>
				</el-form-item>
				<el-form-item label="菜名" prop="menu">
					<el-input
						v-model="formData.menu"
						disabled
						placeholder="请输入内容"
					></el-input>
				</el-form-item>
				<el-form-item label="备注" prop="comment">
					<el-input
						v-model="formData.comment"
						placeholder="请输入内容"
					></el-input>
				</el-form-item>
				<el-form-item label="单价" prop="price">
					<el-input
						v-model="formData.price"
						placeholder="请输入内容"
					></el-input>
				</el-form-item>
				<button @click="submitData()">确定</button>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { onDelete, getList, modifyData } from '../../Api'
export default {
	data() {
		return {
			formData: {
				img: 'xxx',
				menu: '',
				comment: '',
				price: '',
			},
			total: 10,
			pageSize: 5,
			dialogTableVisible: false,
		}
	},

	computed: {
		...mapState({
			list: (state) => state.app.list,
			loading: (state) => state.app.loading,
		}),
	},
	created() {
		this.$store.commit('SET_LOADING', true)
		this.getOrderList()
	},
	methods: {
		onDelete(item) {
			onDelete(item).then(() => {
				this.$store.dispatch('getList')
			})
		},
		changeData(item) {
			console.log(item)
			this.dialogTableVisible = true
			this.formData = JSON.parse(JSON.stringify(item))
		},
		submitData() {
			const data = this.formData
			console.log(data)
			modifyData(data).then(() => {
				getList().then(({ list }) => {
					this.$store.commit('SET_LIST', list)
					this.dialogTableVisible = false
				})
			})
		},
		handleCurrent(current) {
			this.getOrderList(current)
		},
		async getOrderList(pageNum = 1) {
			const { data } = await getList({
				pageNum,
				pageSize: this.pageSize,
			})
			const list = data.list
			this.total = data.total
			this.$store.commit('SET_LIST', list)
			this.$store.commit('SET_LOADING', false)
		},
	},
}
</script>

<style scope lang="scss">
.container {
	padding: 10px 20px;
	min-width: 800px;
}
.list-box {
	/* float: left; */
}
.list-item {
	overflow: hidden;
	position: relative;
	border-bottom: 1px solid #ccc;
	padding-bottom: 10px;
	margin-bottom: 20px;
	min-width: 710px;
}
.list-item div {
	float: left;
}
.pic {
	width: 100px;
	height: 100px;
	border: 1px solid;
	margin-right: 20px;
}
.desc h3 {
	font-size: 20px;
	font-weight: bold;
	text-align: left;
}
.desc {
	.date {
		font-size: 14px;
	}
}
.bet {
	position: absolute;
	bottom: 10px;
	font-size: 12px;
}
.price,
.btn {
	height: 100px;
	line-height: 100px;
	margin-left: 100px;
}
.price {
	span {
		color: #f00;
	}
}

.btn {
	padding-top: 32px;
	.add {
		width: 80px;
		height: 30px;
		line-height: 30px;
		border: none;
		border: 1px solid gray;
		border-radius: 4px;
		float: left;
	}
	.change-btn {
		width: 80px;
		height: 30px;
		float: left;
		border: 1px solid gray;
	}
}

.el-pagination {
	margin-top: 20px;
}
</style>
