
import VueRouter from 'vue-router';

var Homepage = require('../components/homepage.vue').default,
    Users    = require('../components/users.vue').default,
    Posts    = require('../components/posts.vue').default;

var routes = [

    {
        path: '/',
        component: Homepage,
        //redirect : '/homepage',
    },
    {
        path: '/users',
        component: Users,
    },
    {
        path: '/posts',
        component: Posts,
    },
];

var Router = new VueRouter({
    routes: routes
});

/*
 * Exports
 */
window.Router = Router;