import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router'
import './styles/main.scss'

createApp(App).use(router).mount('#app');
