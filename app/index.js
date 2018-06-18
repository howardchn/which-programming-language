import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App1 from './components/App1.vue';
import Home from './components/Home.vue';
import Questions from './components/Questions.vue';
import Results from './components/Results.vue';

Vue.use(VueRouter);

let routes = [
    { name: 'home', path: '/', component: Home, default: true },
    { name: 'questions', path: '/questions/:id', component: Questions },
    { name: 'results', path: '/results/:id', component: Results }
];

let router = new VueRouter({ routes });

new Vue({
    el: '#app',
    components: { App1 },
    template: '<App1 />',
    router: router
});