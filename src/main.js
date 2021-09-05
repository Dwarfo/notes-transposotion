import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/contact', component: Contact }
    ]
  });

const app = createApp(App);
app.use(router);
app.mount('#app');