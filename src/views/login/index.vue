<template>
  <div class="login">
      <!-- 放置发片组件 -->
      <el-card class="login-card">
          <div class="title">
              <img src="../../assets/img/logo.png" alt="">
          </div>
          <!-- 登录表单 表单容器  el-form 需要绑定model属性 rules属性绑定验证规则对象-->
          <el-form ref="myForm" style="margin-top:10px" :model="loginForm" :rules="loginRules">
          <!--  表单域 el-foem-item (第一行) =>校验=>prop=>要校验的字段名-->
          <el-form-item prop="mobile">
              <!-- 放置具体的组件 登录邮箱 v-model双向绑定数据对象-->
            <el-input v-model="loginForm.mobile" clearable prefix-icon="el-icon-message" placeholder="Email"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input  v-model="loginForm.code" show-password clearable prefix-icon="el-icon-key" placeholder="Password"></el-input>
          </el-form-item>
<!-- -------------------------------------------------------------------------- -->
          <el-form-item style="margin-top:-10px">
              <el-checkbox>记住账号</el-checkbox>
          </el-form-item>
           <el-form-item style="margin-top:-10px">
            <!-- 注册一个点击事件 -->
               <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
           </el-form-item>
          <el-form-item style="margin-top:-15px; text-align: center;">
           <el-button type="text">忘记密码？</el-button>
           </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  // 在data中定义表单数据对象
  data () {
    return {
      // 定义一个表单数据对象
      loginForm: {
        mobile: '', // 邮箱号
        code: '' // 验证
      },
      loginRules: {
        // 验证登录表单的规则  kye(字段名) :value（数据）
        // required为true ->是必填
        mobile: [{ required: true, message: '请输入您的邮箱' }, {
          pattern: /^1[3456789]\d{9}$/, message: '邮箱格式不正确'
        }],
        code: [{ required: true, message: '请输入您的密码' }, {
          pattern: /^\d{6}$/,
          message: '验证码为6位数字'
        }]
      }
    }
  },
  methods: {
    // 提交我的登录表单
    submitLogin () {
    // el-form实例
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          // 认为前端登录校验成功
        // 地址参数 查询参数 params对象
        // body参数 data对象
          this.$axios({
            url: '/authorizations', // 请求地址
            method: 'post',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token) // 前端缓存令牌
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              message: '您输入的账户或密码不匹配 ！！！',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
// 加入scoped属性，样式只对当前页面生效
// 原理：为当前页面的标签生成了 data-v-随机数
.login{
    background-image: url('../../assets/img/timg2.gif');
    background-size: cover; // 自适应背景图片
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card {
        width: 450px;
        height: 330px;
        .title{
            margin-left: 50px;
            img {
                height: 50px;
            }
        }
    }
}
</style>
