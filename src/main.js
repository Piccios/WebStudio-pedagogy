import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router'
import './styles/main.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


createApp(App).use(router).mount('#app');
