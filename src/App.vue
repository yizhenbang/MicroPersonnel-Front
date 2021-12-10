<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Register from "./components/Login";
export default {
  name: 'App',
  components: {Register}
}
</script>

<style>
</style>
