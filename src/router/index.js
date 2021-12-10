import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from "../components/Register"
import Header from "../components/Header"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'Header',
      component: Header
    }

  ]
})
