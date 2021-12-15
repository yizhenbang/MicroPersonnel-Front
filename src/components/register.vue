<template>
  <div>
    <Header >
      <span>Register</span>
    </Header>
      <div class="maindiv">
        <form action="" method="post" >
          <el-form ref="form"   label-width="80px">
            <el-form-item label="账号">
                  <el-input
                ref="username"
                prefix-icon="el-icon-user"
                v-model:value="personnelInfo.personnelName"
                placeholder="手机号/用户名/邮箱"
                type="text"
              />
            </el-form-item>
            <el-form-item label="密码">
              <el-input  prefix-icon="el-icon-lock" v-model:value="personnelInfo.personnelPassword" show-password placeholder="密码" ></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input   prefix-icon="el-icon-lock" v-model:value="personnelInfo.Confirm_password" show-password placeholder="确认密码" ></el-input>
            </el-form-item>

<!--            折叠信息非必填-->
            <el-form-item label="其他信息">
                <register_info/>
            </el-form-item>

<!--            验证码 ↓-->
            <el-form-item>
               <el-row >
               <el-col  :lg="7" :xl="1">
                  <el-image>
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                </el-col>
                <el-col :span="17" class="kepp-right"><el-input v-model:value="code" placeholder="请输入验证码" style="line-height:50px"/></el-col>
              </el-row>
            </el-form-item>
<!--            注册按钮 ↓-->
            <el-form-item>
              <el-button type="primary" @click="onSubmit" style="width: 100%">立即注册</el-button>
            </el-form-item>
          </el-form>
        </form>
        <el-row >
          <el-col :span="24" class="kepp-right"> <el-divider></el-divider></el-col>
          <el-col :span="24" class="size kepp-right" >
            <el-divider direction="vertical"></el-divider>
            <router-link :underline="false" to="/" >已有账号?</router-link>
          </el-col>
        </el-row>
  </div>
  </div>
</template>

<script>
import Header from "./Header";
import "@/css/Login.css"
import Register_info from "./register_info";

export default {
  name: "Register",
  components: {Register_info, Header},
  data(){
    return {
      personnelInfo: {
        personnelName:this.UserProperty.personnelName,
        personnelPassword:this.UserProperty.personnelPassword,
        personnelAge : this.UserProperty.personnelAge,
        personnelGender:this.UserProperty.personnelGender,
        height:this.UserProperty.height,
        weight:this.UserProperty.weight,
        address:this.UserProperty.address,
        tel:this.UserProperty.tel,
        email:this.UserProperty.email,
        birthday:this.UserProperty.birthday,
        portrait: this.UserProperty.portrait,
        Confirm_password: "Confirm_password",
        Id_number:this.UserProperty.Id_number
      },
      code:this.UserProperty.code
    }
  },
  methods:{
    onSubmit(){
      alert("表单提交");
      if(this.personnelInfo.personnelName === null || this.personnelInfo.personnelName === "") {alert("请填写账号"); return false;}
      if(this.personnelInfo.personnelPassword === null || this.personnelInfo.personnelPassword === "") {alert("请填写密码"); return false;}
      if(this.code === null || this.code === "") {alert("请填写验证码"); return false;}
    },
    error(e){
      alert("验证码加载失败"+e);
    }
  }
}
</script>


