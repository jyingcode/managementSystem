<template>
  <div>
    <el-form ref="form"
             :model="formData"
             :rules="rules"
             label-width="80px">
      <el-form-item label="图片"
                    prop="img">
        <el-input v-model="formData.img"
                  placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="菜名"
                    prop="menu">
        <el-input v-model=" formData.menu"
                  placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="日期"
                    prop="date">
        <el-input v-model=" formData.date"
                  placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="备注"
                    prop="comment">
        <el-input v-model=" formData.comment"
                  placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="单价"
                    prop="price">
        <el-input v-model=" formData.price"
                  placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const validImg = (rule, value, callback) => {
  const reg = /https/
  if (!reg.test(value)) {
    callback(new Error('请输入正确的URL'))
  }
}
const validZN = (rule, value, callback) => {
  const reg = /[a-zA-Z0-9]/g
  if (reg.test(value)) {
    callback(new Error('请输入正确中文'))
  }
}
const validDate = (rule, value, callback) => {
  const reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
  const reg1 = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/
  const reg2 = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/
  if (!reg.test(value) || !reg1.test(value) || !reg2.test(value)) {
    callback(new Error('请输入正确日期'))
  }
}
const validPrice = (rule, value, callback) => {
  const reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/
  const reg1 = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
  if (!reg.test(value) || !reg1.test(value) || value > 99999.99) {
    callback(new Error('请输入正确价格'))
  }
}
export default {
  data() {
    return {
      formData: {
        img: '',
        menu: '',
        date: '',
        comment: '',
        price: ''
      },
      rules: {
        img: [{ validator: validImg, trigger: 'blur' }],
        menu: [{ validator: validZN, trigger: 'blur' }],
        date: [{ validator: validDate, trigger: 'blur' }],
        comment: [{ validator: validZN, trigger: 'blur' }],
        price: [{ validator: validPrice, trigger: 'blur' }]
      }
    }
  },

  computed: {
    ...mapState({
      list: state => state.app.list
    })
  },
  created() {},

  methods: {
    onSubmit() {
      const data = this.formData
      this.$store.dispatch('addOrder', data).then(res => {
        if (res.code === 0) {
          this.$message({
            type: 'success',
            message: `添加成功`
          })
        }
      })
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