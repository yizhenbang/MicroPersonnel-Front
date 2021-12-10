<template>
  <div class="headerRoot">
    <div class="headerMaindiv font " >
      {{msg}}
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
  }
}
</script>

<style scoped>


</style>
