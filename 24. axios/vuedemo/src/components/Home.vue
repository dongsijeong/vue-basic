<!-- 1模板: html结构 -->
<template>
  <div id="home">
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        <app-users :users="users"></app-users>
        <ul>
          <li v-for="user in users" :key="user.name">{{ user.name }}</li>
        </ul>
        <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 2行为:处理逻辑 -->
<script>

// 局部注册组件
import axios from 'axios'
import Users from './Users'
import Header from './Header'
import Footer from './Footer'
import userService from '../mixin/userService.js'

export default {
  name: 'home',
  mixins: [userService],
  components:{
    "app-users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  data(){
    return {
      users: [
        // {name: 'Shiqing', speciality: 'Vue Components', show: false},
        // {name: 'sijeong', speciality: 'HTML Wizardry', show: false},
        // {name: 'Andy', speciality: 'Click Events', show: false},
        // {name: 'Tango', speciality: 'Conditionals', show: false},
        // {name: 'Kami', speciality: 'Webpack', show: false},
        // {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
      title: 'Vue Wizards'
    }
  },
  methods:{
    updateTitle: function(updatedTitle){
        this.title = updatedTitle;
      }
  },
  mounted(){
    axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
      //console.log(response);
      this.users = response.data;
    });
    //this.getUsers();
    // this.getUsers2().then(response => {
    //   this.users = this.mxn_usersData;
    // });
  }
}
</script>

<!-- 3样式:解决样式 -->
<style scoped>
h1{
  color:purple;
}
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>









