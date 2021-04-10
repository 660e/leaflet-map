import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/map'
  },
  {
    path: '/map',
    component: () => import('@/views/map.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
