// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import axios from 'axios'
import App from './App'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
// import Users from './components/Users'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(axios);

//配置路由
const router = new VueRouter({
  routes: [
    {
      path: "/", component: Home
    },
    {
      path: "/helloworld", component: HelloWorld
    }
  ],
  mode: "history"
})

//全局注册组件
// Vue.component("users", Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
