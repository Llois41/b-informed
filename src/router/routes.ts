import Home from '../pages/Home/index.vue'
import About from '../pages/About/index.vue'
import { RouteRecordRaw } from 'vue-router';

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
] as const satisfies Readonly<RouteRecordRaw[]>
