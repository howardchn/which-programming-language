import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Questions from '../components/Questions.vue';
import Results from '../components/Results.vue';

Vue.use(VueRouter);
let routes = [
    { name: 'home', path: '/', component: Home, default: true },
    { name: 'questions', path: '/questions/:id', component: Questions },
    { name: 'results', path: '/results/:id', component: Results }
];

export default new VueRouter({ routes });
