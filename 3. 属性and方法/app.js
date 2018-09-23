//实例化Vue对象
new Vue({
    el: '#vue-app',
    data: {
        name: 'Shiqing Dong',
        job: 'Programmer'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
