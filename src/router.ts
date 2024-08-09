import { createRouter, createWebHistory } from 'vue-router';

// saasPlatform
const mainRoutes = [
  {
    name: 'main',
    path: '/',
    component: () => import('@/views/MainView.vue')
  },
  {
    name: 'editor',
    path: '/editor',
    component: () => import('@/views/test/EditorTest.vue')
  },
  {
    name: 'dataTable',
    path: '/dataTable',
    component: () => import('@/views/test/dataTable.vue')
  },
  {
    name: 'chart',
    path: '/chart',
    component: () => import('@/views/test/chartTest.vue')
  },
  {
    name: 'websocket',
    path: '/websocket',
    component: () => import('@/views/test/websocket.vue')
  }
];

const routes = [...mainRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

router.beforeEach(async () => {});

export default router;
