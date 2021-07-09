<template>
    <div>
        <h1>{{ msg }}</h1>    
    </div>
</template>

<script>

    require('../app/app.store.js');

    export default{
        data: function () {
            return {
            }
        },
        computed: {
            msg: function () {
                return this.$store.state.homepage_msg;
            }
        },
        mounted: function () {
        },
        methods: {
        }
    }
</script>