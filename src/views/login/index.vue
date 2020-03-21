<template>
  <div class="login">
      <!-- 放置发片组件 -->
      <el-card class="login-card">
          <div class="title">
              <img src="../../assets/img/logo.png" alt="">
          </div>
          <!-- 登录表单 表单容器 -->
          <el-form style="margin-top:20px">
          <!--  表单域 el-foem-item (第一行)-->
          <el-form-item>
              <!-- 放置具体的组件 登录邮箱-->
            <el-input prefix-icon="el-icon-message" placeholder="Email"></el-input>
          </el-form-item>
          <el-form-item style="margin-top:-10px">
            <el-input prefix-icon="el-icon-key" placeholder="Password"></el-input>
          </el-form-item>
<!-- -------------------------------------------------------------------------- -->
          <el-form-item style="margin-top:-20px">
              <el-checkbox>记住账号</el-checkbox>
          </el-form-item>
           <el-form-item style="margin-top:-10px">
               <el-button type="primary" style="width:100%">登录</el-button>
           </el-form-item>
          <el-form-item style="margin-top:-20px; text-align: center;">
           <el-button type="text">忘记密码？</el-button>
           </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
// 加入scoped属性，样式只对当前页面生效
// 原理：为当前页面的标签生成了 data-v-随机数
.login{
    background-image: url('../../assets/img/banner01.jpg');
    background-size: 100% 100%;
    height: 578px;
    position: fixed;
    width: 1600px;
    display: flex;
    // float: left;
    .login-card {
        width: 450px;
        height: 330px;
        margin-left: 90px;
        margin-top: 80px;
        .title{
            text-align: center;
            img {
                height: 50px;
            }
        }
    }
}
</style>
