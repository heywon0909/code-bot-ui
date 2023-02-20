import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/index.css';
import 'lodash';

// Vue.use(VueLodash, { name: 'custom', lodash: lodash})
const app = createApp(App);
app.use(store).
    mount('#app')




