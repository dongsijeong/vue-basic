new Vue({
    el: '#vue-app',
    data: {
        name: 'Uzi',
        job: 'Programmer',
        website: 'https://www.baidu.com/',
        websiteTag: '<a href="https://www.baidu.com/">Website</a>',
        colorCheck: false
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
