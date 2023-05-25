import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [Vue(), vuetify()],
});
