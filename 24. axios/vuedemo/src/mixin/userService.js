import axios from 'axios';

export default {
    created() {
    },
    methods: {
        getUsers() {
            axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
                //console.log(response);
                this.mxn_usersData = response.data;
            });
        },
        getUsers2() {
            return axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
                //console.log(response);
                this.mxn_usersData = response.data;
            });
        }
    },
    data() {
        var mxn_usersData = [];
        return {
            mxn_usersData
        }
    }
}