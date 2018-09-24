new Vue({
    el: '#vue-app',
    data: {
        name: 'Shiqing Dong',
        job: 'Programmer',
        website: 'https://www.baidu.com/',
        websiteTag: '<a href="https://www.baidu.com/">The Net Shiqing Dong Website</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
