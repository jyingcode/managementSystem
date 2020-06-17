<template>
  <div class="list-center">
    <el-form class="list-input"
             ref="form"
             :model="formData"
             :rules="rules"
             label-width="80px">
      <el-form-item label="菜名"
                    prop="menu">
        <el-input v-model="formData.menu"
                  placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="备注"
                    prop="comment">
        <el-input v-model="formData.comment"
                  placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="单价"
                    prop="price">
        <el-input v-model="formData.price"
                  placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="add-folder"
                   @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
    <el-upload class="avatar-uploader"
               action="http://localhost:3000/upload"
               :show-file-list="false"
               :on-success="handleAvatarSuccess"
               :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl"
           :src="imageUrl"
           class="avatar" />
      <i v-else
         class="el-icon-plus avatar-uploader-icon avatar"></i>
    </el-upload>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { submit } from '../../Api'
const validZN = (rule, value, callback) => {
  const reg = /[a-zA-Z0-9]/g
  if (reg.test(value)) {
    callback(new Error('请输入正确中文'))
  } else callback()
}

const validPrice = (rule, value, callback) => {
  const reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/
  const reg1 = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
  if (!reg.test(value) || !reg1.test(value) || value > 99999.99) {
    callback(new Error('请输入正确价格'))
  } else callback()
}

export default {
  data() {
    return {
      formData: {
        img: '',
        menu: '',
        comment: '',
        price: ''
      },
      rules: {
        menu: [{ validator: validZN, trigger: 'blur' }],
        comment: [{ validator: validZN, trigger: 'blur' }],
        price: [{ validator: validPrice, trigger: 'blur' }]
      },
      imageUrl: ''
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
      this.$refs.form.validate(valid => {
        console.log(valid)
        if (valid) {
          submit(data).then(res => {
            if (res.code === 0) {
              this.$message({
                type: 'success',
                message: `添加成功`
              })
            } else {
              this.$message({
                type: 'error',
                message: res.msg
              })
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: 'vxbvxgdc'
          })
          return false
        }
      })
    },
    handleAvatarSuccess(res, file) {
      this.formData.img = res.url
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style>
.list-input {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}

.list-input .add-folder {
  position: absolute;
  left: 50%;
}
.list-center {
  margin-top: 50px;
}
.avatar-uploader {
  position: relative;
}
.avatar {
  position: absolute;
  left: 50%;
}
</style>
