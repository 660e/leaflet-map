import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'leaflet-map',
    component: () => import('@/views')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
