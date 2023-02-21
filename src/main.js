import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/index.css';
import 'lodash';
import axios from 'axios';


// Vue.use(VueLodash, { name: 'custom', lodash: lodash})
const app = createApp(App);


app.use(store).
    mount('#app')
app.config.globalProperties.$axios = axios;



