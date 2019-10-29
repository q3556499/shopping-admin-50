<template>
  <div class="login">
    <!-- :model="form" 传入一个对象，对象的属性用于给表单元素双向数据绑定
          label-width 设置表单label的宽度
          el-form-item 表单项-->
    <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
      <img class="logo" src="../snow.jpg" alt="">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" :plain="true" class="loginBtn" type="primary">登陆</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['change', 'blur'] },
          { min: 3, max: 12, message: '用户名长度必须是3-12位', trigger: ['change', 'blur'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['change', 'blur'] },
          { min: 3, max: 12, message: '密码长度必须是3-12位', trigger: ['change', 'blur'] }
        ]
      }
    }
  },
  methods: {
    reset () {
      // 希望获取到form表单组件, 调用组件的重置方法 (利用 ref 和 $refs)
      this.$refs.form.resetFields()
    },
    login () {
      // console.log('submit!')
      this.$refs.form.validate(isValid => {
        if (!isValid) return
        // console.log('发送请求')
        axios.post('http://localhost:8888/api/private/v1/login', this.form).then(res => {
          console.log(res.data)
          const { meta } = res.data
          if (meta.status === 200) {
            // console.log(meta.msg)
            this.$message({
              message: meta.msg,
              type: 'success',
              duration: 1000
            })
            // console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            this.$router.push('/index')
          } else {
            // console.log(meta.msg)
            this.$message({
              message: meta.msg,
              type: 'error',
              duration: 1000
            })
          }
        }
        )
      })
    }
  }
}
</script>

<style>
</style>
