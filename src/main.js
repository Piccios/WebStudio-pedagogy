import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.scss'

// Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Importing Axios
// import axios from 'axios';
// import VueAxios from 'vue-axios';





createApp(App).use(router).mount('#app');
