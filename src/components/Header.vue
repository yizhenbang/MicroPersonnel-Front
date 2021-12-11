<template>
  <div class="headerRoot">
      <div class="headerMaindiv font " >
        <span v-show="msg != ''">{{msg}}</span>
      </div>

  </div>
</template>

<script>
import "@/css/Header.css"

export default {

  name: "Header",
  data(){
    return{
      msg:"Login"
    }
  },mounted(){
    this.change()
  },
  methods:{
    change(){
      const path = window.location.href;
      const startNumber = path.lastIndexOf("/");
      const str = path.substring(startNumber+1,path.length);
      //根据浏览器路径判断访问页面,进行视图更改
      this.msg = str;
      if(this.msg == "" || this.msg == null){this.msg="login";}
      console.log("访问"+this.msg+"组件")
    }
  }
}
</script>

<style scoped>


</style>
