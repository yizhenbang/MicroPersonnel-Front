import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from "../components/Header"
import Login from "../components/Login"
import Register from "../components/Register"


Vue.use(Router)

//创建路由器
export default new Router({
  routes: [
    {path: '/hello',name: 'HelloWorld', component: HelloWorld},
    {path: '/',name:"login",component: Login},
    {path: '/register',component: Register},
    {path: '/header',component: Header}
  ]
})
