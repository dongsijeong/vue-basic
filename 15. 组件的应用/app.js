Vue.component('greeting', {
    template: `
    <div>
        <p>{{name}}: 组件应用</p>
        <button @click="changeName">Change Name</button>
    </div>
    `,
    data() {
        return{
            name: 'Andy'
        }
    },
    methods: {
        changeName() {
            this.name = 'Dong shiqing'
        }
    }
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
