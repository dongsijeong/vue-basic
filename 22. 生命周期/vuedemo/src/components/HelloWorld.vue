<template>
    <div id="container">
        <p>{{test}}</p>
        <button @click="updateData">updateData</button>
    </div>
</template>

<script>

export default {
    data () {
        return {
            test: 'hello world'
        }
    },
    watch: {
        test: function() {
            alert("test changed");
        }
    },
    beforeCreate: function(){
        console.log(this);
        this.showData('创建vue实例前',this);
    },
    created: function(){
        this.showData('创建vue实例后',this);
    },
    beforeMount:function(){
        this.showData('挂载到dom前',this);
    },
    mounted: function(){
        this.showData('挂载到dom后',this);
    },
    beforeUpdate:function(){
        this.showData('数据变化更新前',this);
    },
    updated:function(){
        this.showData('数据变化更新后',this);
    },
    beforeDestroy:function(){
        this.showData('vue实例销毁前',this);
    },
    destroyed:function(){
        this.showData('vue实例销毁后',this);
    },
    methods: {
      showData(process,obj){
            console.log(process);
            console.log('data 数据：' + obj.test)
            console.log('挂载的对象：')
            console.log(obj.$el)
            this.realDom();
            console.log('------------------')
            console.log('------------------')
        },
        realDom(){
            console.log('真实dom结构：' + document.getElementById('container').innerHTML);
        },
        updateData() {
            this.test = 'Hello vue';
        },
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
