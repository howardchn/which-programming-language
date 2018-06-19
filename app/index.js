import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import Vue from 'vue';
import App from './components/App.vue';
import AppRouter from './routers/router';

new Vue({
    el: '#app',
    components: { App },
    template: '<App />',
    router: AppRouter
});