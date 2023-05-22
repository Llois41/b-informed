import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import App from './App.vue';
import { router } from './router/router';
import { auth0Plugin } from './auth/auth0Plugin.ts';

const app = createApp(App);

const vuetify = createVuetify();

app.use(vuetify);

app.use(router);

app.use(auth0Plugin);

app.mount('#app');
