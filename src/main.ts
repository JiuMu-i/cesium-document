import { createApp } from 'vue';
// amfe-flexible
import 'amfe-flexible';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
