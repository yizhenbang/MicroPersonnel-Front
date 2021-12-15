<template>
  <div>
    <Header>
      <span>Login</span>
    </Header>
    <div class="maindiv">
      <form action="" for="Loginform" method="post">
        <el-form ref="Loginform" :model="personnelInfo" label-width="80px">
          <el-form-item label="账号">
            <el-input
              prefix-icon="el-icon-user"
              v-model:value="personnelInfo.personnelName"
              placeholder="手机号/用户名/邮箱"
              type="text"
            />
          </el-form-item>
          <el-form-item label="密码">
            <el-input prefix-icon="el-icon-lock" v-model:value="personnelInfo.personnelPassword" show-password
                      placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col :lg="7" :xl="1">
                <el-image>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </el-col>
              <el-col :span="17" class="kepp-right">
                <el-input v-bind:value="code" placeholder="请输入验证码" style="line-height:50px"/>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" style="width: 100%">立即登录</el-button>
          </el-form-item>
        </el-form>
      </form>

      <el-row>
        <el-col :span="24" class="kepp-right">
          <el-divider></el-divider>
        </el-col>
        <el-col :span="24" class="size kepp-right">
          <router-link :underline="false" to="/null"> 忘记密码?</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link :underline="false" to="/register">注册新用户</router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import "@/css/Login.css"
import axios from "axios"
import register_property from "../api/register_property";

export default {
  name: "Register",
  components: {Header},
  data() {
    return {
      personnelInfo: {
        personnelName: this.UserProperty.personnelName,
        personnelPassword: this.UserProperty.personnelPassword,
      },
      code: this.UserProperty.code
    }
  },
  methods: {
    onSubmit() {
      alert("表单提交");
      if (this.personnelInfo.personnelName === null || this.personnelInfo.personnelName === "") {
        alert("请填写账号");
        return false;
      }
      if (this.personnelInfo.personnelPassword === null || this.personnelInfo.personnelPassword === "") {
        alert("请填写密码");
        return false;
      }
      if (this.code === null || this.code === "") {
        alert("请填写验证码");
        return false;
      }
      this.onclick();
      if (this.personnelInfo != null) {
        console.log(this.personnelInfo)
      }
    },
    onclick() {
      /*axios.create({
        baseURL:"",//请求父路径
        url:"", //请求路径
        method:"post",
        data: {//用于发送请求参数
           User:this.User
        },
        responseType: 'json',//返回参数格式
      });*/
      axios.get("./static/data.json", {
        params: {
          //发起请求时所提交的数据
          ID: 123
        }
      }).then(function (res) {
        if (res.data.success === true) {
          if (success) {
            success(res.data)
          }
        } else {
          if (failure) {
            failure(res.data)
          } else {
            window.alert('error: ' + JSON.stringify(res.data))
          }
        }
      }).catch(function (error) {
        //异常
        console.log(error);
      })
    }
  }

}
</script>
