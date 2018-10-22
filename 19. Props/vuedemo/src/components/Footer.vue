<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>
<script>
export default {
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
    margin-top: 400px;
}
p{
        color: lightgreen;
        text-align: center;
}
</style>
