import { createRouter, createWebHistory } from 'vue-router';

// saasPlatform
const mainRoutes = [
  {
    name: 'main',
    path: '/',
    component: () => import('@/views/MainView.vue')
  }
];

const routes = [...mainRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

router.beforeEach(async () => {});

export default router;
