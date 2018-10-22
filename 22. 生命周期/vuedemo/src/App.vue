<template>
    <div>
        <div>
            <app-helloWorld v-if="!destoryed"></app-helloWorld>
        </div>
        <div>
            <button @click="changeDes">destoryed</button>
        </div>
    </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue';
export default {
    components: {
        'app-helloWorld': HelloWorld
    },
    data () {
        return {
            destoryed: false
        }
    },
    methods: {
        changeDes() {
            this.destoryed = true;
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
