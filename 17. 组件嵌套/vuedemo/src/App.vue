<template>
  <div id="app">
    <div class="app">
      <h1>{{ msg }}</h1>
    </div>
    <users/>
  </div>
</template>

<script>
import Users from './components/Users'; //局部注册组件

export default {
  name: 'App',
  data() {
    return {
      msg: '这是我的第一个VUE Cli Demo'
    }
  },
  //component的名字不要和html的dom 标签冲突
  components: {
    "users": Users
  }
}
</script>

<style scoped>
  h1 {
    color:green;
  }
</style>
