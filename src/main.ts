import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/router';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(router);

app.use(
  createAuth0({
    domain: 'b-informed.eu.auth0.com',
    clientId: '3i6PyoC1vsS6KUErMRU83PpBcgk3Fwc2',
    authorizationParams: {
      redirect_uri: 'http://localhost:5173/about',
    },
  }),
);

app.mount('#app');
