import Home from '../pages/Home/index.vue';
import About from '../pages/About/index.vue';
import { type KeysFromMap } from '../types/utility/KeysFromMap.ts';
import { RouterLinkProps } from 'vue-router';

export function routes() {
  const map = new Map([
    ['home', { path: '/', component: Home }],
    ['about', { path: '/about', component: About }],
  ] as const);
  return map as ReadonlyMapFromMap<typeof map>;
}

export type ReadonlyMapFromMap<TMap> = TMap extends Map<infer K, infer V> ? ReadonlyMap<K, V> : never;

type RouteNamesReadonly = KeysFromMap<ReturnType<typeof routes>>;

export function getPathForRoute(routeName: RouteNamesReadonly): RouterLinkProps['to'] {
  return routes().get(routeName)!.path;
}
