<template>
 <div>
     <el-form ref="form" :model1="list" label-width="80px">
  <el-form-item label="图片">
    <el-input v-model=" amg" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="菜名">
    <el-input v-model=" titlie" placeholder="请输入内容"></el-input>
  </el-form-item>
   <el-form-item label="日期">
    <el-input v-model=" date" placeholder="请输入内容"></el-input>
  </el-form-item>
   <el-form-item label="备注">
    <el-input v-model=" bet" placeholder="请输入内容"></el-input>
  </el-form-item>
   <el-form-item label="单价">
    <el-input v-model=" price" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button  @click="onSubmit">添加</el-button>
  </el-form-item>
</el-form>
 </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
    data() {
      return {
        amg: '',
        titlie: '',
        date:'',
        bet:'',
        price:''
      }
    },
    computed:{
        ...mapState({
            list:state=>state.app.list
        })
    }, 
    created() {
       
    },

    methods: {
        onSubmit() {
            const data = {
                amg: this.amg,
                titlie: this.titlie,
                date: this.date,
                bet: this.bet,
                price: this.price
            }
            this.$store.dispatch('addOrder', data)
        }
    }
}
</script>

<style>
/* .content{
  float: left;
  height: 100%;
  width: calc(100% - 200px);
} */
/* .el-pagination {
margin-top: 750px; */
/* } */
</style>