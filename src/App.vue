<template>
    <div id="app">
        <flow-one></flow-one>
        <hr>
        <flow-two></flow-two>
        <hr>
        <flow-three></flow-three>
    </div>
</template>

<script>
    import FlowOne from './components/flow-one.vue';
    import FlowTwo from './components/flow-two.vue';
    import FlowThree from './components/flow-three.vue';

    export default {
        name: 'app',
        components: { FlowOne, FlowTwo, FlowThree },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
