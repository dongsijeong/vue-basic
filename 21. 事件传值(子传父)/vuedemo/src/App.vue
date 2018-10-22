<template>
    <div>
        <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        <app-users :users="users"></app-users>
        <ul>
          <li v-for="user in users" :key="user.name">{{ user.name }}</li>
        </ul>
        <app-footer v-bind:title="title"></app-footer>
    </div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Users from './components/Users.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-users': Users
    },
    data () {
        return {
            users: [
                {name: 'Shiqing', speciality: 'Vue Components', show: false},
                {name: 'sijeong', speciality: 'HTML Wizardry', show: false},
                {name: 'Andy', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
            title: 'Vue Wizards'
        }
    },
    methods: {
      updateTitle: function(updatedTitle){
        this.title = updatedTitle;
      }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
