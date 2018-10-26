new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('you clicked me');
        },
        father() {
            alert("father click");
        },
        child() {
            alert("child click");
        },
        contextmenu(event) {
            console.log(event);
            ///event.preventDefault();
        }
    }
});
