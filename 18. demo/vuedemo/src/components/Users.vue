<template>
    <div id="users">
        <ul>
            <li v-for="user in users" v-on:click="user.show = !user.show" :key="user.name">
                <h2>{{ user.name }}</h2>
                <h3 v-show="user.show">{{ user.speciality }}</h3>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            users: [
                {name: 'Shiqing', speciality: 'Vue Components', show: false},
                {name: 'sijeong', speciality: 'HTML Wizardry', show: false},
                {name: 'Andy', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ]
        }
    }
}
</script>
<style scoped>
#users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
