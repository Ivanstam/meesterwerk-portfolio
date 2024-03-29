import { createApp } from 'vue'
import './style.css'
import router from "./router";
import store from "./store";
import App from "./App.vue";

const app = createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
