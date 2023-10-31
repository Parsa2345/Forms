import { createApp } from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification';
import  'vue-toast-notification/dist/theme-default.css';
// import  'vue-toast-notification/dist/theme-suagr.css';

createApp(App)
.use(VueToast,{position:'top-right'})
.mount('#app')
