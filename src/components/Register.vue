<template>
  <div>
   <Header/>
    <div class="maindiv">

    <form action="" method="post" >
      <el-form ref="form" :model="User" label-width="80px">
        <el-form-item label="账号">
          <el-input
            ref="username"
            prefix-icon="el-icon-user"
            v-model="User.userName"
            placeholder="手机号/用户名/邮箱"
            type="text"
            tabindex="1"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input  prefix-icon="el-icon-lock" v-model="User.userPassword" show-password placeholder="密码" ></el-input>
        </el-form-item>

        <el-form-item>
        <el-row >
          <el-col  :lg="7" :xl="1">
              <el-image>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
          </el-col>
          <el-col :span="17" class="kepp-right"><el-input v-model="User.code" placeholder="请输入验证码" style="line-height:50px"/></el-col>
         </el-row>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width: 100%">立即登录</el-button>
        </el-form-item>
      </el-form>
      <el-row >
        <el-col :span="24" class="kepp-right"> <el-divider></el-divider></el-col>
        <el-col :span="24" class="size kepp-right" >  <el-link :underline="false" href="#" >忘记密码?</el-link> <el-divider direction="vertical"></el-divider><el-link :underline="false" href="#" >注册新用户</el-link></el-col>
      </el-row>


    </form>
  </div>
    <div>



    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Register",
  components: {Header},
  data(){
    return {
      User: {
        userName:"",
        userPassword:"",
        code:""
      }
    }
  },
  methods:{
    onSubmit(){
      alert("表单提交");
      if(this.User.userName === null || this.User.userName === "") {alert("请填写账号"); return false;}
      if(this.User.userPassword === null || this.User.userPassword === "") {alert("请填写密码"); return false;}
      if(this.User.code === null || this.User.code === "") {alert("请填写验证码"); return false;}
    },
    error(e){
      alert("验证码加载失败"+e);
    }
  }
}
</script>

<style scoped>
body{text-align:center}
div{
    border: 0px gray solid;
  }
  a{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .kepp-right{
    text-align: right;
  }
  .keep-left{
    text-align: left;
  }
  .center{
    text-align: center;
  }

  .size{
    font-size: 10px;
  }

.maindiv{
    width: 440px;
    height: 300px;
    margin: 20px auto;
    padding:70px;
    transition: all 0.65s;
    border-radius: 10px;
  -webkit-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
  -moz-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
  box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);

   }
.maindiv:hover {
  box-shadow: 2px 2px 10px #909090;
  }


</style>
