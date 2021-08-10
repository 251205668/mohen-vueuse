import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/index/index.vue';
import Login from '@/views/login/index.vue';
import Dashboard from '@/views/dashboard/index.vue';
import Components from '@/views/components/index.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'dashboard',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: '/components',
        name: 'components',
        component: Components,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
