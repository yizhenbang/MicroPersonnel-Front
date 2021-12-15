// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入element ui组件库
import ElementUI from 'element-ui';
//引入element ui样式
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from "axios"
//全局的注册属性
import register_property from "./api/register_property";

Vue.prototype.UserProperty = register_property

Vue.config.productionTip = false
Vue.use(router)
Vue.use(ElementUI)


new Vue({
  el: '#app',
  router: router,
  /*components: { App },
  template: '<App/>'*/
  render: h => h(App)
})
