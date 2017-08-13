import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import { routes } from './routes/mainRoutes';
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

Vue.use(VueResource);

const vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});