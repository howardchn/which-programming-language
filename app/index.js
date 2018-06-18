import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import App1 from './App1.vue';
import Home from './Home.vue';

Vue.use(VueRouter);

let router = new VueRouter({routes: [
    { name: 'home', path: '/', component: Home, default: true }
]});

router.replace('/');

new Vue({
    el: '#app',
    components: { App1 },
    template: '<App1 />',
    router: router
});