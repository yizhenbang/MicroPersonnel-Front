<template>
  <div>

        <div class="headerRoot">

            <div class="headerMaindiv font " >
              <slot>没有东西时我会显示</slot>
            </div>
        </div>
  </div>
</template>
<script>
import "@/css/Header.css"
import  Axios from "axios"
export default {
  name: "Header",
  data(){
    return{
    }
  }
}
</script>
