<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
        <el-form-item label="密码" prop="password">
        <el-input type='password' v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-img></el-img>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userName: '',
        password: '',
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  },
  rulers: {
    name: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
    ]
  }
}
</script>

<style>
</style>
