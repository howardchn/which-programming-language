import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#app',
    components: { App },
    template: '<App />'
});