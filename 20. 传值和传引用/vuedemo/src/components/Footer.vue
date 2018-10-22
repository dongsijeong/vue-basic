<template>
    <footer>
        <p>{{ copyright }}  {{ title }}</p>
    </footer>
</template>
<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
        return{
            copyright: 'Copyright 2018 Vue Users'
        }
    }
}
</script>
<style scoped>
footer{
    background: #222;
    padding: 6px;
    margin-top: 200px;
}
p{
        color: lightgreen;
        text-align: center;
}
</style>
