
require('./app.router.js');
require('./app.store.js');

var app_vue = new Vue({

    el: '#app',

    router: Router,

    store: Store,

    data: {},

    computed: {
    },

    mounted: function () {

    	this.$store.commit('setHomepageMsg', {
    	    msg: 'Homepage'
    	});

    	this.$store.commit('setUsersMsg', {
    	    msg: 'Users'
    	});
    },

    methods: {
    }
})