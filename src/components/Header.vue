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
  }
  ,methods:{
    change(){

      const path = window.location.href;
      const startNumber = path.lastIndexOf("/");
      const str = path.substring(startNumber+1,path.length);
      console.log(str);
      //根据浏览器路径判断访问页面,进行视图格更改
      this.msg = str;

      console.log("访问"+this.msg+"页面")
    }
  }
}
</script>

<style scoped>


</style>
