import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes.ts';

export const router = createRouter({
  history: createWebHistory(),
  routes: Array.from(Object.values(routes)),
});
