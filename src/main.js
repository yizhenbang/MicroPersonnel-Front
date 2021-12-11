// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入element ui组件库
import ElementUI from 'element-ui';
//引入element ui样式
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(router)
Vue.use(ElementUI)


new Vue({
  el: '#app',
  router:router,
  /*components: { App },
  template: '<App/>'*/
  render: h => h(App)
})
