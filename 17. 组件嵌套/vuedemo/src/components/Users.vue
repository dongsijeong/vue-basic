<template>
  <div class="users">
    <h1>Hello, Users Component!</h1>
    <ul>
      <li v-for="user in users" :key="user">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      users: ["shiqing", "sijeong", "Andy"]
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>