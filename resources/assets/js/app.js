
window.Vue = require('vue');

import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

window.VueRouter = VueRouter;

require('./app/app.vue.js');
