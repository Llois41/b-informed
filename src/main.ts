import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import App from './App.vue';
import { router } from './router/router';
import { auth0Plugin } from './auth/auth0Plugin.ts';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const app = createApp(App);

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

app.use(vuetify);

app.use(router);

app.use(auth0Plugin);

app.mount('#app');
