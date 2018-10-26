//实例化Vue对象
new Vue({
    el: '#vue-app',
    data: {
        name: 'Uzi',
        job: 'Programmer'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
