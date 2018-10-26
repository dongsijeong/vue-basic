<template>
    <div id="app">
        <ul>
            <!-- <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/helloworld">HelloWorld</a>
            </li> -->
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="helloworld">HelloWorld</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
    data () {
        return {
        }
    },
    watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  },
    methods: {
    }
}
</script>

<style>
</style>
