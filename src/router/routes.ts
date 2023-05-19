import Home from '../pages/Home/index.vue';
import About from '../pages/About/index.vue';
import { RouterLinkProps } from 'vue-router';

type RouteNamesReadonly = keyof typeof routes;

export const routes = {
  home: { path: '/', component: Home },
  about: { path: '/about', component: About },
} as const;

export function getPathForRoute(routeName: RouteNamesReadonly): RouterLinkProps['to'] {
  return routes[routeName];
}
