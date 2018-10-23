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
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
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
    this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data) => {
          // console.log(data);
          this.users = data.body;
        })
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









